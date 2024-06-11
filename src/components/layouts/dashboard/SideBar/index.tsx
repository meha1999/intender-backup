"use client";
import Button from "@/components/common/Button";
import { dashboardSideBar } from "@/configs/layout";
import { usePathname } from "next/navigation";
import { ImExit } from "react-icons/im";
import Logo from "public/icons/dashboardLogo.svg";
import { ImOffice } from "react-icons/im";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col items-start justify-between bg-primary py-9 pr-10 max-xl:pr-5">
      <div className="flex flex-col gap-16">
        <Logo />
        <div className="flex h-8 w-full flex-col gap-8">
          {dashboardSideBar.map((item) => (
            <Button
              key={item.url}
              href={item.url}
              className={`flex items-center justify-between ${pathname === item.url ? "text-brand" : "text-white"}`}
            >
              <div className="flex items-center gap-5">
                {item.icon}
                <p className="glow text-sm font-bold">{item.name}</p>
              </div>
              {pathname === item.url && <div className="w-1.5 bg-brand" />}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <div className="w-full pl-10 max-xl:pl-5 ">
          <Button
            href={"/profile"}
            className="flex w-full items-center justify-center gap-3 rounded-3xl border border-white bg-white py-2 text-secondary-dark hover:bg-secondary-dark hover:text-white"
          >
            <ImOffice />
            <p className="font-bold">{"پروفایل شرکت"}</p>
          </Button>
        </div>
        <div className="w-full pl-10 max-xl:pl-5 ">
          <Button className="flex w-full items-center justify-center gap-3 rounded-3xl border border-white bg-white py-2 text-secondary-dark hover:bg-secondary-dark hover:text-white">
            <ImExit />
            <p className="font-bold">{"خروج"}</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
