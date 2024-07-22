import React from "react";
import Exclamation from "public/icons/dashboard/exclamation.svg";
import { Controller, useForm } from "react-hook-form";
import { Checkbox, Select, SelectItem, Tooltip } from "@nextui-org/react";
import { tenderServiceHandler } from "@/services/tender.service";

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
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-light-gray py-3 text-xs px-10">
      <div className="flex w-[20%] items-center justify-start gap-5 px-2">
        <p className=" text-black">{title}</p>
      </div>
      <div className="flex h-full w-[20%] items-center justify-start overflow-auto bg-light-gray text-black">
        {description}
        {/* <Controller
          control={control}
          name="service"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Select
              selectionMode="multiple"
              variant="bordered"
              className="text-black"
              // selectedKeys={value}
              onSelectionChange={onChange}
              classNames={{
                mainWrapper: "bg-white",
              }}
            >
              {offers.map((offer) => (
                <SelectItem className="text-black" key={offer?.file}>
                  {offer?.created_at}
                </SelectItem>
              ))}
            </Select>
          )}
        /> */}
      </div>

      <div className="flex w-[15%] items-center justify-center ">
        <p className="rounded-xl bg-[#FFD9D1] px-6 py-2 text-xs text-brand ">
          {company.name}
        </p>
      </div>
      <div className="flex w-[15%] items-center justify-center ">
        <p className=" text-black">
          <Tooltip content={manager?.email}>
            {manager?.first_name} {manager?.last_name}
          </Tooltip>
        </p>
      </div>

      <div className="flex w-[15%] items-center justify-center">
        <p className=" text-black">{status}</p>
      </div>

      <div className="flex w-[15%] items-center justify-center">
        <Checkbox
          isSelected={status === "ACCEPTED"}
          color="primary"
          radius="sm"
          onClick={handleChangeStatus}
        />
      </div>
    </div>
  );
};

export default MyOfferCard;
