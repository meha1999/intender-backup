import Image from "next/image";
import { cards, services } from "@/configs/layout";
import Button from "@/components/common/Button";
import Slider from "@/components/pages/site/Slider";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Path from "public/images/homepage/path.svg";
import Building from "public/images/homepage/building.png";
import Graph from "public/images/homepage/graph.png";
import City from "public/images/homepage/city.svg";

const Home = () => {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="h-full bg-banner bg-cover bg-no-repeat pb-64 pt-36">
        <div className="container mx-auto">
          <div className="inline-flex flex-col pt-3.5">
            <h1 className="inline-flex text-6xl font-black text-white">
              {"همراه شما در فرآیندهای تامین و مناقصه"}
            </h1>
            <div className="flex items-start py-20">
              <h2 className="w-5/12 pt-52 text-xl text-white">
                {
                  "با تمرکز بر فرآیندهای تامین صنعتی اینتندر به شما این امکان را می دهد تا به راحتی با شرکت های داخلی و بین المللی در ارتباط باشید،‌ ثبت درخواست های مختلف کنید و سریع و هوشمندانه خرید و فروش کنید."
                }
              </h2>
              <Button
                href={"/"}
                className="rounded-2xl bg-primary px-7 py-3 text-xl font-medium"
              >
                {"عضویت در اینتندر"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-common py-20">
        <div className="container mx-auto flex justify-between rounded-xl bg-common-dark p-14">
          <div className="flex w-1/2 items-center justify-center">
            <Image src={Building} alt="building" />
          </div>
          <div className="flex w-1/2 flex-col gap-16">
            <h2 className="text-xl font-bold">
              {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"}
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-base text-white">
                {
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                }
              </p>
              <p className="text-base text-white">
                {
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-black">
        <div className="container mx-auto flex flex-col gap-48 py-6">
          <div className="flex flex-col gap-7">
            <h2 className="text-2xl">{"سرویس‌های اینتندر"}</h2>
            <div className="w-full border border-black" />
            <div className="flex flex-wrap justify-center gap-32">
              {services.map((item) => (
                <Button
                  href={item.route}
                  key={item.name}
                  className="flex h-56 w-56 flex-col items-center justify-between rounded-3xl px-12 py-7 font-semibold shadow-services-card"
                  style={{ backgroundColor: item.color, color: item.textColor }}
                >
                  {item.name}
                  {item.icon}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-20">
            <div className="flex flex-wrap gap-y-7">
              {cards.map((item) => (
                <div
                  key={item.id}
                  className="flex w-1/4 flex-col items-center rounded-3xl  px-7 drop-shadow-card"
                >
                  <div className="h-72 w-full rounded-t-3xl bg-slate-500"></div>
                  <div className="flex flex-col gap-12 rounded-b-3xl bg-white px-6 py-5">
                    <p>{item.text}</p>
                    <div className="flex items-center justify-between">
                      {item.isFavorite ? <FaRegHeart /> : <FaHeart />}
                      <Button className="rounded-xl bg-brand px-4 py-1.5 text-white">
                        {"ثبت"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button className="rounded-lg bg-common-dark px-16 py-4 text-white">
              {"مشاهده بیشتر"}
            </Button>
          </div>
        </div>
        <div className="relative flex flex-col items-center overflow-x-hidden bg-white pt-36">
          <div className="w-full bg-black">
            <div className="container mx-auto flex py-28">
              <div className="flex w-1/2 flex-col items-center gap-20">
                <h2 className="text-2xl font-bold text-white">
                  {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"}
                </h2>
                <p className="text-lg text-white">
                  {
                    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                  }
                </p>
              </div>
              <div className="flex w-1/2 items-center justify-center">
                <Image src={Graph} alt="graph" />
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <Path />
          </div>
        </div>

        <div className="bg-events mt-32 flex w-full flex-col items-center justify-center gap-16 bg-no-repeat py-16 text-white">
          <h2 className="text-3xl font-bold">{"ایونت‌ها و اعلانات"}</h2>
          <div className="container mx-auto grid w-full grid-cols-4 gap-7">
            {[1, 2, 3, 4].map((item) => (
              <div key={item}>
                <div className="h-[409px] w-full bg-common"></div>
                <div className="h-[66px] bg-primary"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-24 bg-common-dark px-7 pb-40 pt-32 text-white">
          <h2 className="text-3xl">{"برترین شرکت‌ها"}</h2>
          <Slider />
        </div>
        <div className="flex justify-center pt-24">
          <City />
        </div>
      </div>
    </div>
  );
};

export default Home;
