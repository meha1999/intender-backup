import React from "react";
import { IoIosMore } from "react-icons/io";
import { ImAttachment } from "react-icons/im";
import { TbArrowForwardUp } from "react-icons/tb";
const CommentCard = () => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl bg-white px-10 py-8">
      <div className="flex gap-5">
        <div className="h-16 w-16 rounded-xl border-4 border-weeny">
          <div className="h-full rounded-xl border-4 border-light-gray"></div>
        </div>
        <div className="flex justify-between w-full">
          <p className="text-sm text-brand">نام کاربری / اسم</p>
          <div className="flex relative bottom-3 items-start gap-2 text-black">
            <p>۱۳:۳۰</p>
            <div className="border border-light-gray" />
            <p>۱۴۰۲/۱۲/۲۳</p>
            <div className="border border-light-gray" />
            <IoIosMore className="h-5 w-5" />
          </div>
        </div>
      </div>
      <p className="text-base text-black">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی ....
      </p>
      <div className="flex justify-end gap-3 text-black">
        <p>4</p>
        <TbArrowForwardUp />
        <p>4</p>
        <ImAttachment />
      </div>
    </div>
  );
};

export default CommentCard;
