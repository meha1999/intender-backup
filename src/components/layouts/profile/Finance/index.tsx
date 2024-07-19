"use client";
import { Button } from "@nextui-org/react";
import { Progress } from "@nextui-org/progress";

const Finance = () => {
  /** @type EChartsOption */

  return (
    <div className="flex h-full w-1/3 flex-col gap-7 overflow-auto bg-primary px-12">
      <Button className="bg-weeny text-white">{"خرید اشتراک"}</Button>
      <div className="flex flex-col gap-6 rounded-3xl border border-platinum p-7 text-sm font-bold">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            <p className="text-white">وضعیت بسته : </p>
            <p className="text-green-500">فعال</p>
          </div>
          <div className="flex items-center gap-0.5">
            <p className="text-white"> تاریخ پایان اشتراک : </p>
            <p className="text-brand">1403/02/22</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-white"> نوع اشتراک : </p>
          <div className="bg-dark-weeny rounded-3xl px-12 py-3 text-weeny">
            {"اینتندر پلاس"}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-white"> تعداد درخواست ها : </p>
          <p className="text-weeny">{" 28درخواست از 30 باقی مانده"}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-white">حجم آپلود : </p>
            <p className="text-brand">{"12گیگ از 20گیگابایت"}</p>
          </div>
          <div className="flex items-center gap-2 text-brand">
            {"56%"}
            <Progress
              value={56}
              color="warning"
              classNames={{
                track: "bg-white",
                indicator: "bg-gradient-to-r from-pink-500 to-brand",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-white">مدت رمان باقی مانده: </p>
            <p className="text-brand">{"29 روز باقی مانده"}</p>
          </div>
          <div className="flex items-center gap-2 text-brand">
            {"16%"}
            <Progress
              value={16}
              color="warning"
              classNames={{
                track: "bg-white",
                indicator: "bg-gradient-to-r from-pink-500 to-brand",
              }}
            />
          </div>
        </div>

        <p className="text-xs text-white">
          {
            "درصورت پایان زمان اشتراک یا حجم آپلود اشتراک مورد نظر با زدن برروی دکمه خرید اشتراک بالای صفحه اعتبار خود را تمدید کنید."
          }
        </p>
      </div>
    </div>
  );
};

export default Finance;
