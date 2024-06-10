"use client";
import Input from "@/components/common/Input";
import PasswordInput from "@/components/common/PasswordInput";
// import Button from "@/components/common/Button";
import { Button, Checkbox } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { passwordPattern, phonePattern } from "@/configs/regex";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { useRouter } from "next/navigation";
import { authServiceHandler } from "@/services/auth.service";
import { useState } from "react";
import { setCookie } from "cookies-next";
import { BaseService } from "@/services/base.service";
import { useZustandStore } from "@/store";
import { toast } from "react-toastify";
import Link from "next/link";

type Inputs = {
  username: string;
  password: string;
  company_national_id: string;
  multipleCompanies?: boolean;
};

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);

  const { setUserProfile } = useZustandStore();

  const handleLogin: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      delete data.multipleCompanies;
      const res = await authServiceHandler.login(data);
      setCookie("token", res.data.access);
      setCookie("refresh", res.data.refresh);
      BaseService.setToken(res.data.access);
      const profile = await authServiceHandler.getProfile();
      setUserProfile(profile.data);
      toast.success("با موفقیت وارد شدید.");
      router.push("/dashboard");
    } catch (error) {
      toast.error("خطای سرور");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="flex flex-col gap-5 py-14">
        <p className="text-3xl font-bold text-black">{"صفحه ورود"}</p>
        <p className="text-sm text-secondary-light">
          {"مشخصات خود را در این قسمت وارد کنید."}
        </p>

        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"شماره تماس"}</p>
          <Input
            placeHolder="09123456789"
            hookFormProps={register("username", {
              required: { value: true, message: "شماره تماس اجباری میباشد." },
              pattern: {
                value: phonePattern,
                message: "فرمت شماره تلفن نامعتبر است.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="username" />
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"رمز عبور"}</p>
          <PasswordInput
            placeHolder=""
            hookFormProps={register("password", {
              required: { value: true, message: "رمز عبور اجباری میباشد" },
              // pattern: {
              //   value: passwordPattern,
              //   message: "فرمت رمز عبور نامعتبر است",
              // },
            })}
          />
          <HookFormErrorHandler errors={errors} name="password" />
        </div>
        <div className="flex items-center gap-2.5 pr-2">
          <input
            type="checkbox"
            className="accent-weeny"
            {...register("multipleCompanies")}
          />
          <p className="text-xs font-bold text-black">{"عضو چند شرکت هستم"}</p>
        </div>

        {watch("multipleCompanies") && (
          <div className="flex flex-col gap-2.5">
            <p className="text-sm font-bold text-black">{"شماره ثبت شرکت"}</p>
            <Input
              placeHolder=""
              hookFormProps={register("company_national_id", {
                required: {
                  value: true,
                  message: "شماره ثبت شرکت اجباری میباشد.",
                },
              })}
            />
            <HookFormErrorHandler errors={errors} name="company_national_id" />
          </div>
        )}

        <div className="flex justify-between pt-8">
          <Button
            size="md"
            radius="full"
            type="submit"
            className="rounded-2xl border border-brand bg-brand px-20 py-2.5 text-sm font-bold text-white hover:bg-white hover:text-brand"
            isLoading={loading}
          >
            ورود
          </Button>
          <Link
            href={"/auth/register"}
            className="px-4 py-2 text-xl font-bold text-brand"
          >
            {"حساب ندارید؟ ثبت نام کنید"}
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
