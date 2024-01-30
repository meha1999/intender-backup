"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BiSolidBadgeCheck } from "react-icons/bi";

const Slider = () => {
  return (
    <>
      <Swiper
        dir="ltr"
        className="h-full w-full"
        spaceBetween={100}
        slidesPerView={3}
        modules={[Navigation]}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <SwiperSlide key={item} className="!flex justify-center" dir="rtl">
            <div className="flex w-80 flex-col items-center gap-5 rounded-2xl bg-white p-16">
              <div className="h-28 w-28 rounded-full border-4 border-primary"></div>
              <div className="flex items-center gap-1">
                <p className="font-bold text-black">{"لورم ایپسوم"}</p>
                <BiSolidBadgeCheck className="text-3xl text-green-700" />
              </div>
              <div className="w-full border border-black" />
              <p className="text-xs text-black">
                {
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ."
                }
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
