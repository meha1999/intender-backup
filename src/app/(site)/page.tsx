"use client";
import Button from "@/components/common/Button";
import DashboardCard from "@/components/common/DashboardCard";
import Draggable from "@/components/common/Draggable";
import Input from "@/components/common/Input";
import React, { useState } from "react";
import Companies from "public/icons/site/companies.svg";
import Reporting from "public/icons/site/reporting.svg";
import Manager from "public/icons/site/manager.svg";
import Join from "public/icons/site/join.svg";
import Invite from "public/icons/site/invite.svg";
import Shop from "public/icons/site/shop.svg";
import AboutUs from "public/icons/site/aboutUs.svg";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { listItemVariants, listVariants } from "@/utils/variants";
import TableCard from "@/components/pages/site/TableCard";
import Pagination from "@/components/common/Pagination";
import Slider from "@/components/pages/site/Slider";

const Home = () => {
  const data: Array<{
    text: string;
    value: "request" | "tenders";
  }> = [
    { text: "درخواست ها / قرارداد ها", value: "request" },
    { text: "مناقصات", value: "tenders" },
  ];

  const tenderData: Array<{
    text: string;
    value: "vendue" | "tenders" | "last";
  }> = [
    { text: "مناقصات امروز", value: "tenders" },
    { text: "مزایدات امروز", value: "vendue" },
    { text: "جدیدترین", value: "last" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanySignUpType>();

  const [activeTab, setActiveTab] = useState<"request" | "tenders">("request");
  const [activeTender, setActiveTender] = useState<
    "tenders" | "vendue" | "last"
  >("tenders");

  const tableData: Array<{
    id: string;
    type: string;
    report: string;
    status: string;
    date: string;
    city: string;
    code: string;
  }> = [
    {
      id: "1",
      type: "لورم ایپسوم",
      report: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      status: "لورم ایپسوم",
      date: "لورم ایپسوم",
      city: "لورم ایپسوم",
      code: "#4445967901",
    },
    {
      id: "2",
      type: "لورم ایپسوم",
      report: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      status: "لورم ایپسوم",
      date: "لورم ایپسوم",
      city: "لورم ایپسوم",
      code: "#4445967901",
    },
    {
      id: "3",
      type: "لورم ایپسوم",
      report: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      status: "لورم ایپسوم",
      date: "لورم ایپسوم",
      city: "لورم ایپسوم",
      code: "#4445967901",
    },
    {
      id: "4",
      type: "لورم ایپسوم",
      report: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      status: "لورم ایپسوم",
      date: "لورم ایپسوم",
      city: "لورم ایپسوم",
      code: "#4445967901",
    },
    {
      id: "5",
      type: "لورم ایپسوم",
      report: "لورم ایپسوم متن ساختگی با تولید سادگی ....",
      status: "لورم ایپسوم",
      date: "لورم ایپسوم",
      city: "لورم ایپسوم",
      code: "#4445967901",
    },
  ];

  return (
    <div className=" flex h-full flex-col bg-secondary">
      <div className="flex flex-col items-center justify-center px-80">
        <div className="flex w-full flex-col items-center justify-center gap-3 py-32">
          <h1 className="flex items-center justify-center text-5xl font-black text-brand">
            {"همراه شما در فرآیندهای تامین و مناقصه"}
          </h1>
          <h2 className="flex items-center justify-center text-lg font-bold text-white">
            {
              "با تمرکز بر فرآیندهای تامین صنعتی اینتندر به شما این امکان را می دهد تا به راحتی با شرکت های داخلی و بین المللی در ارتباط باشید،‌ ثبت درخواست های مختلف کنید و سریع و هوشمندانه خرید و فروش کنید."
            }
          </h2>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-1 rounded-[30px] border border-white bg-black px-40 py-20">
          <Draggable rootClass={"w-full drag"}>
            <div className="flex flex-row gap-12">
              {data.map((item) => (
                <div
                  className={`flex cursor-pointer justify-center gap-1.5 px-2 text-base font-bold ${
                    activeTab === item.value ? " text-brand" : " text-white"
                  }`}
                  onClick={() => setActiveTab(item.value)}
                  key={item.value}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </Draggable>
          <div className="flex w-full items-center justify-center">
            <Input
              placeHolder="کلمات کلیدی قرار داد مورد نظر را وارد کنید"
              className="border-2 border-brand bg-secondary"
            />
            <Button className="relative left-6 rounded-3xl border border-brand bg-brand px-12 py-4 text-sm font-bold text-white">
              {"جستجو"}
            </Button>
          </div>
          <p>{"فولاد،طلا،نقره،دلار و معاملات مشابه استفاده کنید."}</p>
        </div>
        <div className="mt-32 flex items-center justify-center rounded-2xl bg-black px-9 py-2">
          <p>{"258،466 شرکت با ما معاملات خود را هوشمندانه تر انجام دادن"}</p>
        </div>
        <div className="flex items-center justify-center gap-8 py-14 ">
          <DashboardCard label="گزارش گیری" Icon={<Reporting />} />
          <DashboardCard label="مدیریت تامین" Icon={<Manager />} />
          <DashboardCard label="برگذاری مناقصه" Icon={<Invite />} />
          <DashboardCard label="شرکت در مناقصه" Icon={<Join />} />
          <DashboardCard label="سبد خرید" Icon={<Shop />} />
          <DashboardCard label="شرکت ها" Icon={<Companies />} />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-48 bg-black px-80 py-16">
        <div className="flex w-1/2 flex-col items-start justify-center gap-3">
          <p className="text-base font-bold text-brand">{"درباره ما"}</p>
          <div className="flex w-full flex-col gap-1">
            <div className="flex w-1/5 rounded-md border-4 border-dark-gray"></div>
            <div className="flex w-1/6 rounded-md border-4 border-dark-gray"></div>
          </div>
          <p className="text-sm font-medium leading-10">
            {
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
            }
          </p>
        </div>
        <div className="flex w-1/2 flex-col items-start justify-center">
          <AboutUs />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-80 py-24">
        <div className=" flex w-full flex-row bg-dark-gray">
          <div className=" flex w-[40%] flex-row rounded-br-3xl rounded-tl-3xl bg-dark-gray px-12 py-8">
            <Draggable rootClass={"w-full drag"}>
              <div className="flex flex-row gap-12">
                {tenderData.map((item) => (
                  <div
                    className={`flex cursor-pointer justify-center gap-16 px-2 text-base font-bold ${
                      activeTender === item.value
                        ? " text-weeny"
                        : " text-white"
                    }`}
                    onClick={() => setActiveTender(item.value)}
                    key={item.value}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </Draggable>
          </div>
          <div className="flex w-[60%] flex-row items-center gap-11 rounded rounded-tl-3xl bg-secondary px-9 py-8">
            <div className="flex w-1/3 items-center">
              <p className="w-1/4 text-sm font-bold"> {"تاریخ درج"} </p>
              <Input
                placeHolder=""
                hookFormProps={register("brand_name", {
                  required: {
                    value: true,
                    message: "نام سرویس اجباری میباشد.",
                  },
                })}
                className="bg-black"
              />
            </div>
            <div className="flex w-1/3 items-center">
              <p className="w-1/4 text-sm font-bold"> {"استان"} </p>
              <Input
                placeHolder=""
                hookFormProps={register("brand_name", {
                  required: {
                    value: true,
                    message: "نام سرویس اجباری میباشد.",
                  },
                })}
                className="bg-black"
              />
            </div>
            <div className="flex w-1/3 items-center">
              <p className="w-1/4 text-sm font-bold"> {"کد محصول"} </p>
              <Input
                placeHolder=""
                hookFormProps={register("brand_name", {
                  required: {
                    value: true,
                    message: "نام سرویس اجباری میباشد.",
                  },
                })}
                className="bg-black"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col bg-dark-gray px-12 py-8 ">
          <div className="flex w-full items-center justify-center gap-20 border-b-2 border-white bg-secondary px-16 py-6 text-sm font-bold">
            <p className="flex w-1/12 justify-start">نوع آگهی</p>
            <p className="flex w-3/12 justify-start">گزارش آگهی</p>
            <p className="flex w-1/12 justify-start">وضعیت</p>
            <p className="flex w-2/12 justify-start">تاریخ درج</p>
            <p className="flex w-1/12 justify-start">استان</p>
            <p className="flex w-2/12 justify-start">کد محصول</p>
            <p className="flex w-2/12 justify-start"></p>
          </div>
          <motion.ul
            variants={listVariants}
            className="flex w-full flex-col gap-1"
          >
            {tableData.map((item, index) => (
              <motion.li
                key={item?.id}
                variants={listItemVariants}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
              >
                <TableCard key={item.id} index={index} {...item} />
              </motion.li>
            ))}
          </motion.ul>
          <div className="flex w-full justify-center pt-7">
            <Pagination
              currentPage={1}
              pageCount={10}
              setCurrentPage={() => {}}
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center gap-10 px-80 py-24 text-white">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-center justify-start">
            <h2 className=" text-3xl text-weeny">{"همایش ها / اعلانات"}</h2>
            <div className="flex w-full flex-col gap-1">
              <div className="flex w-4/5 rounded-md border-4 border-dark-gray"></div>
              <div className="flex w-3/5 rounded-md border-4 border-dark-gray"></div>
            </div>
          </div>
          <Button className="text-base- rounded-xl border border-weeny bg-secondary px-6 py-2 font-bold text-weeny">
            {"مشاهده بیشتر"}
          </Button>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Home;