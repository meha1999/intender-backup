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
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CiShoppingCart } from "react-icons/ci";

const Offers = () => {
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
    <div className="flex flex-col gap-3">
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-3xl bg-white px-5 py-5">
        <div className="flex w-full items-center justify-between px-12">
          <div className="flex w-1/2 items-center justify-start gap-20">
            <div className="flex items-center justify-start gap-1">
              <p className="flex text-sm font-bold text-brand">تاریخ شروع :</p>
              <p className="flex text-sm font-bold text-primary ">
                لورم ایپسوم
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="flex text-sm font-bold text-brand">تاریخ پایان :</p>
              <p className="flex text-sm font-bold text-primary">لورم ایپسوم</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-20 rounded-3xl bg-light-gray px-12 py-4">
          <div className="flex w-1/3 flex-col items-start justify-between gap-8 rounded-xl bg-white px-10 py-6">
            <div className="flex w-full items-start justify-between gap-1">
              <p className="flex text-sm font-bold text-weeny">
                شرکت مناقصه گذار:
              </p>
              <p className="flex text-sm font-bold text-primary ">
                لورم ایپسوم
              </p>
            </div>
            <div className="flex w-full items-center justify-between gap-1">
              <p className="flex text-sm font-bold text-weeny">
                شرکت پیشنهاد گذار:
              </p>
              <p className="flex text-sm font-bold text-primary">لورم ایپسوم</p>
            </div>
          </div>
          <div className="flex w-1/3 justify-between">
            <div className="flex flex-col items-start justify-center">
              <div className="relative bottom-10 flex h-24 w-24 flex-col rounded-full border-4 border-weeny">
                <div className="h-full rounded-full border-4 border-light-gray"></div>
              </div>
              <p className="relative bottom-8 flex w-full justify-center text-sm font-bold text-primary">
                نام مناقصه گذار
              </p>
            </div>
            <div className="items-between flex flex-col">
              <p className="flex items-center justify-center text-sm font-bold text-brand">
                {"نام مناقصه"}
              </p>
              {/* <Image src={Tenders} alt="tenders" /> */}
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="relative bottom-10 h-24 w-24 gap-4 rounded-full border-4 border-brand">
                <div className="h-full rounded-full border-4 border-light-gray"></div>
              </div>
              <p className="relative bottom-8 flex w-full justify-center text-sm font-bold text-primary">
                مدیر پیشنهاد گذار
              </p>
            </div>
          </div>
          <div className="flex w-1/3 flex-col gap-2 items-center justify-between rounded-xl bg-white px-9 py-6">
            <p className="text-sm font-bold text-primary">عملیات</p>
            <div className="flex w-full items-center justify-between ">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="flex gap-6 rounded-xl border border-weeny bg-weeny px-3 py-3 text-center text-xs font-bold text-white hover:bg-white hover:text-weeny"
              >
                {"ارسال تیکت"}
              </Button>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="flex gap-6 rounded-xl border border-weeny bg-weeny  px-3 py-3 text-center text-xs font-bold text-white hover:bg-white hover:text-weeny"
              >
                {"صغحه TCL"}
              </Button>
              <Button
                // href={`/dashboard/tenders/${id}`}
                className="flex gap-6 rounded-xl border border-weeny bg-weeny  px-3 py-3 text-center text-xs font-bold text-white hover:bg-white hover:text-weeny"
              >
                {"گزارشگیری"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center  justify-center gap-3">
        <div className="flex h-96 w-1/3 flex-col gap-1 overflow-y-auto rounded-3xl bg-white px-9 py-6">
          <p className="text-sm font-bold text-primary">مدارک</p>
          <div className="flex w-full flex-col gap-1">
            <Accordion
              showDivider={false}
              className="flex w-full flex-col gap-1 rounded-xl bg-[#F9F9F9]"
            >
              <AccordionItem
                key="1"
                classNames={{ title: "text-sm py-0.5" }}
                title="مدرک خرید"
              >
                <div className="flex border-b-1 px-6 pb-4 text-sm text-primary">
                  خوراکی ها
                </div>
                <div className="flex border-b-1 px-6 py-4 text-sm text-primary">
                  خوراکی ها
                </div>
                <div className="flex px-6 py-4 text-sm text-primary">
                  خوراکی ها
                </div>
              </AccordionItem>
            </Accordion>
            <Accordion
              showDivider={false}
              className="flex w-full flex-col gap-1 rounded-xl bg-[#F9F9F9]"
            >
              <AccordionItem
                key="2"
                classNames={{ title: "text-sm py-0.5" }}
                title="پیشنهاد"
              ></AccordionItem>
            </Accordion>
            <Accordion
              showDivider={false}
              className="flex w-full flex-col gap-1 rounded-xl bg-[#F9F9F9]"
            >
              <AccordionItem
                key="3"
                classNames={{ title: "text-sm py-0.5" }}
                title="دیگر مدارک"
              ></AccordionItem>
            </Accordion>
            <Accordion
              showDivider={false}
              className="flex w-full flex-col gap-1 rounded-xl bg-[#F9F9F9]"
            >
              <AccordionItem
                key="4"
                classNames={{ title: "text-sm py-0.5" }}
                title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟"
              ></AccordionItem>
            </Accordion>
            <Accordion
              showDivider={false}
              className="flex w-full flex-col gap-1 rounded-xl bg-[#F9F9F9]"
            >
              <AccordionItem
                key="4"
                classNames={{ title: "text-sm py-0.5" }}
                title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟"
              ></AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="flex h-96 w-2/3 flex-col gap-1 overflow-y-auto rounded-3xl bg-white px-9 py-6">
          <p className="text-sm font-bold text-primary">پنل عملیات</p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
