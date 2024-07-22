"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { authServiceHandler } from "@/services/auth.service";
import OtpInput from "@/components/common/OtpInput";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";
import { BaseService } from "@/services/base.service";
import { useRouter } from "next/navigation";
import { useZustandStore } from "@/store";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import errorHandler from "@/utils/errorHandler";

type OtpInputs = {
  verification_code: number;
};

const ResetPasswordVerification = ({
  params,
}: {
  params: { token: string };
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { setUserProfile } = useZustandStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpInputs>();

  const handleVerification: SubmitHandler<OtpInputs> = async (data) => {
    setLoading(true);
    try {
      const res = await authServiceHandler.resetPasswordVerification({
        ...data,
        verification_token: params.token,
      });
      // setCookie("token", res.data.access);
      // setCookie("refresh", res.data.refresh);
      // BaseService.setToken(res.data.access);
      // const profile = await authServiceHandler.getProfile();
      // setUserProfile(profile.data);
      toast.success("پسورد با موفقیت تغییر یافت");
      router.push("/auth/login");
    } catch (error) {
      errorHandler(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleVerification)} className="h-full">
      <div className="flex h-full flex-col gap-5 py-0 max-3xl:gap-4">
        <p className="text-3xl font-bold text-brand">
          {"تایید تغییر رمز عبور"}
        </p>
        <p className="text-xl font-bold text-black">
          {"کد تاییدی که به موبایل شما sms شده است را وارد کنید"}
        </p>

        <div className="flex flex-col gap-2.5 pt-20">
          <OtpInput label="" name="verification_code" control={control} />
          <HookFormErrorHandler errors={errors} name="verification_code" />
        </div>

        <Button
          size="md"
          radius="full"
          type="submit"
          isLoading={loading}
          className="mt-auto rounded-2xl border border-brand bg-brand px-20 py-2.5 text-sm font-bold text-white hover:bg-white hover:text-brand"
        >
          {"تایید"}
        </Button>
      </div>
    </form>
  );
};

export default ResetPasswordVerification;
