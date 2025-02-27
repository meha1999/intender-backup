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
    <div className="max-3xl:rounded-xl relative flex w-full items-center justify-between rounded-xl bg-milky px-4">
      <input
        type={passwordHide ? "password" : "text"}
        className="max-3xl:h-10 h-12 w-full rounded-xl border-none bg-transparent text-sm font-medium text-black placeholder:text-sm placeholder:font-medium placeholder:text-secondary-light focus:border-none focus:outline-none focus:ring-0"
        placeholder={placeHolder}
        {...hookFormProps}
        autoComplete="current-password"
      />
      <div
        className="absolute left-3 cursor-pointer text-secondary-light"
        onClick={() => setPasswordHide(!passwordHide)}
      >
        {passwordHide ? <PiEyeClosed /> : <AiOutlineEye />}
      </div>
    </div>
  );
};

export default PasswordInput;
