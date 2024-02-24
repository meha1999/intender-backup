"use client";
import SelectIcon from "public/icons/select.svg";
import Arrow from "public/icons/arrow.svg";
import { useRef, useState } from "react";
import { useOutSideClick } from "@/utils/useOutSideClick";
import { motion } from "framer-motion";
import { selectVariants } from "@/utils/variants";

interface SelectInputProps {
  placeholder?: string;
  value: any;
  setValue: (value: any) => void;
  data: Array<{ text: string | number; value: any }>;
  order?: "desc" | "asc";
  setOrder?: (value: "desc" | "asc") => void;
  className?: string;
}
const SelectInput: React.FC<SelectInputProps> = ({
  placeholder,
  value,
  setValue,
  data,
  order,
  setOrder,
  className,
}) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  useOutSideClick({ ref: ref, isOpened: open, setIsOpened: setOpen });

  return (
    <div
      className={
        `relative flex w-full cursor-pointer items-center justify-between bg-primary px-4 py-3.5 text-white ${open ? "rounded-t-3xl" : "rounded-3xl"} ` +
        className
      }
      onClick={() => setOpen((prev) => !prev)}
      ref={ref}
    >
      <div className="flex gap-2.5">
        {setOrder && order && (
          <SelectIcon
            onClick={(e: Event) => {
              e.stopPropagation();
              setOrder(order === "desc" ? "asc" : "desc");
            }}
            className={`${order === "asc" ? "rotate-180 transform" : ""}`}
          />
        )}
        <p className="text-sm font-bold">
          {value?.text ?? placeholder ?? "مرتب‌سازی"}
        </p>
      </div>
      {open ? <Arrow className="rotate-180 transform" /> : <Arrow />}
      <motion.nav
        animate={open ? "open" : "closed"}
        variants={selectVariants}
        initial={false}
        className={
          "absolute right-0 top-12 z-40 flex w-full flex-col gap-5 bg-primary px-4 py-5 text-sm font-bold text-white rounded-b-3xl " +
          className
        }
      >
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setValue(item)}
            className={`${item?.value === value?.value ? "text-grave" : ""}`}
          >
            {item?.text}
          </div>
        ))}
      </motion.nav>
    </div>
  );
};

export default SelectInput;
