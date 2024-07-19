"use client";
import { Suspense } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TenderSearch from "./TenderSearch";
import useToggleSearchParam from "@/utils/useToggleSearchParam";

const TenderFilters = ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  const search = useToggleSearchParam({ paramKey: "deadline" });

  return (
    <Suspense
      key={`search=${JSON.stringify(searchParams)}`}
      fallback={<>error</>}
    >
      <div className="flex items-center justify-between gap-2.5">
        <div className="w-2/5">
          <TenderSearch />
        </div>
        <div className="w-1/5">
          {/* <SelectInput
            data={[
              { text: "مناقصات برتر", value: "superior" },
              { text: "سابقه", value: "history" },
              { text: "محصول", value: "product" },
            ]}
            placeholder="صنعت"
            value={filter}
            setValue={setFilter}
            order={order}
            setOrder={setOrder}
          /> */}
        </div>
        <div className="w-1/5">
          {/* <SelectInput
            data={[
              { text: "دسته بندی", value: "superior" },
              { text: "سابقه", value: "history" },
              { text: "محصول", value: "product" },
            ]}
            placeholder="دسته بندی"
            value={filter}
            setValue={setFilter}
            order={order}
            setOrder={setOrder}
          /> */}
        </div>
        <div className="w-1/5">
          <DatePicker
            value={new Date()}
            onChange={(e: any) => {
              search.toggleAndPush({
                item: new Date(e).toISOString().split("T")[0],
              });
            }}
            render={(value, openCalendar) => {
              return (
                <div
                  onClick={openCalendar}
                  className="flex w-full items-center justify-center gap-4 rounded-3xl bg-white px-4 py-3.5 text-dark-gray"
                >
                  <MdOutlineDateRange />
                  {value}
                </div>
              );
            }}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-left"
          />
        </div>
      </div>
    </Suspense>
  );
};

export default TenderFilters;
