"use client";
import Image from "next/image";
import Button from "@/components/common/Button";
import Logo from "public/icons/dashboardLogo.svg";
import Reference from "public/icons/reference.svg";
import Certificate from "public/icons/certificate.svg";
import Message from "public/icons/message.svg";
import Empty from "public/images/defaults/empty.png";
import Accordion from "@/components/common/Accordion";
import { useState } from "react";

const Comapny = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const references = [
    {
      name: "لورم ایپسوم ",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از",
      img: Empty,
    },
    {
      name: "لورم ایپسوم ",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از",
      img: Empty,
    },
    {
      name: "لورم ایپسوم ",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از",
      img: Empty,
    },
    {
      name: "لورم ایپسوم ",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از",
      img: Empty,
    },
    {
      name: "لورم ایپسوم ",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از",
      img: Empty,
    },
    {
      name: "لورم ایپسوم ",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از",
      img: Empty,
    },
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
    <div className="flex h-screen flex-col overflow-y-auto bg-light-gray bg-company-background bg-cover bg-center bg-no-repeat">
      <div className="min-h-60 bg-primary bg-company-header bg-no-repeat">
        <div className="container mx-auto flex h-full items-center justify-end">
          <Logo />
        </div>
      </div>
      <div className="container mx-auto -mt-10 mb-28 flex flex-col gap-10">
        <div className="flex gap-10 rounded-3xl bg-white px-10 py-7 max-lg:flex-col max-lg:items-center">
          <div className="h-64 w-64 rounded-full border-8 border-brand">
            <div className="h-full rounded-full border-8 border-light-gray"></div>
          </div>
          <div className="flex grow flex-col justify-between">
            <div className="flex flex-col gap-8">
              <p className="text-2xl font-bold text-black max-lg:text-center">
                {"لورم ایپسوم"}
              </p>
              <div className="flex justify-between max-xl:flex-col">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-7 max-lg:justify-center">
                    <p className="text-lg font-medium text-dark-gray">
                      {"دفتر مرکزی"}
                    </p>
                    <p className="font-medium text-black">
                      {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم"}
                    </p>
                  </div>
                  <p className="font-normal text-dark-gray">
                    {
                      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."
                    }
                  </p>
                </div>
                <div className="flex gap-12 max-xl:pt-3 max-lg:justify-center">
                  <div className="flex flex-col gap-3.5">
                    <p className="text-xl font-medium text-dark-gray">
                      {"صنعت"}
                    </p>
                    <p className="text-sm text-black">{"اینترنت"}</p>
                  </div>
                  <div className="flex flex-col gap-3.5">
                    <p className="text-xl font-medium text-dark-gray">
                      {"نوع"}
                    </p>
                    <p className="text-sm text-black">{"شرکت خصوصی"}</p>
                  </div>
                  <div className="flex flex-col gap-3.5">
                    <p className="text-xl font-medium text-dark-gray">
                      {"سال تاسیس"}
                    </p>
                    <p className="text-sm text-black">{"۱۳۸۴"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-4 max-lg:pt-4">
              <div className="flex gap-8 text-lg text-black">
                <div className="flex gap-4 font-medium">
                  <p>{"تلفن:"}</p>
                  <p dir="ltr">{"+۹۸ ۹۳۳ ۶۵ ۷۳"}</p>
                </div>
                <p className="text-lg">{"وب‌سایت: www.netsazan.ir"}</p>
              </div>
              <Button className="rounded-2xl border border-brand bg-brand px-16 py-3.5 font-bold text-white hover:bg-white hover:text-brand">
                {"ثبت درخواست"}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex w-2/5 flex-col gap-10">
            <div className="flex flex-col gap-6 rounded-3xl bg-white px-10 py-7">
              <p className="font-bold text-black">{"معرفی محصولات"}</p>
              <div className="h-56 w-full rounded-3xl bg-gray-200"></div>
              <p className="rounded-3xl bg-milky px-5 py-4 text-dark-gray">
                {
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                }
              </p>
            </div>
            <div className="flex grow flex-col justify-between rounded-3xl bg-white px-10 py-7">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-1">
                  <Message className="text-dark-gray" />
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
              <Button className="rounded-xl border border-brand bg-brand py-3 text-sm font-bold text-white hover:bg-white hover:text-brand">
                {"ارسال پیام ها"}
              </Button>
            </div>
          </div>
          <div className="flex w-3/5 flex-col gap-10">
            <div className="flex  flex-col gap-8 rounded-3xl bg-white px-10 py-7">
              <div className="flex flex-col gap-5">
                <p className="font-bold text-black">{"درباره ما"}</p>
                <p className="text-sm font-medium text-dark-gray">
                  {
                    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                  }
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-bold text-black">{"تخصص ها"}</p>
                <p className="text-sm font-medium text-dark-gray">
                  {
                    "حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 rounded-3xl bg-white px-10 py-7">
              <div className="flex w-full flex-col gap-6">
                <div className="flex items-center gap-1">
                  <Reference className="text-dark-gray" />
                  <p className="font-bold text-black">{"معرف ها"}</p>
                </div>
                <div className="grid grid-cols-2 justify-between gap-x-10 gap-y-16">
                  {references.map((item) => (
                    <div key={item.name} className="flex justify-between">
                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-bold text-black">
                          {item.name}
                        </p>
                        <p className="text-xs text-dark-gray">{item.desc}</p>
                      </div>
                      <Image src={item.img} alt="reference image" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full border border-light-gray" />
              <div className="flex w-full flex-col gap-6">
                <div className="flex items-center gap-1">
                  <Certificate className="text-dark-gray" />
                  <p className="font-bold text-black">{"گواهی نامه ها"}</p>
                </div>
                <div className="grid grid-cols-4 justify-between gap-x-10 gap-y-16">
                  {references.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col items-center justify-center gap-4"
                    >
                      <Image src={item.img} alt="reference image" />
                      <p className="text-xs font-bold text-black">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comapny;
