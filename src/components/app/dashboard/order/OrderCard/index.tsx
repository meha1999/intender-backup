import React from "react";
import Exclamation from "public/icons/dashboard/exclamation.svg";
import { useForm } from "react-hook-form";

interface OrderCardProps {
  index: number;
  id: string;
  company: string;
  offer: string;
  person: string;
  tci: string;
  deviation: string;
  status: string;
  score: string;
  confirm: boolean;
}

const OrderCard: React.FC<OrderCardProps> = ({
  index,
  id,
  company,
  offer,
  person,
  tci,
  deviation,
  status,
  score,
  confirm,
}) => {
  type Inputs = {
    isConfirm: boolean;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-light-gray px-2 py-3">
      <div className="flex w-3/12 items-center justify-start gap-5">
        <div className="flex h-full items-start justify-start">
          <div className="flex h-full items-start justify-start">
            <Exclamation />
          </div>
          <div className="h-16 w-16 rounded-full border-4 border-weeny">
            <div className="h-full rounded-full border-4 border-light-gray"></div>
          </div>
        </div>
        <p className=" text-black">{company}</p>
      </div>
      <div className="flex w-3/12 items-center justify-start">
        <p className=" text-black">{offer}</p>
      </div>
      <div className="flex w-1/12 items-center justify-center ">
        <p className=" text-black">{person}</p>
      </div>
      <div className="flex w-1/12 items-center justify-center ">
        <p className=" text-black">{tci}</p>
      </div>
      <div className="flex w-1/12 items-center justify-center ">
        <p className=" text-black">{deviation}</p>
      </div>
      <div className="flex w-1/12 items-center justify-center">
        <p className=" text-black">{status}</p>
      </div>
      <div className="flex w-1/12 items-center justify-center ">
        <p className=" text-black">{score}</p>
      </div>
      <div className="flex w-1/12 items-center justify-center">
        <input
          type="checkbox"
          id={id}
          className="accent-weeny"
          checked={confirm}
          {...register("isConfirm")}
        />
      </div>
    </div>
  );
};

export default OrderCard;
