"use client";

import CompanyCard from "@/components/app/dashboard/companies/CompantCard";
import { listItemVariants, listVariants } from "@/utils/variants";
import { motion } from "framer-motion";

const CompanyList: React.FC<{ data: Array<CompanyListType> }> = ({ data }) => {
//   const data = [
//     { id: "1", name: "لورم ایپسوم", desc: "توضیحات", product: "محصول الکی" },
//     { id: "2", name: "لورم ایپسوم", desc: "توضیحات", product: "محصول الکی" },
//     { id: "3", name: "لورم ایپسوم", desc: "توضیحات", product: "محصول الکی" },
//     { id: "4", name: "لورم ایپسوم", desc: "توضیحات", product: "محصول الکی" },
//     { id: "5", name: "لورم ایپسوم", desc: "توضیحات", product: "محصول الکی" },
//     { id: "6", name: "لورم ایپسوم", desc: "توضیحات", product: "محصول الکی" },
//     { id: "17", name: "لورم ایپسوم", desc: "توضیحات", product: "محصول الکی" },
//   ];

  return (
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
  );
};

export default CompanyList;
