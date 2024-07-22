"use client";
import PasswordInput from "@/components/common/PasswordInput";
import { passwordPattern } from "@/configs/regex";
import { authServiceHandler } from "@/services/auth.service";
import errorHandler from "@/utils/errorHandler";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuFileEdit } from "react-icons/lu";
import { toast } from "react-toastify";

type ChangePasswordInputs = {
  old_password: string;
  new_password: string;
  repeatPassword: string;
};

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ChangePasswordInputs>();
  const [loading, setLoading] = useState(false);

  const handleChangePassword: SubmitHandler<ChangePasswordInputs> = async (
    data,
  ) => {
    setLoading(true);
    try {
      await authServiceHandler.changePassword(data);
      toast.success("رمز عبور با موفقیت بروزرسانی شد.");
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleChangePassword)}
      className="flex flex-col gap-10 rounded-3xl bg-white p-11"
    >
      <p className="text-lg font-bold text-brand">{"تغییر رمز عبور"}</p>
      <div className="flex items-center gap-4">
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"رمز عبور قدیمی"}</p>
          <PasswordInput
            placeHolder=""
            hookFormProps={register("old_password", {
              required: { value: true, message: "رمز عبور اجباری میباشد" },
              pattern: {
                value: passwordPattern,
                message: "فرمت رمز عبور نامعتبر است",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="old_password" />
        </div>

        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"رمز عبور جدید"}</p>
          <PasswordInput
            placeHolder=""
            hookFormProps={register("new_password", {
              required: { value: true, message: "رمز عبور اجباری میباشد" },
              pattern: {
                value: passwordPattern,
                message: "فرمت رمز عبور نامعتبر است",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="new_password" />
        </div>

        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-bold text-black">
            {"تکرار رمز عبور جدید"}
          </p>
          <PasswordInput
            placeHolder=""
            hookFormProps={register("repeatPassword", {
              required: {
                value: true,
                message: "تکرار رمز عبور جدید اجباری میباشد",
              },
              pattern: {
                value: passwordPattern,
                message: "فرمت تکرار رمز عبور جدید نامعتبر است",
              },
              validate: (value) => {
                const { new_password } = getValues();
                return (
                  new_password === value ||
                  "تکرار رمز عبور جدید با رمز عبور جدید برابر نیست."
                );
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="repeatPassword" />
        </div>
      </div>
      <Button
        size="md"
        radius="full"
        type="submit"
        className="mr-auto w-1/12 rounded-2xl border border-weeny bg-weeny !py-2.5 px-20 text-sm font-bold text-white hover:bg-white hover:text-weeny"
        isLoading={loading}
      >
        <LuFileEdit className="h-4 w-4" />
        {"تغییر رمز"}
      </Button>{" "}
    </form>
  );
};

export default ChangePassword;
