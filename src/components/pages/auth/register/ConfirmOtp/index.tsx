"use client";
import Button from "@/components/common/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { authServiceHandler } from "@/services/auth.service";
import OtpInput from "@/components/common/OtpInput";

type OtpInputs = {
  verification_code: number;
};

interface ConfirmOtpProps {
  verificationToken: string;
}

const ConfirmOtp: React.FC<ConfirmOtpProps> = ({ verificationToken }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpInputs>();

  const handleVerification: SubmitHandler<OtpInputs> = async (data) => {
    const res = await authServiceHandler.signupVerification({
      ...data,
      verification_token: verificationToken,
    });
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(handleVerification)} className="h-full">
      <div className="flex h-full flex-col gap-5 py-0 max-3xl:gap-4">
        <p className="text-3xl font-bold text-black">{"تایید ثبت نام"}</p>

        <div className="flex flex-col gap-2.5">
          <OtpInput
            label="کد تایید"
            name="verification_code"
            control={control}
          />
          <HookFormErrorHandler errors={errors} name="verification_code" />
        </div>

        <Button
          type="submit"
          className="mt-auto rounded-2xl border border-brand bg-brand px-20 py-2.5 text-sm font-bold text-white hover:bg-white hover:text-brand"
        >
          {"تایید"}
        </Button>
      </div>
    </form>
  );
};

export default ConfirmOtp;
