import React from "react";
import Image from "next/image";
import AdvertisemenHaeder from "public/images/defaults/advertisementHeader.png";
import Button from "@/components/common/Button";
import { CiFilter } from "react-icons/ci";
import { BsGrid } from "react-icons/bs";
import { PiList } from "react-icons/pi";
import CommentCard from "@/components/pages/dashboard/advertisements/CommentCard";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Context } from "@ckeditor/ckeditor5-core";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";

const Advertisement = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 rounded-3xl bg-white px-16 py-20">
      <div>
        <Image src={AdvertisemenHaeder} alt="Advertisement" />
      </div>
      <div className="flex w-full flex-col items-start gap-3">
        <p className="text-sm font-bold text-black"> نام دیسپلین</p>
        <div className="h-52 w-full rounded-md border-2 border-light-gray px-7 py-4 text-dark-gray">
          <div>نظر خود را وارد کنید...|</div>
          <div className=" flex h-full items-end justify-end pb-8">
            <Button className="rounded-md bg-brand px-5 py-2 text-white">
              ثبت نظر
            </Button>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start ">
        <p className="rounded-3xl bg-light-gray px-12 pb-9 pt-3 text-xl font-bold text-black">
          نظرات
        </p>
        <div className="relative bottom-7 flex w-full flex-col gap-6 rounded-2xl bg-light-gray px-8 pb-4 pt-9">
          <div className="flex items-center justify-between">
            <div className="flex justify-center gap-14 rounded-xl bg-white px-3 py-2 text-base text-dark-gray">
              <div className="flex items-center gap-1">
                <CiFilter />
                <p> مرتب‌ سازی</p>
              </div>
              <div className="flex gap-7 pl-5">
                <p>قدیمی</p>
                <p>جدید</p>
                <p>امتیاز</p>
              </div>
            </div>
            <div className="relative bottom-6 flex  gap-2 text-dark-gray">
              <PiList className="h-7 w-7" />
              <BsGrid className="h-6 w-6" />
            </div>
          </div>
          <CommentCard />
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
