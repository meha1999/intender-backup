"use client";
import Input from "@/components/common/Input";
import PasswordInput from "@/components/common/PasswordInput";
import Button from "@/components/common/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { passwordPattern, phonePattern } from "@/configs/regex";

type Inputs = {
  phoneNumber: string;
  password: string;
  rememberMe: boolean;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const handleLogin: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(errors);

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
            hookFormProps={register("phoneNumber", {
              required: true,
              pattern: phonePattern,
            })}
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-bold text-black">{"رمز عبور"}</p>
          <PasswordInput
            placeHolder=""
            hookFormProps={register("password", {
              required: true,
              pattern: passwordPattern,
            })}
          />
        </div>
        <div className="flex justify-between pt-8">
          <div className="flex items-center gap-2.5">
            <input
              type="checkbox"
              className="accent-weeny"
              {...register("rememberMe")}
            />
            <p className="text-xs font-bold text-black">
              {"مرا به خاطر بسپار"}
            </p>
          </div>
          <Button
            type="submit"
            className="rounded-2xl border border-brand bg-brand px-20 py-2.5 text-sm font-bold text-white hover:bg-white hover:text-brand"
          >
            {"ورود"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Login;
