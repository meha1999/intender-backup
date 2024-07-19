import { tenderStatus } from "@/configs/tender";
import React from "react";
import { CiStar } from "react-icons/ci";
import Badge from "public/icons/dashboard/sidebar/badge.svg";
import Button from "@/components/common/Button";

interface AdvertisementCardProps {
  index: number;
  id: string;
  name: string;
  desc: string;
  product: string;
  status: "active" | "deactive";
  activity: string;
  visit: string;
  time: string;
  activityNum: number;
  visitNum: number;
}

const AdvertisementCard: React.FC<AdvertisementCardProps> = ({
  index,
  id,
  name,
  desc,
  product,
  status,
  activity,
  visit,
  time,
  activityNum,
  visitNum,
}) => {
  return (
    <div className="flex w-full gap-5 rounded-3xl bg-white px-6 py-5">
      <div className="flex w-3/12 items-center gap-5">
        <p className="text-sm font-bold text-dark-gray">{index + 1}</p>
        <div className="flex items-center gap-2">
          <div className="h-16 w-16 rounded-3xl border-4 border-weeny">
            <div className="h-full rounded-3xl border-4 border-light-gray"></div>
          </div>
          <Button
            className="flex flex-col gap-1"
            href={`/dashboard/advertisements/${id}`}
          >
            <p className="font-bold text-black">{name}</p>
            <p className="text-xs font-bold text-dark-gray">{product}</p>
          </Button>
        </div>
      </div>
      <div className="border border-light-gray" />
      <div className="flex  w-7/12 items-center text-xs font-bold text-dark-gray">
        {desc}
      </div>
      <div className="border border-light-gray" />
      <div className="flex w-1/12 flex-col items-start justify-center gap-1.5 text-xs">
        <div
          className={`flex items-center gap-1 font-bold ${status === "active" ? "text-green-500" : "text-red-500"}`}
        >
          <p>{tenderStatus[status]}</p>
        </div>
        <p className="font-bold text-black">{activity}</p>
        <p className="font-bold text-dark-gray">{visit}</p>
      </div>
      <div className="flex w-1/12 flex-col items-end justify-center gap-1.5 text-xs">
        <div
          className={`flex items-center gap-1 font-bold ${status === "active" ? "text-blue-500" : "text-red-500"}`}
        >
          <p>{time}</p>
        </div>
        <p className="font-bold text-black">{activityNum}</p>
        <p className="font-bold text-dark-gray">{visitNum}</p>
      </div>
      <div className="border border-light-gray" />
      <div className="relative bottom-7 flex w-1/12 flex-col justify-center gap-3">
        <div className=" flex justify-end">
          <Badge />
        </div>
        <div className="flex items-center text-brand">
          <CiStar className="h-6 w-6" />
          <CiStar className="h-6 w-6" />
          <CiStar className="h-6 w-6" />
          <CiStar className="h-6 w-6" />
          <CiStar className="h-6 w-6" />
        </div>
        <div className="flex w-full  justify-between">
          <p className="text-xs font-bold text-dark-gray">امتیاز</p>
          <p className=" text-xs font-bold text-dark-gray">۴/۵</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;
