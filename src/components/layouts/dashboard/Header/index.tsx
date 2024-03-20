"use client";
import SearchInput from "@/components/common/SearchInput";
import { BsSearch } from "react-icons/bs";
import Title from "public/icons/dashboard/title.svg";
import { TbBellFilled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import { dashboardSideBar } from "@/configs/layout";

const Header = () => {
  const pathname = usePathname();
  const selectedRoute = dashboardSideBar.find((item) => item.url === pathname);

  return (
    <div className="bg-light-gray px-8">
      <div className="container mx-auto flex justify-between py-10">
        <div className="flex items-center gap-2.5">
          <Title className="text-primary" />
          <p className="text-2xl font-bold text-brand">{selectedRoute?.name}</p>
        </div>
        <div className="flex items-center gap-10">
          {/* <SearchInput
          placeHolder="جستجو"
          Icon={
            <div className="cursor-pointer pl-2 text-xl text-brand">
              <BsSearch />
            </div>
          }
        /> */}
          <TbBellFilled className="text-4xl text-secondary-light" />
          <div className="flex cursor-pointer items-center gap-4 rounded-[65px] bg-white p-2 ">
            <div className="h-8 w-8 rounded-full bg-slate-400"></div>
            <IoIosArrowDown className="text-2xl font-bold text-brand" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
