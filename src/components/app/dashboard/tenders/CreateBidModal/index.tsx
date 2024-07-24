"use client";
import { companyServiceHandler } from "@/services/company.service";
import { tenderServiceHandler } from "@/services/tender.service";
import errorHandler from "@/utils/errorHandler";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Upload from "public/icons/dashboard/upload.svg";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface CreateBidModalPropos {
  id: string;
  tender: TendersListItem;
}
const CreateBidModal: React.FC<CreateBidModalPropos> = ({ id, tender }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<CreateBid>();
  const [members, setMembers] = useState<Array<CompanyMember>>([]);

  const handleGetMembers = async () => {
    const res = await companyServiceHandler.getMembers();
    setMembers(res.data);
  };

  const handleCreateBid: SubmitHandler<CreateBid> = async (data) => {
    try {
      await tenderServiceHandler.createBid(id, {
        ...data,
        resume: data.resume[0],
      });
      toast.success("درخواست با موفقیت ثبت شد.");
      router.push("/dashboard/myOffers");
    } catch (error) {
      errorHandler(error);
    }
  };

  useEffect(() => {
    // handleGetMembers();
  }, []);

  return (
    <>
      <Button
        onPress={onOpen}
        className="rounded-xl border border-brand bg-brand px-20 py-4 text-white hover:bg-white hover:text-brand"
      >
        {"ثبت درخواست"}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-black">
            ثبت درخواست
          </ModalHeader>
          <ModalBody>
            <form
              className="flex flex-col gap-6 text-black"
              onSubmit={handleSubmit(handleCreateBid)}
            >
              <div className="flex items-center gap-4">
                <div className="flex w-full flex-col gap-1">
                  <p className="text-sm font-bold">شرکت در مناقصه</p>
                  <Input variant="bordered" disabled value={tender?.name} />
                </div>
                <div className="flex w-full flex-col gap-1">
                  <p className="text-sm font-bold">نام مدیر پروژه</p>
                  {/* <Controller
                    control={control}
                    name="title"
                    render={({ field: { onChange, value } }) => (
                      <Select
                        variant="bordered"
                        className="text-black"
                        selectedKeys={[value]}
                        onChange={onChange}
                        classNames={{
                          mainWrapper: "bg-white",
                        }}
                      >
                        {members?.map((member) => (
                          <SelectItem className="text-black" key={member.id}>
                            {` ${member.first_name} ${member.last_name}`}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  /> */}
                  <Input variant="bordered" {...register("title")} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold">شرکت ایجاد کننده</p>
                <Input
                  variant="bordered"
                  disabled
                  value={tender.company.name}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold">متن درخواست مناقصه</p>
                <Textarea
                  {...register("description")}
                  variant="bordered"
                  placeholder="متن مورد نظر را وارد کنید...|"
                />
              </div>

              <label
                htmlFor="file"
                className="flex cursor-pointer flex-col items-center gap-5 rounded-3xl border-4 border-dashed border-secondary-light py-6"
              >
                {watch("resume") ? (
                  <p className="text-xl font-bold text-black">
                    {watch("resume")[0]?.name}
                  </p>
                ) : (
                  <>
                    <Upload className="text-brand" />
                    <p className="text-xl font-bold">{"آپلود تصاویر/مدارک"}</p>
                  </>
                )}
              </label>
              <input
                {...register("resume")}
                type="file"
                id="file"
                className="invisible absolute left-0 top-0 z-20 h-full w-full cursor-pointer rounded-3xl bg-transparent text-transparent"
              />
              <div className="flex justify-between gap-7 pb-4">
                <Button
                  type="submit"
                  className="w-full rounded-xl bg-brand px-16 py-3 text-white"
                >
                  ارسال درخواست
                </Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateBidModal;
