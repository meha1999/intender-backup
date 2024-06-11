"use client";
import { useEffect } from "react";
import Input from "@/components/common/Input";
import SelectInput from "@/components/common/SelectInput";
import { emailPattern } from "@/configs/regex";
import { authServiceHandler } from "@/services/auth.service";
import { useZustandStore } from "@/store";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";

interface StepperComponentsProps {
  setActiveTab: (value: number) => void;
}

interface InputType {
  name: string;
  name_en: string;
  brand_name: string;
  brand_name_en: string;
  registration_number: string;
  from_date: string;
  phone: string;
  company_type: { text: string; value: string };
  email: string;
  province: { text: string; value: string };
  city: string;
}

const GeneralInfo: React.FC<StepperComponentsProps> = ({ setActiveTab }) => {
  const { setBasicInfo, setConfigs, configs, companyRegister } =
    useZustandStore();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputType>({ values: companyRegister });

  const handleSubmitBasicInfo: SubmitHandler<InputType> = async (data) => {
    setBasicInfo(data);
    setActiveTab(1);
  };

  const handleGetConfigs = async () => {
    const res = await authServiceHandler.getConfigs();
    setConfigs(res.data);
  };

  useEffect(() => {
    handleGetConfigs();
  }, []);

  return (
    <form
      className="flex w-full grow flex-col gap-6"
      onSubmit={handleSubmit(handleSubmitBasicInfo)}
    >
      <div className="flex items-center gap-8">
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"نام شرکت"}</p>
          <Input
            placeHolder="نام شرکت"
            hookFormProps={register("name", {
              required: {
                value: true,
                message: "نام شرکت اجباری میباشد.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="name" />
        </div>
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"نام انگلیسی شرکت"}</p>
          <Input
            placeHolder="نام انگلیسی شرکت"
            hookFormProps={register("name_en", {
              required: {
                value: true,
                message: "نام انگلیسی شرکت اجباری میباشد.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="name_en" />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"نام برند"}</p>
          <Input
            placeHolder="نام برند"
            hookFormProps={register("brand_name", {
              required: { value: true, message: "نام برند اجباری میباشد." },
            })}
          />
          <HookFormErrorHandler errors={errors} name="brand_name" />
        </div>
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"نام انگلیسی برند"}</p>
          <Input
            placeHolder="نام انگلیسی برند"
            hookFormProps={register("brand_name_en", {
              required: {
                value: true,
                message: "نام انگلیسی برند اجباری میباشد.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="brand_name_en" />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"شماره ثبت شرکت"}</p>
          <Input
            placeHolder="شماره ثبت شرکت"
            hookFormProps={register("registration_number", {
              required: {
                value: true,
                message: "شماره ثبت شرکت اجباری میباشد.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="registration_number" />
        </div>
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"تاریخ شروع فعالیت"}</p>
          <Input
            placeHolder="تاریخ شروع فعالیت"
            hookFormProps={register("from_date", {
              required: {
                value: true,
                message: "تاریخ شروع فعالیت اجباری میباشد.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="from_date" />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"نوع شرکت"}</p>
          {configs?.company_type && (
            <Controller
              control={control}
              name="company_type"
              render={({ field: { onChange, value, ref } }) => (
                <SelectInput
                  data={Object?.keys(configs?.company_type).map((item) => {
                    return { text: configs.company_type[item], value: item };
                  })}
                  placeholder="نوع شرکت"
                  value={value}
                  setValue={onChange}
                />
              )}
            />
          )}
          <HookFormErrorHandler errors={errors} name="company_type" />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"استان"}</p>
          {configs?.province && (
            <Controller
              control={control}
              name="province"
              render={({ field: { onChange, value, ref } }) => (
                <SelectInput
                  data={Object?.keys(configs?.province).map((item) => {
                    return { text: configs.province[item], value: item };
                  })}
                  placeholder="استان"
                  value={value}
                  setValue={onChange}
                />
              )}
            />
          )}
          <HookFormErrorHandler errors={errors} name="province" />
        </div>
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"شهر"}</p>
          <Input
            placeHolder="شهر"
            hookFormProps={register("city", {
              required: {
                value: true,
                message: "شهر اجباری میباشد.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="city" />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"شماره تلفن ثابت شرکت"}</p>
          <Input
            placeHolder="شماره تلفن ثابت شرکت"
            hookFormProps={register("phone", {
              required: {
                value: true,
                message: "شماره تلفن ثابت شرکت اجباری میباشد.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="phone" />
        </div>
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"پست الکترونیک شرکت"}</p>
          <Input
            placeHolder="پست الکترونیک شرکت"
            hookFormProps={register("email", {
              required: {
                value: true,
                message: "پست الکترونیک شرکت اجباری میباشد.",
              },
              pattern: {
                value: emailPattern,
                message: "فرمت ایمیل اشتباه میباشد",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="email" />
        </div>
      </div>
      <Button
        type="submit"
        size="md"
        radius="full"
        className="mt-auto rounded-xl border border-brand bg-brand py-2 text-sm font-bold text-white hover:bg-white hover:text-brand"
      >
        {"مرحله بعد"}
      </Button>
    </form>
  );
};

export default GeneralInfo;
