"use client";
import Input from "@/components/common/Input";
import PasswordInput from "@/components/common/PasswordInput";
import { Button } from "@nextui-org/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { phonePattern } from "@/configs/regex";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { useRouter } from "next/navigation";
import { authServiceHandler } from "@/services/auth.service";
import { useState } from "react";
import { toast } from "react-toastify";
import errorHandler from "@/utils/errorHandler";

type Inputs = {
  mobile: string;
  company_national_id: string;
  new_password: string;
};

const ResetPassword = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);

  const handleResetPassword: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      const res = await authServiceHandler.resetPassword(data);
      toast.success("لینک تایید با موفقیت ارسال شد.");
      router.push(
        `/auth/resetPasswordVerification/${res.data.verification_token}`,
      );
    } catch (error) {
      errorHandler(error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(handleResetPassword)}>
      <div className="flex flex-col gap-5 py-14">
        <p className="text-3xl font-bold text-black">
          {"صفحه فراموشی رمز عبور"}
        </p>
        <p className="text-sm text-secondary-light">
          {"اطلاعات خود را در این قسمت وارد کنید."}
        </p>

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

        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"رمز عبور جدید"}</p>
          <PasswordInput
            placeHolder=""
            hookFormProps={register("new_password", {
              required: { value: true, message: "رمز عبور جدید اجباری میباشد" },
              // pattern: {
              //   value: passwordPattern,
              //   message: "فرمت رمز عبور نامعتبر است",
              // },
            })}
          />
          <HookFormErrorHandler errors={errors} name="new_password" />
        </div>
        <div className="flex justify-between pt-8">
          <Button
            size="md"
            radius="full"
            type="submit"
            className="w-full rounded-2xl border border-brand bg-brand px-20 py-2.5 text-sm font-bold text-white hover:bg-white  hover:text-brand"
            isLoading={loading}
          >
            ارسال کد تایید
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ResetPassword;
