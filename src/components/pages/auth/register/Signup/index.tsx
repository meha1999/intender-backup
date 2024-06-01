"use client";
import Input from "@/components/common/Input";
import PasswordInput from "@/components/common/PasswordInput";
import Button from "@/components/common/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { emailPattern, passwordPattern, phonePattern } from "@/configs/regex";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { authServiceHandler } from "@/services/auth.service";
import { Dispatch, SetStateAction, useState } from "react";

type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  password: string;
  repeatPassword: string;
  company_national_id: string;
  position: string;
};


interface SignupProps {
  setVerificationToken: Dispatch<SetStateAction<string>>;
}

const Signup: React.FC<SignupProps> = ({ setVerificationToken }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const handleRegister: SubmitHandler<Inputs> = async (data) => {
    const res = await authServiceHandler.signup(data);
    setVerificationToken(res.data.verification_token);
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)} className="h-full">
      <div className="flex h-full flex-col gap-5 py-0 max-3xl:gap-4">
        <p className="text-3xl font-bold text-black">{"صفحه ثبت نام"}</p>
        <p className="text-sm text-secondary-light max-3xl:hidden">
          {"مشخصات خود را در این قسمت وارد کنید."}
        </p>

        <div className="flex items-center gap-4">
          <div className="flex w-full flex-col gap-2.5">
            <p className="text-sm font-bold text-black">{"نام"}</p>
            <Input
              placeHolder="نام "
              hookFormProps={register("first_name", {
                required: {
                  value: true,
                  message: "نام اجباری میباشد.",
                },
              })}
            />
            <HookFormErrorHandler errors={errors} name="name" />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <p className="text-sm font-bold text-black">{"نام خانوادگی"}</p>
            <Input
              placeHolder="نام خانوادگی"
              hookFormProps={register("last_name", {
                required: {
                  value: true,
                  message: "نام خانوادگی اجباری میباشد.",
                },
              })}
            />
            <HookFormErrorHandler errors={errors} name="last_name" />
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"شماره تماس"}</p>
          <Input
            placeHolder="09123456789"
            hookFormProps={register("mobile", {
              required: { value: true, message: "شماره تماس اجباری میباشد." },
              pattern: {
                value: phonePattern,
                message: "فرمت شماره تلفن نامعتبر است.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="mobile" />
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"ایمیل"}</p>
          <Input
            placeHolder="email@mail.com"
            hookFormProps={register("email", {
              required: { value: true, message: "ایمیل اجباری میباشد." },
              pattern: {
                value: emailPattern,
                message: "فرمت ایمیل نامعتبر است.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="email" />
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"رمز عبور"}</p>
          <PasswordInput
            placeHolder=""
            hookFormProps={register("password", {
              required: { value: true, message: "رمز عبور اجباری میباشد" },
              pattern: {
                value: passwordPattern,
                message: "فرمت رمز عبور نامعتبر است",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="password" />
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"تکرار رمز عبور"}</p>
          <PasswordInput
            placeHolder=""
            hookFormProps={register("repeatPassword", {
              required: {
                value: true,
                message: "تکرار رمز عبور اجباری میباشد",
              },
              pattern: {
                value: passwordPattern,
                message: "فرمت تکرار رمز عبور نامعتبر است",
              },
              validate: (value) => {
                const { password } = getValues();
                return (
                  password === value || "تکرار رمز عبور با رمز عبور برابر نیست."
                );
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="repeatPassword" />
        </div>

        {/* <div className="flex justify-between">
          <p className="text-xs text-black">
            {"آیا عضو شرکت در اینتندر هستید؟"}
          </p>
          <input
            type="checkbox"
            className="accent-brand"
            {...register("isMember")}
          />
        </div> */}

        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"شماره ثبت ملی شرکت"}</p>
          <Input
            placeHolder="شماره ثبت ملی شرکت را وارد کنید"
            hookFormProps={register("company_national_id", {
              required: {
                value: true,
                message: "شماره ثبت ملی شرکت اجباری میباشد.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="position" />
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"سمت"}</p>
          <Input
            placeHolder="سمت را وارد کنید"
            hookFormProps={register("position", {
              required: {
                value: true,
                message: "سمت اجباری میباشد.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="position" />
        </div>
        <Button
          type="submit"
          className="mt-auto rounded-2xl border border-brand bg-brand px-20 py-2.5 text-sm font-bold text-white hover:bg-white hover:text-brand"
        >
          {"ثبت نام"}
        </Button>
      </div>
    </form>
  );
};

export default Signup;
