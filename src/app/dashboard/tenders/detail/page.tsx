"use client";
import { useState } from "react";
import Button from "@/components/common/Button";
import SearchInput from "@/components/common/SearchInput";
import SelectInput from "@/components/common/SelectInput";
import { BsSearch } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import RequestCard from "@/components/app/dashboard/requests/RequestCrad";
import { motion } from "framer-motion";
import { listItemVariants, listVariants } from "@/utils/variants";
import Input from "@/components/common/Input";
import { useForm } from "react-hook-form";
import Pagination from "@/components/common/Pagination";
import OrderCard from "@/components/app/dashboard/order/OrderCard";
import TendersDetailCard from "@/components/app/dashboard/tenders/TendersDetailCard";
const DetailTenders = () => {
  const [filter, setFilter] = useState();
  const [order, setOrder] = useState<"desc" | "asc">("asc");
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
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-12 rounded-3xl bg-white px-12 py-10">
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
      <div className=" flex flex-col gap-2 rounded-3xl bg-white px-7 py-9">
        <div className="flex w-full items-center justify-center border-b-[0.5px] border-black py-2 text-base font-bold text-black">
          <p className="flex w-[20%] justify-start">شرکت</p>
          <p className="flex w-[20%] justify-start">پیشنهاد</p>
          <p className="flex w-[10%] justify-center">بید</p>
          <p className="flex w-[10%] justify-center">شخص درگیر</p>
          <p className="flex w-[10%] justify-center">TCI</p>
          <p className="flex w-[10%] justify-center">وضعیت</p>
          <p className="flex w-[10%] justify-center">امتیاز فنی</p>
          <p className="flex w-[10%] justify-center">تایید</p>
        </div>
        <motion.ul variants={listVariants} className="flex flex-col gap-1">
          {data.map((item, index) => (
            <motion.li
              key={item?.id}
              variants={listItemVariants}
              whileHover={{ scale: 1.04 }}
              // whileTap={{ scale: 0.95 }}
            >
              {/* <TendersDetailCard key={item.id}  {...item} /> */}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="flex w-full justify-center">
        <Pagination currentPage={1} pageCount={10} setCurrentPage={() => {}} />
      </div>
    </div>
  );
};

export default DetailTenders;
