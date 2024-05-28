import React, { useState } from "react";
import Button from "../../common/Button";
import TextArea from "../../common/TextArea";
import Input from "../../common/Input";
import { useForm } from "react-hook-form";
import SelectInput from "@/components/common/SelectInput";

const Information = () => {
   const [service, setService] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicInfoType>();
  return (
    <div className="flex flex-col gap-7">
      <div>
        <p className="text-sm font-bold">نام سرویس</p>
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
      <div>
        <p className="text-sm font-bold">نام شرکت</p>
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
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-bold">محدوده زمانی </p>
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
        <div>
          <p className="text-sm font-bold">سرویس</p>
          <SelectInput
            data={[
              { text: "دسته بندی", value: "superior" },
              { text: "سابقه", value: "history" },
              { text: "محصول", value: "product" },
            ]}
            value={service}
            setValue={setService}
          />
        </div>
      </div>
      <div>
        <p className="text-sm font-bold">توضیحات</p>
        <TextArea placeHolder="متن مورد نظر را وارد کنید...|" />
      </div>
      <div>
        <p className="text-sm font-bold">برچسب</p>
        <div className="flex justify-between gap-9 rounded-xl bg-milky px-3 py-2">
          <div className="flex w-full flex-col flex-wrap gap-3">
            <div>
              <Input
                placeHolder="...!نام مورد نظر را وارد کنید"
                hookFormProps={register("name", {})}
                className="bg-white"
              />
            </div>
            <div className="flex gap-1 text-base text-weeny">
              <Button className="rounded-xl bg-[#e1edff] px-6 py-2">
                برچسب ها
              </Button>
              <Button className="rounded-xl bg-[#e1edff] px-6 py-2">
                برچسب ها
              </Button>
              <Button className="rounded-xl bg-[#e1edff] px-6 py-2">
                برچسب ها
              </Button>
              {/* <Button className="rounded-xl bg-[#e1edff] px-6 py-2">
                  برچسب ها
                </Button> */}
            </div>
          </div>
          <div className="flex h-10 justify-end">
            <Button className="rounded-xl bg-brand px-3 py-2 text-white">
              افزودن
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-7">
        <Button className="rounded-xl border border-brand bg-white px-16 py-3 text-brand">
          ارسال درخواست
        </Button>
        <Button className="rounded-xl bg-brand px-16 py-3 text-white">
          ذخیره درخواست
        </Button>
      </div>
    </div>
  );
};

export default Information;
