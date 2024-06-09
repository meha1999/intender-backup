"use client";
import Info from "@/components/pages/profile/Info";
import Members from "@/components/pages/profile/Members";
import Resources from "@/components/pages/profile/Resources";
import Tags from "@/components/pages/profile/Tags";
import { useZustandStore } from "@/store";
import { TiEdit } from "react-icons/ti";

const Profile = () => {
  const {
    userProfile: { company },
  } = useZustandStore();
  return (
    <div className="flex flex-col gap-7 px-12 py-16">
      <p className="text-lg font-bold text-brand">{"اطلاعات شرکت"}</p>
      <div className="flex flex-col gap-2.5">
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
                {/* {"***1216511"} */}
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
      </div>
      <Info />
      <div className="flex gap-9">
        <Members />
        <div className="flex w-1/2 flex-col gap-9">
          <Resources />
          <Tags />
        </div>
      </div>
    </div>
  );
};

export default Profile;
