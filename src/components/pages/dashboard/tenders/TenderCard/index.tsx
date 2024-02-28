import Button from "@/components/common/Button";
import { tenderStatus } from "@/configs/tender";
import React from "react";

interface TenderCardProps {
  index: number;
  id: string;
  name: string;
  desc: string;
  product: string;
  status: "active" | "deactive";
  origin: string;
}

const TenderCard: React.FC<TenderCardProps> = ({
  index,
  id,
  name,
  desc,
  origin,
  product,
  status,
}) => {
  return (
    <div className="flex w-full gap-5 rounded-3xl bg-white px-6 py-5">
      <div className="flex w-3/12 items-center gap-5">
        <p className="text-sm font-bold text-dark-gray">{index + 1}</p>
        <div className="flex items-center gap-2">
          <div className="h-16 w-16 rounded-full border-4 border-brand">
            <div className="h-full rounded-full border-4 border-light-gray"></div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-black">{name}</p>
            <p className="text-xs font-bold text-dark-gray">{product}</p>
          </div>
        </div>
      </div>
      <div className="border border-light-gray" />
      <div className="flex w-7/12 items-center text-xs font-bold text-dark-gray">
        {desc}
      </div>
      <div className="border border-light-gray" />
      <div className="flex w-1/12 flex-col items-center justify-center gap-1.5 text-xs">
        <div
          className={`flex items-center gap-1 font-bold ${status === "active" ? "text-green-500" : "text-red-500"}`}
        >
          <div
            className={`h-2 w-2 rounded-full ${status === "active" ? "bg-green-500" : "bg-red-500"}`}
          />
          <p>{tenderStatus[status]}</p>
        </div>
        <p className="text-black font-bold">{origin}</p>
        <p className="font-bold text-dark-gray">#{id}</p>
      </div>
      <div className="border border-light-gray" />
      <div className="flex w-1/12 items-center">
        <Button className="w-full rounded-xl border border-brand bg-brand py-2 text-xs font-bold text-white hover:bg-white hover:text-brand">
          {"مشاهده بیشتر"}
        </Button>
      </div>
    </div>
  );
};

export default TenderCard;
