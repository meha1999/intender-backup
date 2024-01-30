import Button from "@/components/common/Button";
import { social } from "@/configs/layout";
import ColoredLogo from "public/icons/coloredLogo.svg";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container mx-auto bg-black py-12 text-white">
      <div className="flex justify-between">
        <div className="flex flex-col gap-6">
          <Button className="text-xs font-bold text-primary">{"بیشتر"}</Button>
          <Button className="text-xs font-bold ">{"همکاری با ما"}</Button>
          <Button className="text-xs font-bold ">{"تماس با ما"}</Button>
          <Button className="text-xs font-bold ">{"درباره ما"}</Button>
          <Button className="text-xs font-bold ">{"قوانین و مقررات"}</Button>
        </div>
        <ColoredLogo />
      </div>
      <div className="mt-20 border border-white" />
      <div className="flex w-full items-center justify-center gap-2.5 pt-8">
        {social.map((item) => (
          <Button key={item.url}>{item.icon}</Button>
        ))}
      </div>
      <div dir="ltr" className="pt-4 text-white flex items-center gap-1 justify-center">
      <FaRegCopyright />  {"copywrite. all rights reserved."} 
      </div>
    </div>
  );
};

export default Footer;
