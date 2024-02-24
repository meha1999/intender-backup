import SearchInput from "@/components/common/SearchInput";
import Logo from "public/icons/dashboardLogo.svg";
import { BsSearch } from "react-icons/bs";
import { TbBellFilled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between pb-6">
      <Logo />
      <div className="flex items-center gap-10">
        {/* <SearchInput
          placeHolder="جستجو"
          Icon={
            <div className="cursor-pointer pl-2 text-xl text-brand">
              <BsSearch />
            </div>
          }
        /> */}
        <TbBellFilled className="text-4xl text-gray-400" />
        <div className="flex cursor-pointer items-center gap-2 rounded-[65px] bg-secondary-dark pl-2">
          <div className="h-10 w-10 rounded-full bg-slate-400"></div>
          <IoIosArrowDown className="text-2xl text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Header;
