"use client";
import { listItemVariants, listVariants } from "@/utils/variants";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Button from "@/components/common/Button";
import Pagination from "@/components/common/Pagination";
import TclCard from "@/components/app/dashboard/tcl/TclCard";
import Image from "next/image";
import Modal from "@/components/common/Modal";
import Documents from "@/components/modals/Documents";
import Copy from "public/icons/dashboard/copy.svg";

const Tcl = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanySignUpType>();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const data: Array<{
    id: string;
    commentA: string;
    responseA: string;
    commentB: string;
    responseB: string;
    status: string;
  }> = [
    {
      id: "1",
      commentA: "لورم ایپسوم",
      responseA: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      commentB: "لورم ایپسوم",
      responseB: "لورم ایپسوم",
      status: "لورم ایپسوم",
    },
    {
      id: "2",
      commentA: "لورم ایپسوم",
      responseA: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      commentB: "لورم ایپسوم",
      responseB: "لورم ایپسوم",
      status: "لورم ایپسوم",
    },
    {
      id: "3",
      commentA: "لورم ایپسوم",
      responseA: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      commentB: "لورم ایپسوم",
      responseB: "لورم ایپسوم",
      status: "لورم ایپسوم",
    },
    {
      id: "4",
      commentA: "لورم ایپسوم",
      responseA: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      commentB: "لورم ایپسوم",
      responseB: "لورم ایپسوم",
      status: "لورم ایپسوم",
    },
    {
      id: "5",
      commentA: "لورم ایپسوم",
      responseA: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      commentB: "لورم ایپسوم",
      responseB: "لورم ایپسوم",
      status: "لورم ایپسوم",
    },
  ];
  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-[52px] bg-white px-5 py-5">
        <div className="flex w-full items-center justify-between px-12">
          <div className="flex w-1/2 items-center justify-start gap-20">
            <div className="flex items-center justify-start gap-1">
              <p className="flex text-sm font-bold text-brand">نام خرید :</p>
              <p className="flex text-sm font-bold text-primary ">
                لورم ایپسوم
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="flex text-sm font-bold text-brand">پروژه :</p>
              <p className="flex text-sm font-bold text-primary">لورم ایپسوم</p>
            </div>
          </div>
          <div className="flex w-1/2 items-center justify-end gap-20">
            <div className="flex items-center justify-start gap-1">
              <p className="flex text-sm font-bold text-brand">شماره آفر :</p>
              <p className="flex text-sm font-bold text-primary ">
                لورم ایپسوم
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="flex text-sm font-bold text-brand">
                تاریخ آخرین آپدیت :
              </p>
              <p className="flex text-sm font-bold text-primary">لورم ایپسوم</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-20 rounded-3xl bg-light-gray px-12 py-4">
          <div className="flex w-1/3 flex-col items-start justify-between gap-8 rounded-xl bg-white px-10 py-6">
            <div className="flex items-start justify-center gap-1">
              <p className="flex text-sm font-bold text-primary">شماره آفر :</p>
              <p className="flex text-sm font-bold text-weeny ">لورم ایپسوم</p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <p className="flex text-sm font-bold text-primary">
                تاریخ آخرین آپدیت :
              </p>
              <p className="flex text-sm font-bold text-weeny">لورم ایپسوم</p>
            </div>
          </div>
          <div className="flex w-1/3 justify-between gap-14">
            <div className="relative bottom-10 h-24 w-24 rounded-full border-4 border-weeny">
              <div className="h-full rounded-full border-4 border-light-gray"></div>
            </div>
            <div className="items-between flex flex-col">
              <p className="flex items-center justify-center text-sm font-bold text-brand">
                {"طرفین مناقصه"}
              </p>
              {/* <Image src={Tenders} alt="tenders" /> */}
            </div>
            <div className="relative bottom-10 h-24 w-24 rounded-full border-4 border-brand">
              <div className="h-full rounded-full border-4 border-light-gray"></div>
            </div>
          </div>
          <div className="flex w-1/3 items-center justify-between rounded-xl bg-white px-3 py-6">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="flex gap-6 rounded-xl border border-weeny bg-weeny px-5 py-5 text-center text-xs font-bold text-white hover:bg-white hover:text-weeny"
            >
              {"استخراج فایل"}
              <Copy />
            </Button>
            <Button
              // href={`/dashboard/tenders/${id}`}
              className="flex gap-6 rounded-xl border border-weeny bg-weeny px-5 py-5 text-center text-xs font-bold text-white hover:bg-white hover:text-weeny"
            >
              {"کپی لینک TCL"}
              <Copy />
            </Button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2 rounded-[52px] bg-white px-7 py-9">
        <div className="flex w-full items-center justify-center gap-20 border-b-2 border-black px-12 py-2 text-sm font-bold text-black">
          <p className="flex w-[22%] justify-start">کامنت</p>
          <p className="flex w-[22%] justify-start">پاسخ</p>
          <p className="flex w-[22%] justify-start">کامنت</p>
          <p className="flex w-[22%] justify-start">پاسخ</p>
          <p className="flex w-[12%] justify-start">وضعیت</p>
        </div>
        <motion.ul variants={listVariants} className="flex flex-col gap-1">
          {data.map((item, index) => (
            <motion.li
              key={item?.id}
              variants={listItemVariants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              <TclCard key={item.id} index={index} {...item} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="flex w-full justify-center pt-7">
        <Pagination currentPage={1} pageCount={10} setCurrentPage={() => {}} />
      </div>
      <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Documents />
      </Modal>
    </div>
  );
};

export default Tcl;
