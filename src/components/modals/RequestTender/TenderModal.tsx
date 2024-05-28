import React, { useState } from "react";
import Draggable from "../../common/Draggable";
import Documents from "../Documents";
import RequestTender from "./RequestTender";

const TenderModal = () => {
  const data: Array<{
    text: string;
    value: "requestTender" | "documents";
  }> = [
    { text: "اطلاعات", value: "requestTender" },
    { text: "مدارک", value: "documents" },
  ];

  const [activeTab, setActiveTab] = useState<"requestTender" | "documents">(
    "requestTender",
  );

  const tabs = {
    requestTender: <RequestTender />,
    documents: <Documents />,
  };

  return (
    <div className="flex flex-col gap-3 px-16">
      <Draggable rootClass={"drag"}>
        <div className="flex w-full flex-row">
          {data.map((item) => (
            <div
              className={`flex w-full cursor-pointer justify-center gap-1.5 bg-white py-3 text-base font-bold ${
                activeTab === item.value
                  ? " border-b-4 border-brand text-brand"
                  : " border-b-4 border-light-gray text-dark-gray"
              }`}
              onClick={() => setActiveTab(item.value)}
              key={item.value}
            >
              {item.text}
            </div>
          ))}
        </div>
      </Draggable>
      <div>{tabs[activeTab]}</div>
    </div>
  );
};

export default TenderModal;
