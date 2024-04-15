import React from "react";
import Button from "@/components/common/Button";
import { FaArrowAltCircleLeft } from "react-icons/fa";

interface RequestCardProps {
  index: number;
  id: string;
  name: string;
  desc: string;
  requestType: string;
  status: string;
  time: string;
  date: string;
}

const RequestCard: React.FC<RequestCardProps> = ({
  index,
  id,
  name,
  desc,
  requestType,
  status,
  time,
  date,
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
          </Button>
        </div>
      </div>
      <div className="border border-light-gray" />
      <div className="flex  w-5/12 items-center text-xs font-bold text-dark-gray">
        {desc}
      </div>
      <div className="border border-light-gray" />
      <div className="flex w-1/12 flex-col items-center justify-center gap-1.5 text-xs text-black">
        <p>{requestType}</p>
      </div>
      <div className="border border-light-gray" />
      <div className="flex w-1/12 flex-col items-center justify-center gap-1.5 text-xs text-green-500">
        <p>{status}</p>
      </div>
      <div className="border border-light-gray" />
      <div className=" flex w-2/12 items-center justify-center gap-5 text-xs">
        <div className="flex flex-col text-blue-500">
          <p>{time}</p>
          <p>{date}</p>
        </div>
        <FaArrowAltCircleLeft className="cursor-pointer text-2xl text-brand" />
      </div>
    </div>
  );
};

export default RequestCard;
