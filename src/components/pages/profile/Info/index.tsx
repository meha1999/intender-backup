"use client";

import Button from "@/components/common/Button";
import { useState } from "react";

const Info = () => {
  const [activeTab, setActiveTab] = useState<"aboutUs" | "information">(
    "aboutUs",
  );
  const tab = {
    aboutUs: {
      label: "درباره شرکت",
      component: <></>,
    },
    information: {
      label: "اطلاعات تکمیلی",
      component: <></>,
    },
  };
  return (
    <>
      <p className="font-bold text-brand">{"اطلاعات"}</p>
      <div className="flex flex-col gap-4 rounded-xl bg-milky px-6 py-4">
        <div className="flex">
          {/* {Object.keys(tab).map((item: "aboutUs" | "information") => (
            <Button key={item}>{tab[item].label}</Button>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Info;
