"use client";
import { siteHeader } from "@/configs/layout";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ColoredLogo from "public/icons/site/coloredLogo.svg";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="container relative mx-auto flex justify-between  px-20 py-4">
      <div className="flex h-10 w-48">
        <ColoredLogo />
      </div>
      <div className="flex items-center gap-4 text-sm font-semibold text-white">
        {siteHeader.map((item) => (
          <Button
            href={item.route}
            key={item.route}
            className="flex items-center justify-center gap-2 bg-transparent text-white"
          >
            {item?.icon}
            {item.name}
            {/* {pathname === item.route && <div className=""/>} */}
          </Button>
        ))}
      </div>
      <div className="flex">
        <Button className="rounded-3xl bg-weeny px-5 py-2.5 text-white">
          <Link href={"/auth/login"}>
            {"ورود "} | {"ثبت نام"}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
