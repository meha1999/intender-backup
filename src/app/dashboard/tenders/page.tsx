"use client";
import SearchInput from "@/components/common/SearchInput";
import SelectInput from "@/components/common/SelectInput";
import { listItemVariants, listVariants } from "@/utils/variants";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import { MdOutlineDateRange } from "react-icons/md";
import TenderCard from "@/components/pages/dashboard/tenders/TenderCard";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const Companies = () => {
  const [filter, setFilter] = useState();
  const [order, setOrder] = useState<"desc" | "asc">("asc");

  const data: Array<{
    id: string;
    name: string;
    desc: string;
    product: string;
    status: "active" | "deactive";
    origin: string;
  }> = [
    {
      id: "1",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      product: "محصول الکی",
      status: "active",
      origin: "داخلی",
    },
    {
      id: "2",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      product: "محصول الکی",
      status: "active",
      origin: "داخلی",
    },
    {
      id: "3",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      product: "محصول الکی",
      status: "active",
      origin: "داخلی",
    },
    {
      id: "4",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      product: "محصول الکی",
      status: "active",
      origin: "داخلی",
    },
    {
      id: "5",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      product: "محصول الکی",
      status: "active",
      origin: "داخلی",
    },
    {
      id: "6",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      product: "محصول الکی",
      status: "active",
      origin: "داخلی",
    },
    {
      id: "17",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      product: "محصول الکی",
      status: "active",
      origin: "داخلی",
    },
  ];
  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="flex items-center justify-between gap-2.5">
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
        <div className="w-1/5">
          <SelectInput
            data={[
              { text: "مناقصات برتر", value: "superior" },
              { text: "سابقه", value: "history" },
              { text: "محصول", value: "product" },
            ]}
            placeholder="صنعت"
            value={filter}
            setValue={setFilter}
            order={order}
            setOrder={setOrder}
          />
        </div>
        <div className="w-1/5">
          <SelectInput
            data={[
              { text: "دسته بندی", value: "superior" },
              { text: "سابقه", value: "history" },
              { text: "محصول", value: "product" },
            ]}
            placeholder="دسته بندی"
            value={filter}
            setValue={setFilter}
            order={order}
            setOrder={setOrder}
          />
        </div>
        <div className="w-1/5">
          <DatePicker
            value={new Date()}
            render={(value, openCalendar) => {
              return (
                <div
                  onClick={openCalendar}
                  className="flex w-full items-center justify-center gap-4 rounded-3xl bg-white px-4 py-3.5 text-dark-gray"
                >
                  <MdOutlineDateRange />
                  {value}
                </div>
              );
            }}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-left"
          />
        </div>
      </div>
      <div className="w-full border border-gray-200" />
      <motion.ul variants={listVariants} className="flex flex-col gap-4">
        {data.map((item, index) => (
          <motion.li
            key={item?.id}
            variants={listItemVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
          >
            <TenderCard key={item.id} index={index} {...item} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Companies;
