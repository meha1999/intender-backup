"use client";

import SearchInput from "@/components/common/SearchInput";
import SelectInput from "@/components/common/SelectInput";
import CompanyCard from "@/components/pages/dashboard/companies/CompantCard";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

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
        <p className="text-2xl font-bold text-brand">{"شرکت‌ها"}</p>
        <div className="flex min-w-[50%] items-center gap-12">
          <SearchInput
            placeHolder="جستجو شرکت"
            Icon={
              <div className="cursor-pointer pl-2 text-xl text-brand">
                <BsSearch />
              </div>
            }
          />
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
      <div className="w-full border border-gray-300" />
      <div className="grid grid-cols-5 gap-5">
        {data.map((item) => (
          <div className="bg-amber-500" key={item?.id}>
            <CompanyCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
