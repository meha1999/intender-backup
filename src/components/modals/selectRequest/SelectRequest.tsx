import React from "react";
import Button from "@/components/common/Button";

const SelectRequest = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-6">
        <p className="text-sm font-bold">نوع درخواست خود را انتخاب کنید</p>
        <div className="flex flex-col gap-5 text-sm">
          <div className="flex gap-3">
            <input type="radio" id="age1" name="age" value="1" />
            <label htmlFor="age1">استعلام محرمانه</label>
          </div>
          <div className="flex gap-3">
            <input type="radio" id="age2" name="age" value="2" />
            <label htmlFor="age2">تشکیل مناقصه</label>
          </div>
          <div className="flex gap-3">
            <input type="radio" id="age3" name="age" value="3" />
            <label htmlFor="age3">درخواست سرویس از شرکت خاص</label>
          </div>
          <div className="flex gap-3">
            <input type="radio" id="age4" name="age" value="4" />
            <label htmlFor="age4">آگهی درخواست سرویس</label>
          </div>
        </div>
        <div className="w-full border border-b-2"></div>
        <p className="text-sm font-bold">نوع سرویس</p>
        <div className="flex gap-10">
          <div className="flex gap-3 text-sm">
            <input type="radio" id="age1" name="age" value="1" />
            <label htmlFor="age1">ساخت</label>
          </div>
          <div className="flex gap-3">
            <input type="radio" id="age2" name="age" value="2" />
            <label htmlFor="age2">تامین</label>
          </div>
          <div className="flex gap-3">
            <input type="radio" id="age2" name="age" value="2" />
            <label htmlFor="age2">مشاوره</label>
          </div>
          <div className="flex gap-3">
            <input type="radio" id="age2" name="age" value="2" />
            <label htmlFor="age2">خدمات</label>
          </div>
          <div className="flex gap-3">
            <input type="radio" id="age2" name="age" value="2" />
            <label htmlFor="age2">مهندسی</label>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="rounded-xl bg-brand px-24 py-3 text-white">
          تایید
        </Button>
      </div>
    </div>
  );
};

export default SelectRequest;
