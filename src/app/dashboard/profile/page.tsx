import React from "react";
import Image from "next/image";
import ProfileHeader from "public/images/profileHeader.png";
import Profile from "public/images/profile.png";
import Chart from "public/images/chart.png";

import Back from "public/icons/site/back.svg";
const Page = () => {
  return (
    <div className="bg-white">
      <div className="flex w-full">
        <Image
          className="h-64 w-full"
          alt="ProfileHeader"
          src={ProfileHeader}
        />
        <div className="ml-6 flex h-14 justify-center rounded-full bg-white px-3 py-4 shadow-2xl">
          <Back />
        </div>
      </div>
      <div className="relative">
        <div className="w-65 absolute -bottom-20 flex h-64 rounded-full">
          <Image className=" w-full" alt="Profile" src={Profile} />
        </div>
        <div className="absolute -bottom-20 left-11 rounded-full bg-white">
          <Image className="h-44 w-44" alt="Chart" src={Chart} />
        </div>
      </div>
      <div className="mt-36 flex bg-[#F5F5F5] text-black">
        <p>اطلاعات شخصی</p>
        <p>اطلاعات شرکت</p>
        <p>حساب شرکت</p>
      </div>
    </div>
  );
};

export default Page;
