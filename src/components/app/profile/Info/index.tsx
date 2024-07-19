"use client";

import Button from "@/components/common/Button";
import { useZustandStore } from "@/store";
import { useState } from "react";

const Info = () => {
  const {
    userProfile: { company },
  } = useZustandStore();
  const [activeTab, setActiveTab] = useState<string>("aboutUs");

  const tab: any = {
    aboutUs: {
      label: "درباره شرکت",
      component: <p className="text-sm text-black">{company?.description}</p>,
    },
    information: {
      label: "اطلاعات تکمیلی",
      component: <p className="text-sm text-black"> </p>,
    },
  };
  return (
      <div className="flex flex-col gap-4 rounded-xl bg-milky px-6 py-4 min-h-60">
        <div className="flex gap-8 border-b border-gray-200 text-sm font-bold text-black">
          {Object.keys(tab).map((item) => (
            <Button
              className={`border-b-2 pb-3 ${activeTab === item ? " border-brand text-brand" : "border-milky"}`}
              key={item}
              onClick={() => setActiveTab(item)}
            >
              {tab[item].label}
            </Button>
          ))}
        </div>
        {tab[activeTab].component}
      </div>
  );
};

export default Info;
