"use client";
import { useState } from "react";
import Button from "@/components/common/Button";
import SearchInput from "@/components/common/SearchInput";
import SelectInput from "@/components/common/SelectInput";
import { BsSearch } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import RequestCard from "@/components/pages/dashboard/requests/RequestCrad";
import { motion } from "framer-motion";
import { listItemVariants, listVariants } from "@/utils/variants";

const Requests = () => {
  const [filter, setFilter] = useState();
  const [order, setOrder] = useState<"desc" | "asc">("asc");

  const data: Array<{
    id: string;
    name: string;
    desc: string;
    requestType: string;
    status: string;
    time: string;
    date: string;
  }> = [
    {
      id: "1",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      requestType: "نام درخواست",
      status: "پذیرفته شده",
      time: "۲۴ ساعت",
      date: "تا تاریخ 1402/12/16",
    },
    {
      id: "2",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      requestType: "نام درخواست",
      status: "پذیرفته شده",
      time: "۲۴ ساعت",
      date: "تا تاریخ 1402/12/16",
    },
    {
      id: "3",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      requestType: "نام درخواست",
      status: "پذیرفته شده",
      time: "۲۴ ساعت",
      date: "تا تاریخ 1402/12/16",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex h-80 w-full gap-14 pb-16">
        <div className="w-1/4 rounded-3xl bg-white"></div>
        <div className="w-3/4 rounded-3xl bg-white"></div>
      </div>
      <div className="flex items-center justify-between gap-1 pb-6">
        <div className="flex w-8/12 gap-5">
          <div className="w-2/5">
            <SearchInput
              placeHolder="جستجو ..."
              Icon={
                <div className="cursor-pointer rounded-3xl border border-brand bg-brand px-5 py-2.5 text-center text-xl text-white hover:bg-white hover:text-brand">
                  <BsSearch />
                </div>
              }
            />
          </div>
          <div className="w-2/5">
            <SelectInput
              data={[
                { text: "دسته بندی", value: "superior" },
                { text: "سابقه", value: "history" },
                { text: "محصول", value: "product" },
              ]}
              placeholder="وضعیت"
              value={filter}
              setValue={setFilter}
              order={order}
              setOrder={setOrder}
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <div className="cursor-pointer rounded-full bg-light-weeny p-2">
            <MdOutlineSupportAgent className="text-3xl text-weeny" />
          </div>
          <Button className="flex items-center gap-3 rounded-3xl bg-weeny px-8 py-3 text-white">
            ثبت درخواست
          </Button>
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-10 px-6 pb-3 text-base font-bold text-black">
        <p className="flex w-3/12 justify-center">نام درخواست</p>
        <p className="flex w-5/12 justify-center">توضیحات</p>
        <p className="flex w-1/12 justify-center">نوع درخواست</p>
        <p className="flex w-1/12 justify-center">وضعیت</p>
        <p className="flex w-2/12 justify-center">محدوده زمانی</p>
      </div>
      <motion.ul variants={listVariants} className="flex flex-col gap-4">
        {data.map((item, index) => (
          <motion.li
            key={item?.id}
            variants={listItemVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
          >
            <RequestCard key={item.id} index={index} {...item} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Requests;
