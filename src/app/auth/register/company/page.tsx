"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { emailPattern } from "@/configs/regex";
import { useZustandStore } from "@/store";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuUploadCloud } from "react-icons/lu";

interface StepperComponentsProps {
  setActiveTab: (value: number) => void;
}

const BasicInformation: React.FC<StepperComponentsProps> = ({
  setActiveTab,
}) => {
  const { setBasicInfo } = useZustandStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanySignUpType>();

  const handleSubmitBasicInfo: SubmitHandler<CompanySignUpType> = (data) => {
    setBasicInfo(data);
    setActiveTab(1);
  };

  return (
    <form
      className="flex w-full flex-col gap-9"
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
              required: { value: true, message: "نام انگلیسی برند اجباری میباشد." },
            })}
          />
          <HookFormErrorHandler errors={errors} name="brand_name_en" />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"نام شرکت"}</p>
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
          <p className="text-sm font-bold text-black">{"شماره تلفن ثابت"}</p>
          <Input
            placeHolder="شماره تلفن ثابت"
            hookFormProps={register("phone", {
              required: {
                value: true,
                message: "شماره تلفن ثابت اجباری میباشد.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="phone" />
        </div>
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"پست الکترونیک"}</p>
          <Input
            placeHolder="پست الکترونیک"
            hookFormProps={register("email", {
              required: {
                value: true,
                message: "پست الکترونیک اجباری میباشد.",
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
      <Button className="rounded-xl border border-brand bg-brand py-2 text-sm font-bold text-white hover:bg-white hover:text-brand">
        {"مرحله بعد"}
      </Button>
    </form>
  );
};

const Documents: React.FC<StepperComponentsProps> = ({ setActiveTab }) => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold text-black">{"آگهی تاسیس شرکت"}</p>
        <div className="flex h-[150px] w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-weeny bg-light-weeny text-sm font-semibold text-weeny">
          <LuUploadCloud className="text-xl" />
          {"آپلود آگهی"}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold text-black">{"پروژه های انجام شده"}</p>
        <div className="flex h-[150px] w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-weeny bg-light-weeny text-sm font-semibold text-weeny">
          <LuUploadCloud className="text-xl" />
          {"آپلود نمونه کار"}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold text-black">{"رضایت نامه مشتری"}</p>
        <div className="flex h-[150px] w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-weeny bg-light-weeny text-sm font-semibold text-weeny">
          <LuUploadCloud className="text-xl" />
          {"آپلود رضایت نامه"}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          onClick={() => setActiveTab(0)}
          className="w-full rounded-xl border border-brand bg-white py-2 text-sm font-bold text-brand hover:bg-brand hover:text-white"
        >
          {"مرحله قبل"}
        </Button>
        <Button
          onClick={() => setActiveTab(2)}
          className="w-full rounded-xl border border-brand bg-brand py-2 text-sm font-bold text-white hover:bg-white hover:text-brand"
        >
          {"مرحله بعد"}
        </Button>
      </div>
    </div>
  );
};

const Certificates: React.FC<StepperComponentsProps> = ({ setActiveTab }) => {
  return <div className="flex w-full flex-col gap-9"></div>;
};

const CompanyRegister = () => {
  const [actvieTab, setActiveTab] = useState(0);

  const steps = [
    <BasicInformation setActiveTab={setActiveTab} />,
    <Documents setActiveTab={setActiveTab} />,
    <Certificates setActiveTab={setActiveTab} />,
  ];

  return (
    <div className="flex flex-col items-center gap-9">
      <p className="text-3xl font-bold">{"ثبت شرکت"}</p>
      {/* //Stepper */}
      <div className="flex w-full items-center gap-2">
        <div
          onClick={() => setActiveTab(0)}
          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border ${actvieTab >= 0 ? "border-brand bg-white" : "border-secondary-light bg-secondary-light"}`}
        >
          <div
            className={`h-6 w-6 rounded-full ${actvieTab >= 0 ? "bg-brand" : "bg-secondary-light"}`}
          />
        </div>
        <div
          className={`h-1 grow ${actvieTab > 0 ? "bg-brand" : "bg-secondary-light"}`}
        />
        <div
          onClick={() => setActiveTab(1)}
          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border ${actvieTab >= 1 ? "border-brand bg-white" : "border-secondary-light bg-secondary-light"}`}
        >
          <div
            className={`h-6 w-6 rounded-full ${actvieTab >= 1 ? "bg-brand" : "bg-secondary-light"}`}
          />
        </div>
        <div
          className={`h-1 grow ${actvieTab > 1 ? "bg-brand" : "bg-secondary-light"}`}
        />
        <div
          onClick={() => setActiveTab(2)}
          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border ${actvieTab >= 2 ? "border-brand bg-white" : "border-secondary-light bg-secondary-light"}`}
        >
          <div
            className={`h-6 w-6 rounded-full ${actvieTab >= 2 ? "bg-brand" : "bg-secondary-light"}`}
          />
        </div>
      </div>
      {/* //Stepper */}
      {steps[actvieTab]}
    </div>
  );
};

export default CompanyRegister;
