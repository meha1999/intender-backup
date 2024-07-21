"use client";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useZustandStore } from "@/store";
import Tags from "@/components/app/auth/company/ProfessionalInfo/Tags";
import { authServiceHandler } from "@/services/auth.service";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { companyServiceHandler } from "@/services/company.service";
import { useDebounce } from "use-debounce";
import { tenderServiceHandler } from "@/services/tender.service";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";

const CreateTnder = () => {
  const [company, setCompany] = useState("");
  const [members, setMembers] = useState<Array<CompanyMember>>([]);
  const [companies, setCompanies] = useState<Array<CompanyListType>>([]);
  const [search] = useDebounce(company, 1000);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<CreateTender>();

  const { tags, setTags, services, setServices, setConfigs, configs } =
    useZustandStore();

  const handleCreateTender: SubmitHandler<CreateTender> = async (data) => {
    try {
      await tenderServiceHandler.createTender({
        ...data,
        deadline: new Date(data.deadline).toISOString().split("T")[0],
        start: new Date(data.start).toISOString().split("T")[0],
      });
      router.push("/dashboard/myTenders");
      toast.success("مناقصه با موفقیت ساخته شد.");
    } catch (error) {
      toast.error("خطای سرور");
      console.log(error);
      
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

  const handleGetConfigs = async () => {
    const res = await authServiceHandler.getConfigs();
    setConfigs(res.data);
  };

  const handleGetMembers = async () => {
    const res = await companyServiceHandler.getMembers();
    setMembers(res.data);
  };

  useEffect(() => {
    handleGetTags();
    handleGetServices();
    handleGetConfigs();
    handleGetMembers();
  }, []);

  const getCompanyByName = async () => {
    const res = await companyServiceHandler.getCompanies({
      search,
    });
    setCompanies(res.data);
  };

  useEffect(() => {
    getCompanyByName();
  }, [search]);

  console.log(watch("tender_type"));

  return (
    <form
      className="flex grow flex-col gap-7 rounded-3xl bg-white p-8"
      onSubmit={handleSubmit(handleCreateTender)}
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-black">نوع مناقصه</p>
        <div className="flex gap-24 text-sm text-black">
          <Controller
            control={control}
            name="tender_type"
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                orientation="horizontal"
                value={value}
                onValueChange={onChange}
              >
                <Radio value="PRIVATE">محدود</Radio>
                <Radio value="PUBLIC">عمومی</Radio>
              </RadioGroup>
            )}
          />
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <div className="flex w-1/3 flex-col gap-2">
          <p className="text-sm font-bold text-black">نام مناقصه</p>
          <Input
            placeholder="...!نام مورد نظر را وارد کنید"
            variant="bordered"
            className="text-black"
            classNames={{
              inputWrapper: "bg-white",
            }}
            {...register("name")}
          />
          <HookFormErrorHandler errors={errors} name="name" />
        </div>
        <div className="flex w-1/3 flex-col gap-2">
          <p className="text-sm font-bold text-black">نام پروژه</p>
          <Input
            placeholder="...!نام پروژه مورد نظر را وارد کنید"
            variant="bordered"
            className="text-black"
            classNames={{
              inputWrapper: "bg-white",
            }}
            {...register("project_name")}
          />
          <HookFormErrorHandler errors={errors} name="name" />
        </div>

        <div className="flex w-1/3 flex-col gap-2">
          <p className="text-sm font-bold text-black">مدیر مربوطه</p>
          <Controller
            control={control}
            name="manager"
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
          />
          <HookFormErrorHandler errors={errors} name="service" />
        </div>

        <div className="flex w-1/3 flex-col gap-2">
          <p className="text-sm font-bold text-black">واحد های درگیر</p>
          <Controller
            control={control}
            name="assigns"
            render={({ field: { onChange, value } }) => (
              <Select
                selectionMode="multiple"
                variant="bordered"
                className="text-black"
                selectedKeys={value}
                onSelectionChange={onChange}
                classNames={{
                  mainWrapper: "bg-white",
                }}
              >
                {configs?.decipline&&Object?.keys(configs?.decipline)?.map((decipline) => (
                  <SelectItem className="text-black" key={decipline}>
                    {configs?.decipline[decipline]}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
          <HookFormErrorHandler errors={errors} name="service" />
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex w-1/3 flex-col gap-2">
          <p className="text-sm font-bold text-black">تاریخ شروع </p>
          <div style={{ direction: "rtl", height: "100%" }}>
            <Controller
              control={control}
              name="start"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <DatePicker
                  onChange={onChange}
                  value={value}
                  className="h-full w-full"
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                />
              )}
            />
          </div>
          <HookFormErrorHandler errors={errors} name="start" />
        </div>
        <div className="flex w-1/3 flex-col gap-2">
          <p className="text-sm font-bold text-black">تاریخ پایان </p>
          <div style={{ direction: "rtl", height: "100%" }}>
            <Controller
              control={control}
              name="deadline"
              render={({ field: { onChange, value, ref } }) => (
                <DatePicker
                  onChange={onChange}
                  value={value}
                  className="h-full w-full"
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                />
              )}
            />
          </div>
          <HookFormErrorHandler errors={errors} name="deadline" />
        </div>
        <div className="flex w-1/3 flex-col gap-2">
          <p className="text-sm font-bold text-black">سرویس</p>
          <Controller
            control={control}
            name="service"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                selectionMode="multiple"
                variant="bordered"
                className="text-black"
                selectedKeys={value}
                onSelectionChange={onChange}
                classNames={{
                  mainWrapper: "bg-white",
                }}
              >
                {services.map((service) => (
                  <SelectItem className="text-black" key={service.id}>
                    {service.name}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
          <HookFormErrorHandler errors={errors} name="service" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-black">توضیحات </p>
        <Textarea
          placeholder="متن مورد نظر را وارد کنید...|"
          variant="bordered"
          className="text-black"
          disableAutosize
          classNames={{
            input: "resize-y h-[300px]",
            inputWrapper: "bg-white",
          }}
          {...register("description")}
        />
        <HookFormErrorHandler errors={errors} name="description" />
      </div>
      {/* <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold text-black">وندور های انتخابی</p>
          <Controller
            control={control}
            name="assigns"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Autocomplete
                defaultItems={companies}
                placeholder="نلم شرکت را وارد کنید"
                className="max-w-xs text-black"
                inputValue={company}
                onInputChange={setCompany}
                selectedKey={value?.length ? value[0] : undefined}
                onSelectionChange={(e) => onChange([e])}
              >
                {(cmp) => (
                  <AutocompleteItem className="text-black" key={cmp.id}>
                    {cmp.name}
                  </AutocompleteItem>
                )}
              </Autocomplete>
            )}
          />

          <HookFormErrorHandler errors={errors} name="assigns" />
        </div>
      </div> */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-black">بارگزاری فایل</p>
        <div className="flex flex-col gap-2 text-sm font-bold text-black">
          <input type="file" id="file" {...register("document")} />
          {/* <ul>
            {watch("document") &&
              Array.from(watch("document"))?.map((item) => (
                <li className="text-sm font-bold text-black" key={item.name}>
                  {item.name}
                </li>
              ))}
          </ul> */}
        </div>
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
      <div className="flex justify-between gap-7">
        <Button
          type="submit"
          className="rounded-xl border bg-brand px-16 py-3 text-white"
        >
          ارسال درخواست
        </Button>
      </div>
    </form>
  );
};

export default CreateTnder;
