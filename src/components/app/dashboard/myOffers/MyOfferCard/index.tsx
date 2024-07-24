import React from "react";
import Exclamation from "public/icons/dashboard/exclamation.svg";
import { Controller, useForm } from "react-hook-form";
import { Checkbox, Select, SelectItem, Tooltip } from "@nextui-org/react";
import { tenderServiceHandler } from "@/services/tender.service";
import Link from "next/link";

const MyOfferCard: React.FC<Bid> = ({
  id,
  status,
  comments,
  description,
  company,
  created_at,
  document,
  manager,
  offers,
  title,
  tender,
}) => {
  type Inputs = {
    isConfirm: boolean;
    service: string;
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const handleChangeStatus = async () => {
    const res = await tenderServiceHandler.updateBidStatus(
      id,
      status === "ACCEPTED" ? "REJECTED" : "ACCEPTED",
    );
  };

  return (
    <Link
      href={`/dashboard/bid/${id}`}
      className="flex h-full w-full items-center justify-center rounded-xl bg-light-gray px-10 py-3 text-xs"
    >
      <div className="flex w-[15%] items-center justify-start gap-5 px-2">
        <p className=" font-bold text-black">{title}</p>
      </div>
      <div className="flex w-[15%] items-center justify-center gap-5 px-2">
        <p className=" font-bold text-black">{tender.name}</p>
      </div>
      <div className="flex h-full w-[20%] items-center justify-center overflow-auto bg-light-gray text-black">
        {description}
      </div>

      <div className="flex w-[15%] items-center justify-center ">
        <p className="rounded-xl bg-[#FFD9D1] px-6 py-2 text-xs text-brand ">
          {company.name}
        </p>
      </div>
      <div className="flex w-[15%] items-center justify-center ">
        <p className=" text-black">
          <Tooltip content={manager?.email}>
            <p>
              {manager?.first_name} {manager?.last_name}
            </p>
          </Tooltip>
        </p>
      </div>

      <div className="flex w-[15%] items-center justify-center">
        <p className=" text-black">{status}</p>
      </div>

      <div className="flex w-[5%] items-center justify-end">
        <Checkbox
          isSelected={status === "ACCEPTED"}
          color="primary"
          radius="sm"
          onClick={handleChangeStatus}
        />
      </div>
    </Link>
  );
};

export default MyOfferCard;
