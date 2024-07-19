"use client";
import { useState } from "react";
import Accordion from "@/components/common/Accordion";
import Button from "@/components/common/Button";
import Upload from "public/icons/dashboard/upload.svg";
import Message from "public/icons/message.svg";

const Tender = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const tags = [
    "سربرگ ها",
    "سربرگ ها",
    "سربرگ ها",
    "سربرگ ها",
    "سربرگ ها",
    "لورم_ایپسوم_متن_ساختگی",
    "لورم_ایپسوم_متن_ساختگی",
    "لورم_ایپسوم_متن_ساختگی",
  ];

  const faq = [
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
    },
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
    },
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
    },
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
    },
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
    },
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
    },
  ];

  return (
    <div className="flex flex-col gap-10 pb-6">
      <div className="flex items-center justify-between rounded-3xl bg-white p-12">
        <div className="flex items-center gap-11">
          <div className="flex h-44 w-44 items-center justify-center rounded-full border-2 border-brand">
            <div className="h-40 w-40 rounded-full bg-gray-700"></div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-xl font-bold text-black">{"لورم ایپسوم"}</p>
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
                <p className="text-black">{"نظافت صنعتی"}</p>
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
                <p className="text-black">{"1403/08/20"}</p>
              </div>
            </div>
          </div>
        </div>
        <Button className="rounded-xl border border-brand bg-brand px-20 py-4 text-white hover:bg-white hover:text-brand">
          {"ثبت درخواست"}
        </Button>
      </div>
      <div className="flex gap-10">
        <div className="flex w-full flex-col gap-12 rounded-3xl bg-white p-12">
          <div className="flex flex-col gap-7">
            <p className="text-xl font-bold text-black">
              {"جزئـیـات مـنـاقصه"}
            </p>
            <div className="rounded-xl bg-milky px-4 py-7 text-justify text-sm text-black">
              {
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
              }
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-xl font-bold text-black">{"سربرگ ها"}</p>
            <div className="flex flex-wrap gap-4">
              {tags.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-light-weeny px-6 py-2 text-sm text-weeny"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-12 rounded-3xl bg-white p-12 text-secondary-light">
          <div className="flex flex-col items-center gap-5 rounded-3xl border-4 border-dashed border-secondary-light py-12">
            <Upload />
            <p className="text-2xl font-bold">{"آپلود تصاویر/مدارک"}</p>
          </div>
          <div className="shadow-faq flex flex-col gap-6 rounded-3xl bg-white px-8 py-7">
            <div className="flex items-center gap-1 text-dark-gray">
              <Message />
              <p className="font-bold text-black">{"سوالات متداول"}</p>
            </div>
            <div className="flex flex-col gap-1">
              {faq.map((item, index) => (
                <Accordion
                  i={index}
                  title={item.title}
                  description={item.desc}
                  key={index}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  className="rounded-2xl bg-milky p-5"
                  containerStyle="text-black text-xs font-bold cursor-pointer"
                  childrenStyle="text-dark-gray text-xs pt-3"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tender;
