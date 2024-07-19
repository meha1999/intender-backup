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
        slidesPerView={3}
        modules={[Navigation]}
        centeredSlides={true}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <SwiperSlide key={item} className="!flex justify-center" dir="rtl">
            {({ isActive }) => (
              <div
                className={`relative flex h-full flex-col items-center justify-center ${isActive ? "w-[100%]" : "top-10 w-[95%]"} rounded-[60px] bg-white`}
              >
                <div
                  className={`relative mb-11 flex w-full flex-col items-start justify-end gap-11 rounded-full  ${isActive ? "bottom-10 h-[540px] px-11" : "h-[460px]  px-4"}`}
                >
                  <p className="text-lg font-bold text-black">
                    {"همایش ها / اعلانات"}
                  </p>

                  <div className="w-full border border-dark-gray" />
                  <p className="text-sm text-black">
                    {
                      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ."
                    }
                  </p>
                  <p className="self-center text-lg text-black">
                    {"مشاهده جزئیات"}
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
