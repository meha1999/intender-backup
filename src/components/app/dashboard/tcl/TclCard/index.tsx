import React, { useState } from "react";

interface TclCardProps {
  index: number;
  id: string;
  commentA: string;
  responseA: string;
  commentB: string;
  responseB: string;
  status: string;
}

const TclCard: React.FC<TclCardProps> = ({
  index,
  id,
  commentA,
  commentB,
  responseA,
  responseB,
  status,
}) => {

  return (
    <div className="flex h-full w-full items-center justify-center gap-20 rounded-xl bg-light-gray px-12 py-4 text-xs">
      <div className="flex w-[22%] items-center justify-start">
        <div className=" text-black">{commentA}</div>
      </div>
      <div className="flex w-[22%] items-center justify-start ">
        <div className=" text-black">{responseA}</div>
      </div>
      <div className="flex w-[22%] items-center justify-start ">
        <div className=" text-black">{commentB}</div>
      </div>
      <div className="flex w-[22%] items-center justify-start ">
        <div className=" text-black">{responseB}</div>
      </div>
      <div className="flex w-[12%] items-center justify-start">
        <div className=" text-black">{status}</div>
      </div>
    </div>
  );
};

export default TclCard;
