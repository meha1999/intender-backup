"use client";
import Input from "@/components/common/Input";
import PasswordInput from "@/components/common/PasswordInput";
import Button from "@/components/common/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  passwordPattern,
  phonePattern,
  userNamePattern,
} from "@/configs/regex";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";

type Inputs = {
  name: string;
  username: string;
  phoneNumber: string;
  password: string;
  repeatPassword: string;
  isMember: boolean;
  company: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const handleRegister: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegister)} className="h-full">
      <div className="max-3xl:gap-4 flex h-full flex-col gap-5 py-0">
        <p className="text-3xl font-bold text-black">{"صفحه ثبت نام"}</p>
        <p className="max-3xl:hidden text-sm text-secondary-light">
          {"مشخصات خود را در این قسمت وارد کنید."}
        </p>

        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2.5">
            <p className="text-sm font-bold text-black">{"نام/نام خانوادگی"}</p>
            <Input
              placeHolder="نام/نام خانوادگی"
              hookFormProps={register("name", {
                required: {
                  value: true,
                  message: "نام و نام خانوادگی اجباری میباشد.",
                },
              })}
            />
            <HookFormErrorHandler errors={errors} name="name" />
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-sm font-bold text-black">{"نام کاربری"}</p>
            <Input
              placeHolder="نام کاربری"
              hookFormProps={register("username", {
                required: { value: true, message: "نام کاربری اجباری میباشد." },
                pattern: {
                  value: userNamePattern,
                  message: "فرمت نام کاربری فقط شامل حروف و اعداد است.",
                },
              })}
            />
            <HookFormErrorHandler errors={errors} name="username" />
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"شماره تماس"}</p>
          <Input
            placeHolder="09123456789"
            hookFormProps={register("phoneNumber", {
              required: { value: true, message: "شماره تماس اجباری میباشد." },
              pattern: {
                value: phonePattern,
                message: "فرمت شماره تلفن نامعتبر است.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="phoneNumber" />
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
          <p className="text-sm font-bold text-black">{"رمز عبور"}</p>
          <PasswordInput
            placeHolder=""
            hookFormProps={register("repeatPassword", {
              required: { value: true, message: "رمز عبور اجباری میباشد" },
              pattern: {
                value: passwordPattern,
                message: "فرمت رمز عبور نامعتبر است",
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

        <div className="flex justify-between">
          <p className="text-xs text-black">
            {"آیا عضو شرکت در اینتندر هستید؟"}
          </p>
          <input
            type="checkbox"
            className="accent-brand"
            {...register("isMember")}
          />
        </div>

        {watch("isMember") && (
          <div className="flex flex-col gap-2.5">
            <p className="text-sm font-bold text-black">{"نام شرکت"}</p>
            <Input
              placeHolder="نام شرکت را وارد کنید"
              hookFormProps={register("company", {
                required: {
                  value: watch("isMember"),
                  message: "نام شرکت اجباری میباشد.",
                },
              })}
            />
            <HookFormErrorHandler errors={errors} name="company" />
          </div>
        )}
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

export default Register;
