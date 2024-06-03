"use client";
import Button from "@/components/common/Button";
import { siteHeader } from "@/configs/layout";
import { usePathname } from "next/navigation";
import ColoredLogo from "public/icons/site/coloredLogo.svg";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="relative flex justify-between px-80 py-4">
      <div className="flex h-10 w-48">
        <ColoredLogo />
      </div>
      <div className="flex items-center gap-12 text-sm font-semibold text-white">
        {siteHeader.map((item) => (
          <Button
            href={item.route}
            key={item.route}
            className="flex items-center justify-center gap-2"
          >
            {item?.icon}
            {item.name}
            {/* {pathname === item.route && <div className=""/>} */}
          </Button>
        ))}
      </div>
      <div className="flex">
        <Button
          href={"/auth/login"}
          className="rounded-3xl bg-weeny px-3 py-2.5"
        >
          {"ورود "} | {"ثبت نام"}
        </Button>
      </div>
    </div>
  );
};

export default Header;
