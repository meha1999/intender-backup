import Button from "@/components/common/Button";
import { social } from "@/configs/layout";
import ColoredLogo from "public/icons/site/coloredLogo.svg";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="container  mx-auto flex justify-between px-20 py-12 text-white max-md:flex-col max-md:gap-8 max-md:px-4">
        <div className="flex flex-col gap-3">
          <p className="text-base font-bold text-weeny">{"تماس با ما"}</p>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-white">{"آدرس"}</p>
            <p className="text-xs text-gray-400">
              تهران، ولنجک کدپستی: ۱۹۸۵۸۷۵۹۷۳
              <br />
              اصفهان، فلسطین کد پستی: ۸۱۵۴۸۱۳۵۷۴
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-white">{"شماره تماس"}</p>
            <p className="text-xs text-gray-400">09015123179</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-white">
              {"پست الکترونیک"}
            </p>
            <p className="text-xs text-gray-400">hi@intender.net</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-white">{"پیوند ها"}</p>
          <p className="cursor-pointer text-xs font-bold text-white">
            {"شرکت ها"}
          </p>
          <p className="cursor-pointer text-xs font-bold text-white">
            {"پشتیبانی"}
          </p>
          <p className="cursor-pointer text-xs font-bold text-white">
            {"منابع معتبر"}
          </p>
          <p className="font-xstext-xsld cursor-pointer text-sm text-white">
            {"درباره مناقصه"}
          </p>
          <p className="font-xstext-xsld cursor-pointer text-sm text-white">
            {"رویداد ها"}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-white">{"شبکه های اجتماعی"}</p>

          <div className="flex items-center gap-3">
            {social.map((item) => (
              <div className="text-weeny" key={item.url}>
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
