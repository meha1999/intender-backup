"use client";
import SearchInput from "@/components/common/SearchInput";
import SelectInput from "@/components/common/SelectInput";
import { listItemVariants, listVariants } from "@/utils/variants";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import AdvertisementCard from "@/components/app/dashboard/advertisements/AdvertisementCard";
import Button from "@/components/common/Button";
import { FaPlus } from "react-icons/fa6";

const Advertisements = () => {
  const [filter, setFilter] = useState();
  const [order, setOrder] = useState<"desc" | "asc">("asc");

  const data: Array<{
    id: string;
    name: string;
    desc: string;
    product: string;
    status: "active" | "deactive";
    activity: string;
    visit: string;
    time: string;
    activityNum: number;
    visitNum: number;
  }> = [
    {
      id: "1",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      product: "محصول الکی",
      status: "active",
      activity: " ۹٪ مجموع فعالیت ",
      visit: " ۳۱٪مجموع بازدید  ",
      time: "۳ ساعت گذشته",
      activityNum: 15,
      visitNum: 313,
    },
    {
      id: "2",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      product: "محصول الکی",
      status: "active",
      activity: " ۹٪ مجموع فعالیت ",
      visit: " ۳۱٪مجموع بازدید  ",
      time: "۳ ساعت گذشته",
      activityNum: 15,
      visitNum: 313,
    },
    {
      id: "3",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      product: "محصول الکی",
      status: "active",
      activity: " ۹٪ مجموع فعالیت ",
      visit: " ۳۱٪مجموع بازدید  ",
      time: "۳ ساعت گذشته",
      activityNum: 15,
      visitNum: 313,
    },
    {
      id: "4",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      product: "محصول الکی",
      status: "active",
      activity: " ۹٪ مجموع فعالیت ",
      visit: " ۳۱٪مجموع بازدید  ",
      time: "۳ ساعت گذشته",
      activityNum: 15,
      visitNum: 313,
    },
    {
      id: "5",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      product: "محصول الکی",
      status: "active",
      activity: " ۹٪ مجموع فعالیت ",
      visit: " ۳۱٪مجموع بازدید  ",
      time: "۳ ساعت گذشته",
      activityNum: 15,
      visitNum: 313,
    },
    {
      id: "6",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      product: "محصول الکی",
      status: "active",
      activity: " ۹٪ مجموع فعالیت ",
      visit: " ۳۱٪مجموع بازدید  ",
      time: "۳ ساعت گذشته",
      activityNum: 15,
      visitNum: 313,
    },
    {
      id: "17",
      name: "لورم ایپسوم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....",
      product: "محصول الکی",
      status: "active",
      activity: " ۹٪ مجموع فعالیت ",
      visit: " ۳۱٪مجموع بازدید  ",
      time: "۳ ساعت گذشته",
      activityNum: 15,
      visitNum: 313,
    },
  ];
  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="flex items-center justify-between gap-2.5">
        <div className="flex w-10/12 gap-5">
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
        </div>
        <div className="flex w-2/12 justify-end">
          <Button className="flex items-center gap-3 rounded-3xl bg-weeny px-8 py-3 text-white">
            <FaPlus />
            افزودن اگهی
          </Button>
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
            <AdvertisementCard key={item.id} index={index} {...item} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Advertisements;
