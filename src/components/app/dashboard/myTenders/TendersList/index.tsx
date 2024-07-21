"use client";
import { listItemVariants, listVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import TenderCard from "@/components/app/dashboard/myTenders/TenderCard";

const TendersList: React.FC<{ data: Array<TendersListItem> }> = ({ data }) => {
  return (
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
  );
};

export default TendersList;
