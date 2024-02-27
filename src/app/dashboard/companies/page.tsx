"use client";

import SearchInput from "@/components/common/SearchInput";
import SelectInput from "@/components/common/SelectInput";
import CompanyCard from "@/components/pages/dashboard/companies/CompantCard";
import { listItemVariants, listVariants } from "@/utils/variants";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";

const Companies = () => {
  const [filter, setFilter] = useState();
  const [order, setOrder] = useState<"desc" | "asc">("asc");

  const data = [
    { id: "1", name: "لورم ایپسوم", desc: "توضیحات", product: "محصول الکی" },
    { id: "2", name: "لورم ایپسوم", desc: "توضیحات", product: "محصول الکی" },
    { id: "3", name: "لورم ایپسوم", desc: "توضیحات", product: "محصول الکی" },
    { id: "4", name: "لورم ایپسوم", desc: "توضیحات", product: "محصول الکی" },
    { id: "5", name: "لورم ایپسوم", desc: "توضیحات", product: "محصول الکی" },
    { id: "6", name: "لورم ایپسوم", desc: "توضیحات", product: "محصول الکی" },
    { id: "17", name: "لورم ایپسوم", desc: "توضیحات", product: "محصول الکی" },
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <SearchInput
            placeHolder="جستجو شرکت"
            Icon={
              <div className="cursor-pointer rounded-3xl border border-brand bg-brand px-5 py-2.5 text-center text-xl text-white hover:bg-white hover:text-brand">
                <BsSearch />
              </div>
            }
          />
        </div>
        <div className="w-1/4">
          <SelectInput
            data={[
              { text: "مناقصات برتر", value: "superior" },
              { text: "سابقه", value: "history" },
              { text: "محصول", value: "product" },
            ]}
            value={filter}
            setValue={setFilter}
            order={order}
            setOrder={setOrder}
          />
        </div>
      </div>
      <div className="w-full border border-gray-200" />
      <motion.ul variants={listVariants} className="grid grid-cols-5 gap-5">
        {data.map((item) => (
          <motion.li
            key={item?.id}
            variants={listItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CompanyCard {...item} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Companies;
