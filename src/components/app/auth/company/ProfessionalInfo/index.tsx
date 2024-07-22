"use client";
import Button from "@/components/common/Button";
import SelectInput from "@/components/common/SelectInput";
import { authServiceHandler } from "@/services/auth.service";
import { useZustandStore } from "@/store";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import CompleteRegistrationModal from "../CompleteRegistrationModal";
import Tags from "./Tags";
import MultipleSelectInput from "@/components/common/MultipleSelectInput";
import errorHandler from "@/utils/errorHandler";

interface InputType {
  address: string;
  description: string;
  is_foreigner: true;
  tags: Array<string>;
  services: Array<{ text: string; value: number }>;
}

const ProfessionalInfo: React.FC = ({}) => {
  const {
    companyRegister,
    tags,
    setTags,
    services,
    setServices,
    setUserProfile,
  } = useZustandStore();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputType>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitBasicInfo: SubmitHandler<InputType> = async (data) => {
    const finalData = {
      ...companyRegister,
      ...data,
      company_type: companyRegister.company_type.value,
      tags: data.tags,
      services: data.services.map((item) => item.value),
      province: companyRegister.province.value,
    };
    try {
      await authServiceHandler.signupCompany(finalData);
      const res = await authServiceHandler.getProfile();
      setUserProfile(res.data);
      toast.success("ثبت شرکت با موفقیت تکمیل شد");
      setIsModalOpen(true);
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleGetTags = async () => {
    const res = await authServiceHandler.getTags();
    setTags(res.data);
  };

  const handleGetServices = async () => {
    const res = await authServiceHandler.getServices();
    setServices(res.data);
  };

  useEffect(() => {
    handleGetTags();
    handleGetServices();
  }, []);

  return (
    <>
      <form
        className="flex w-full flex-col gap-9"
        onSubmit={handleSubmit(handleSubmitBasicInfo)}
      >
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"آدرس"}</p>
          <textarea
            className="text-black"
            rows={3}
            placeholder="آدرس"
            {...register("address", {
              required: {
                value: true,
                message: "آدرس اجباری میباشد.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="address" />
        </div>
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"توضیحات"}</p>
          <textarea
            className="text-black"
            rows={3}
            placeholder="توضیحات"
            {...register("description", {
              required: {
                value: true,
                message: "توضیحات اجباری میباشد.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="description" />
        </div>
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"سرویس ها"}</p>
          {services && (
            <Controller
              control={control}
              name="services"
              render={({ field: { onChange, value, ref } }) => (
                <MultipleSelectInput
                  data={services.map((item) => {
                    return { text: item.name, value: item.id };
                  })}
                  placeholder="سرویس ها"
                  value={value}
                  setValue={onChange}
                />
              )}
            />
          )}
          <HookFormErrorHandler errors={errors} name="services" />
        </div>

        <div className="flex items-center gap-8">
          <div className="flex w-full flex-col gap-2.5">
            {tags && (
              <Controller
                control={control}
                name="tags"
                render={({ field: { onChange, value, ref } }) => (
                  <Tags list={tags} onChange={onChange} selectedList={value} />
                )}
              />
            )}
            <HookFormErrorHandler errors={errors} name="tags" />
          </div>
        </div>

        <Button className="rounded-xl border border-brand bg-brand py-2 text-sm font-bold text-white hover:bg-white hover:text-brand">
          {"ثبت"}
        </Button>
      </form>
      <CompleteRegistrationModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProfessionalInfo;
