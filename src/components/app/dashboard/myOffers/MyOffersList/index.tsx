"use client";
import { motion } from "framer-motion";
import { listItemVariants, listVariants } from "@/utils/variants";
import Pagination from "@/components/common/Pagination";
import TendersDetailCard from "@/components/app/dashboard/tenders/TendersDetailCard";
import MyOfferCard from "../MyOfferCard";

const MyOffersList: React.FC<{ data: Array<Bid> }> = ({ data }) => {
  return (
    <>
      <div className=" flex flex-col gap-2 rounded-3xl bg-white px-7 py-9">
        <div className="flex w-full items-center justify-center border-b-[0.5px] border-black py-2 text-base font-bold text-black px-10">
          <p className="flex w-[20%] justify-start">نام</p>
          <p className="flex w-[20%] justify-start">توضیحات</p>
          <p className="flex w-[15%] justify-center">شرکت</p>
          <p className="flex w-[15%] justify-center">شخص درگیر</p>
          <p className="flex w-[15%] justify-center">وضعیت</p>
          <p className="flex w-[15%] justify-center">تایید</p>
        </div>
        <motion.ul variants={listVariants} className="flex flex-col gap-1">
          {data.map((item) => (
            <motion.li
              key={item?.id}
              variants={listItemVariants}
              whileHover={{ scale: 1.02 }}
              // whileTap={{ scale: 0.95 }}
            >
              <MyOfferCard key={item.id} {...item} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="mt-auto flex w-full justify-center">
        {/* <Pagination currentPage={1} pageCount={10} setCurrentPage={() => {}} /> */}
      </div>
    </>
  );
};

export default MyOffersList;
