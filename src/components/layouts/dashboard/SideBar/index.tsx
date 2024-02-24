"use client";
import Button from "@/components/common/Button";
import { dashboardSideBar } from "@/configs/layout";
import { usePathname } from "next/navigation";
import { ImExit } from "react-icons/im";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col  items-start justify-between">
      <div className="flex h-8 w-full flex-col gap-8 pt-12">
        {dashboardSideBar.map((item) => (
          <Button
            href={item.url}
            className={`flex items-center justify-between  ${pathname === item.url ? "text-brand" : "text-white"}`}
          >
            <div className="flex items-center gap-5">
              {item.icon}
              <p className="text-sm font-bold glow">{item.name}</p>
            </div>
            {pathname === item.url && <div className="w-1.5 bg-brand" />}
          </Button>
        ))}
      </div>
      <div className="w-full pl-9 ">
        <Button className="mb-8 flex w-full items-center justify-center gap-3 rounded-3xl border border-white bg-white py-2 text-secondary-dark hover:bg-secondary-dark hover:text-white">
          <ImExit />
          <p className="font-bold">{"خروج"}</p>
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
