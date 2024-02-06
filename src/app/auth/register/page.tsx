import Input from "@/components/common/Input";
import { IoCallOutline } from "react-icons/io5";
import { IoBusiness } from "react-icons/io5";
import PasswordInput from "@/components/common/PasswordInput";
import Button from "@/components/common/Button";
import { SiBrandfolder } from "react-icons/si";
import { PiCertificateDuotone } from "react-icons/pi";
import { FaCalendarDays } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import TextArea from "@/components/common/TextArea";
import { FaLocationDot } from "react-icons/fa6";

const Register = () => {
  return (
    <div className="flex flex-col">
      <p className="text-2xl font-extrabold text-black">{"ثبت نام"}</p>
      <div className="flex gap-10 pt-6">
        <div className="flex flex-col gap-10">
          <p className="flex h-12 items-center text-base font-bold text-white">
            {"اشخاص:"}
          </p>
          <p className="flex h-12 items-center text-base font-bold text-white">
            {"شرکت‌ها:"}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-10">
            <Input placeHolder="شماره تماس" label="" Icon={IoCallOutline} />
            <PasswordInput placeHolder="رمز عبور" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-10">
              <Input placeHolder="نام رسمی شرکت" label="" Icon={IoBusiness} />
              <PasswordInput placeHolder="رمز عبور" />
            </div>
            <div className="flex gap-10">
              <Input
                placeHolder="نام برند شرکت"
                label=""
                Icon={SiBrandfolder}
              />
              <Input
                placeHolder="شماره ثبت شرکت"
                label=""
                Icon={PiCertificateDuotone}
              />
            </div>
            <div className="flex gap-10">
              <Input
                placeHolder="تاریخ شروع فعالیت"
                label=""
                Icon={FaCalendarDays}
              />
              <Input
                placeHolder="شماره تلفن ثابت"
                label=""
                Icon={IoCallOutline}
              />
            </div>
            <Input
              placeHolder=" ایمیل شرکت"
              label=""
              Icon={MdOutlineAlternateEmail}
            />
            <div className="flex gap-10">
              <Input placeHolder="انتخاب شهر" label="" Icon={IoIosArrowDown} />
              <Input
                placeHolder="آگهی تاسیس شرکت"
                label=""
                Icon={GrAttachment}
              />
            </div>
            <TextArea
              placeHolder="آدرس دفتر/ کارگاه/کارخانه "
              Icon={FaLocationDot}
            />
          </div>
          <div className="flex justify-between">
            <Button className="flex items-center gap-1 rounded-2xl bg-black px-7 py-4 text-sm font-medium text-white hover:bg-white hover:text-black">
              {"پروژه‌های انجام شده"}
              <GrAttachment />
            </Button>
            <Button className="flex items-center gap-1 rounded-2xl bg-black px-7 py-4 text-sm font-medium text-white hover:bg-white hover:text-black">
              {"رضایت‌نامه‌های مشتری"}
              <GrAttachment />
            </Button>
          </div>
          <div className="flex items-center gap-10">
            <Button className="rounded-2xl bg-brand px-14 py-2.5 text-lg font-medium text-white hover:bg-white hover:text-brand">
              {"ثبت نام"}
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

export default Register;
