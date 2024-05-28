import React from "react";
import Button from "../../common/Button";
import TextArea from "../../common/TextArea";
import Input from "../../common/Input";
import { useForm } from "react-hook-form";

const RequestTender = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicInfoType>();
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold">شرکت در مناقصه</p>
        <Input
          placeHolder="...!نام مورد نظر را وارد کنید"
          hookFormProps={register("name", {
            required: {
              value: true,
              message: "نام سرویس اجباری میباشد.",
            },
          })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold">نام مناقصه</p>
        <Input
          placeHolder="...!نام مورد نظر را وارد کنید"
          hookFormProps={register("name", {
            required: {
              value: true,
              message: "نام سرویس اجباری میباشد.",
            },
          })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold">شرکت ایجاد کننده</p>
        <Input
          placeHolder="...!نام مورد نظر را وارد کنید"
          hookFormProps={register("brandName", {
            required: {
              value: true,
              message: "نام سرویس اجباری میباشد.",
            },
          })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold">متن درخواست مناقصه</p>
        <TextArea placeHolder="متن مورد نظر را وارد کنید...|" />
      </div>
      <div className="flex justify-between gap-7">
        <Button className="rounded-xl bg-brand px-16 py-3 text-white">
          ارسال درخواست
        </Button>
        <Button className="rounded-xl border border-brand bg-white px-16 py-3 text-brand">
          ذخیره درخواست
        </Button>
      </div>
    </div>
  );
};

export default RequestTender;
