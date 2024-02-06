"use client";
import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { AiOutlineEye } from "react-icons/ai";
import { PiEyeClosed } from "react-icons/pi";

interface PasswordInputProps {
  placeHolder?: string;
  hookFormProps?: UseFormRegisterReturn<string>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeHolder,
  hookFormProps,
}) => {
  const [passwordHide, setPasswordHide] = useState(true);

  return (
    <div className="relative flex w-full items-center justify-between rounded-xl bg-common-light px-4">
      <input
        type={passwordHide ? "password" : "text"}
        className="h-12 w-full rounded-xl border-none bg-transparent text-sm font-medium text-black placeholder:text-sm placeholder:font-medium placeholder:text-common-dark focus:border-none focus:outline-none focus:ring-0"
        placeholder={placeHolder}
        {...hookFormProps}
        autoComplete="current-password"
      />
      <div
        className="absolute left-3 cursor-pointer "
        onClick={() => setPasswordHide(!passwordHide)}
      >
        {passwordHide ? <PiEyeClosed /> : <AiOutlineEye />}
      </div>
    </div>
  );
};

export default PasswordInput;
