"use client";
import Info from "@/components/app/profile/Info";
import Members from "@/components/app/profile/Members";
import Resources from "@/components/app/profile/Resources";
import Tags from "@/components/app/profile/Tags";
import { useZustandStore } from "@/store";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { TiEdit } from "react-icons/ti";

const Profile = () => {
  const {
    userProfile: { company },
  } = useZustandStore();
  return (
    <div className="flex flex-col gap-7 px-12 py-16">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-brand">{"اطلاعات شرکت"}</p>
        <Button className="bg-weeny px-12 py-2.5 text-sm font-bold text-white">
          <Link href={""}>{"ویرایش اطلاعت"}</Link>
        </Button>
      </div>
      {/* <div className="flex flex-col gap-2.5">
        <p className="font-bold text-brand">{"راه های ارتباطی"}</p>
        <div className="flex flex-col gap-4 rounded-xl bg-milky px-6 py-4">
          <div className="flex justify-between">
            <div className="flex w-1/4 flex-col items-center gap-4">
              <p className="text-sm font-bold text-dark-gray">{"شماره تماس"}</p>
              <div className="flex items-center gap-11 text-sm font-bold text-black">
                {company?.phone}
              </div>
            </div>
            <div className="h-16 border border-secondary-light" />
            <div className="flex w-1/4 flex-col items-center gap-4">
              <p className="text-sm font-bold text-dark-gray">
                {"پست الکترونیک"}
              </p>
              <p className="flex items-center gap-11 text-sm font-bold text-black">
                {company?.email}
              </p>
            </div>
            <div className="h-16 border border-secondary-light" />
            <div className="flex w-1/4 flex-col items-center gap-4">
              <p className="text-sm font-bold text-dark-gray">{"کد پستی"}</p>
              <p className="flex items-center gap-11 text-sm font-bold text-black">
              </p>
            </div>
            <div className="h-16 border border-secondary-light" />
            <div className="flex w-1/4 cursor-pointer items-center justify-center gap-2 text-weeny">
              <p className="text-xs font-bold">{"ویرایش اطلاعات"}</p>
              <TiEdit />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-dark-gray">{"نشانی شرکت"}</p>
            <p className="text-xs text-black">{company?.address}</p>
          </div>
        </div>
      </div> */}
      <Info />
      <div className="flex flex-col gap-9">
        <Members />
        <Tags />
      </div>
    </div>
  );
};

export default Profile;
