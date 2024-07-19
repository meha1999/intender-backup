import React, { useState } from "react";

interface TableCardProps {
  index: number;
  id: string;
  type: string;
  report: string;
  status: string;
  date: string;
  city: string;
  code: string;
}

const TableCard: React.FC<TableCardProps> = ({
  index,
  id,
  type,
  report,
  status,
  date,
  city,
  code,
}) => {
  return (
    <div className="flex h-full w-full items-center justify-center gap-20 rounded-xl bg-light-gray px-16 py-4 text-xs">
      <div className="flex w-1/12 items-center justify-start">
        <div className=" text-black">{id}</div>
        <div className=" text-black">{type}</div>
      </div>
      <div className="flex w-3/12 items-center justify-start ">
        <div className=" text-black">{report}</div>
      </div>
      <div className="flex w-1/12 items-center justify-start ">
        <div className=" text-black">{status}</div>
      </div>
      <div className="flex w-2/12 items-center justify-start ">
        <div className=" text-black">{date}</div>
      </div>
      <div className="flex w-1/12 items-center justify-start">
        <div className=" text-black">{city}</div>
      </div>
      <div className="flex w-2/12 items-center justify-start">
        <div className=" text-black">{code}</div>
      </div>
      <div className="flex w-2/12 items-center justify-start">
        <div className=" text-black">{"جزئیات بیشتر"}</div>
      </div>
    </div>
  );
};

export default TableCard;
