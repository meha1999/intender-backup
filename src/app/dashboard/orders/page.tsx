"use client";
import { listItemVariants, listVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import Input from "@/components/common/Input";
import { useForm } from "react-hook-form";
import Button from "@/components/common/Button";
import OrderCard from "@/components/pages/dashboard/order/OrderCard";
import Pagination from "@/components/common/Pagination";

const Orders = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanySignUpType>();

  const data: Array<{
    id: string;
    company: string;
    offer: string;
    person: string;
    tci: string;
    deviation: string;
    status: string;
    score: string;
    confirm: boolean;
  }> = [
    {
      id: "1",
      company: "لورم ایپسوم",
      offer: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      person: "لورم ایپسوم",
      tci: "لورم ایپسوم",
      deviation: "لورم ایپسوم",
      status: "لورم ایپسوم",
      score: "لورم ایپسوم",
      confirm: true,
    },
    {
      id: "2",
      company: "لورم ایپسوم",
      offer: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      person: "لورم ایپسوم",
      tci: "لورم ایپسوم",
      deviation: "لورم ایپسوم",
      status: "لورم ایپسوم",
      score: "لورم ایپسوم",
      confirm: true,
    },
    {
      id: "3",
      company: "لورم ایپسوم",
      offer: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      person: "لورم ایپسوم",
      tci: "لورم ایپسوم",
      deviation: "لورم ایپسوم",
      status: "لورم ایپسوم",
      score: "لورم ایپسوم",
      confirm: true,
    },
    {
      id: "4",
      company: "لورم ایپسوم",
      offer: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      person: "لورم ایپسوم",
      tci: "لورم ایپسوم",
      deviation: "لورم ایپسوم",
      status: "لورم ایپسوم",
      score: "لورم ایپسوم",
      confirm: true,
    },
    {
      id: "5",
      company: "لورم ایپسوم",
      offer: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      person: "لورم ایپسوم",
      tci: "لورم ایپسوم",
      deviation: "لورم ایپسوم",
      status: "لورم ایپسوم",
      score: "لورم ایپسوم",
      confirm: true,
    },
  ];
  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="flex items-center justify-between gap-12 rounded-[52px] bg-white px-12 py-10">
        <div className="flex w-1/2">
          <div className="flex w-full items-center gap-1">
            <p className="flex w-3/12 justify-end text-sm font-bold text-brand">
              نام خرید :
            </p>
            <Input
              placeHolder="...!نام مورد نظر را وارد کنید"
              hookFormProps={register("name", {
                required: {
                  value: true,
                  message: "نام اجباری میباشد.",
                },
              })}
            />
          </div>
          <div className="flex w-full items-center gap-1">
            <p className="flex w-3/12 justify-end text-sm font-bold text-brand">
              پروژه :
            </p>
            <Input
              placeHolder="...!نام مورد نظر را وارد کنید"
              hookFormProps={register("name", {
                required: {
                  value: true,
                  message: "نام پروژه اجباری میباشد.",
                },
              })}
            />
          </div>
        </div>
        <div className="flex w-1/2 justify-between">
          <div className="flex w-1/4 items-center">
            <Button
              // href={`/dashboard/tenders/${id}`}
              className=" rounded-xl border border-brand bg-brand px-11 py-3 text-center text-xs font-bold text-white hover:bg-white hover:text-brand"
            >
              {"گزارشگیری"}
            </Button>
          </div>
          <div className="flex w-1/4 items-center">
            <Button
              // href={`/dashboard/tenders/${id}`}
              className="rounded-xl border border-weeny bg-weeny px-11 py-3 text-center text-xs font-bold text-white hover:bg-white hover:text-weeny"
            >
              {"آپلود مدارک"}
            </Button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2 rounded-[52px] bg-white px-7 py-9">
        <div className="flex w-full items-center justify-center border-b-2 border-black py-2 text-base font-bold text-black">
          <p className="flex w-3/12 justify-start">شرکت</p>
          <p className="flex w-3/12 justify-start">پیشنهاد</p>
          <p className="flex w-1/12 justify-center">شخص درگیر</p>
          <p className="flex w-1/12 justify-center">TCI</p>
          <p className="flex w-1/12 justify-center">انحراف</p>
          <p className="flex w-1/12 justify-center">وضعیت</p>
          <p className="flex w-1/12 justify-center">امتیاز فنی</p>
          <p className="flex w-1/12 justify-center">تایید</p>
        </div>
        <motion.ul variants={listVariants} className="flex flex-col gap-1">
          {data.map((item, index) => (
            <motion.li
              key={item?.id}
              variants={listItemVariants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              <OrderCard key={item.id} index={index} {...item} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="flex w-full justify-center pt-7">
        <Pagination currentPage={1} pageCount={10} setCurrentPage={() => {}} />
      </div>
    </div>
  );
};

export default Orders;
