// "use client";
// import { useState } from "react";
// import Accordion from "@/components/common/Accordion";
import CreateBidModal from "@/components/app/dashboard/tenders/CreateBidModal";
import Button from "@/components/common/Button";
import { tenderServiceHandler } from "@/services/tender.service";
import { setServerSideToken } from "@/utils/setToken";
import { FaFileDownload } from "react-icons/fa";

const Tender = async ({ params }: { params: { id: string } }) => {
  setServerSideToken();
  const res = await tenderServiceHandler.getTender(params.id);

  return (
    <div className="flex flex-col gap-10 pb-6">
      <div className="flex items-center justify-between rounded-3xl bg-white p-8">
        <div className="flex items-center gap-11">
          <div className="flex h-44 w-44 items-center justify-center rounded-full border-2 border-brand">
            <div className="h-40 w-40 rounded-full bg-gray-700"></div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-xl font-bold text-black">{res.data.name}</p>
            <div className="flex items-center gap-1">
              <p className="text-lg font-semibold text-dark-gray">
                {"شرکت ایجاد کننده:"}
              </p>
              <p className="text-black">
                {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم"}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-lg font-semibold text-dark-gray">
                {"شخص مسئول:"}
              </p>
              <p className="text-black">{"لورم ایپسوم"}</p>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-1">
                <p className="text-lg font-semibold text-dark-gray">
                  {"خدمات:"}
                </p>
                <p className="text-black">{res.data.service.name}</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-lg font-semibold text-dark-gray">
                  {"زمان شروع:"}
                </p>
                <p className="text-black">{"1403/08/20"}</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-lg font-semibold text-dark-gray">
                  {"زمان پایان:"}
                </p>
                <p className="text-black">{res.data.deadline}</p>
              </div>
            </div>
          </div>
        </div>
        <CreateBidModal tender={res.data} id={params.id} />
      </div>
      <div className="flex gap-10">
        <div className="flex w-full flex-col gap-12 rounded-3xl bg-white p-8">
          <div className="flex flex-col gap-7">
            <p className="text-xl font-bold text-black">
              {"جزئـیـات مـنـاقصه"}
            </p>
            <div className="rounded-xl bg-milky px-4 py-7 text-justify text-sm text-black">
              {res.data.description}
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-xl font-bold text-black">{"سربرگ ها"}</p>
            <div className="flex flex-wrap gap-4">
              {res.data.tags.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl bg-light-weeny px-6 py-2 text-sm text-weeny"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-12 rounded-3xl bg-white p-8 text-xs font-bold text-black">
          <p className="text-xl font-bold text-black">
            {"دانلود تصاویر/مدارک"}
          </p>
          <a
            className="flex flex-col items-center gap-8"
            target="_"
            href={res.data.inquiry}
          >
            {res.data.inquiry}

            <FaFileDownload className="cursor-pointer text-7xl text-weeny" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tender;
