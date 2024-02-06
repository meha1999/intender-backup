import Input from "@/components/common/Input";
import { IoCallOutline } from "react-icons/io5";
import { IoBusiness } from "react-icons/io5";
import PasswordInput from "@/components/common/PasswordInput";
import Button from "@/components/common/Button";

const Login = () => {
  return (
    <div className="flex flex-col">
      <p className="text-2xl font-extrabold text-black">{"ورود"}</p>
      <div className="flex gap-10 pt-11">
        <div className="flex flex-col gap-10">
          <p className="flex h-12 items-center text-base font-bold text-white">
            {"اشخاص:"}
          </p>
          <p className="flex h-12 items-center text-base font-bold text-white">
            {"شرکت‌ها:"}
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-10">
            <Input placeHolder="شماره تماس" label="" Icon={IoCallOutline} />
            <PasswordInput placeHolder="رمز عبور" />
          </div>
          <div className="flex gap-10">
            <Input placeHolder="نام رسمی شرکت" label="" Icon={IoBusiness} />
            <PasswordInput placeHolder="رمز عبور" />
          </div>
          <div className="flex items-center gap-10 pt-16">
            <Button className="rounded-2xl bg-brand px-14 py-2.5 text-lg font-medium text-white hover:bg-white hover:text-brand">
              {"ورود"}
            </Button>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-5 w-5 rounded-full" />
              <p className="font-semibold">
                {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
