"use client";
import Button from "@/components/common/Button";
import { useZustandStore } from "@/store";
import { CiUser } from "react-icons/ci";
import { IoIosExit } from "react-icons/io";

const UserInfo = () => {
  const { userProfile } = useZustandStore();
  return (
    <div className="flex w-1/4 items-center justify-between rounded-3xl bg-platinum px-4 py-2">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-weeny">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white">
            <CiUser className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold text-white">
            {userProfile.first_name}
          </p>
          <p className="text-xs text-white">{userProfile.company?.name}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {/* <IoIosArrowDown className="text-2xl cursor-pointer" /> */}
        <Button href={'/'} className="flex items-center gap-3 rounded-3xl bg-white px-6  py-3 text-weeny hover:bg-weeny hover:text-white">
          <IoIosExit className="text-xl" />
          <p className="text-base font-bold">{"خروج"}</p>
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
