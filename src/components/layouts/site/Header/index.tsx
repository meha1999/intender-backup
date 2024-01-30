"use client";
import Button from "@/components/common/Button";
import { siteHeader } from "@/configs/layout";
import { usePathname } from "next/navigation";
import Logo from "public/icons/logo.svg";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between px-8 py-7 relative">
      <div className="flex items-center gap-12 text-sm font-semibold text-white">
        <Button className="rounded-xl bg-brand px-5 py-2.5">
          {"ورود / ثبت نام"}
        </Button>
        {siteHeader.map((item) => (
          <Button
            href={item.route}
            key={item.route}
            className="flex flex-col items-center gap-7"
          >
            {item.name}
            {/* {pathname === item.route && <div className=""/>} */}
          </Button>
        ))}
      </div>
      <div className="absolute left-8 top-2">
        <Logo />
      </div>
    </div>
  );
};

export default Header;
