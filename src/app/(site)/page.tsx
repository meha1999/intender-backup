"use client";
import DashboardCard from "@/components/common/DashboardCard";
import Companies from "public/icons/site/companies.svg";
import Reporting from "public/icons/site/editReport.svg";
import Manager from "public/icons/site/manager.svg";
import Join from "public/icons/site/join.svg";
import Invite from "public/icons/site/invite.svg";
import Shop from "public/icons/site/shop.svg";
import AboutUs from "public/icons/site/aboutUs.svg";
import App from "public/images/homepage/app.svg";
import Catalog from "public/images/homepage/catalog.png";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { authServiceHandler } from "@/services/auth.service";
import { toast } from "react-toastify";
import { useState } from "react";
import errorHandler from "@/utils/errorHandler";

const Home = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm<preSignUpType>();
  const [loading, setLoading] = useState(false);

  const handlePreSignUp: SubmitHandler<preSignUpType> = async (data) => {
    setLoading(true);
    try {
      await authServiceHandler.preSignUp(data);
      toast.success("با موفقیت ثبت شد.");
      onOpenChange();
    } catch (error) {
      errorHandler(error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className=" flex h-full flex-col gap-20 bg-primary">
        <div className="bg-banner">
          <div className="container mx-auto flex flex-col items-center justify-center gap-14 px-20 pt-44 max-md:px-4">
            <div className="flex w-full flex-col items-center justify-center gap-5">
              <h1 className="max-md:text-center max-md:text-4xl flex items-center justify-center text-6xl font-black text-brand">
                {"همراه شما در فرآیندهای تامین و مناقصه"}
              </h1>
              <h2 className="flex items-center justify-center text-center text-base font-bold text-milky">
                {
                  "با تمرکز بر فرآیندهای تامین صنعتی اینتندر به شما این امکان را می دهد تا به راحتی با شرکت های داخلی و بین المللی در ارتباط باشید،‌ با ثبت درخواست دمو با امکانات پلتفرم آشنا شده  و به شبکه‌ی جامع اینتندر بپیوندید."
                }
              </h2>
              <div className="flex items-center gap-5 max-md:flex-col">
                <Button onPress={onOpen} className="bg-brand px-12 text-white">
                  {"درخواست دمو"}
                </Button>
                <Button className="border border-brand bg-transparent px-12 text-brand">
                  {"پیش ثبت نام"}
                </Button>
              </div>
            </div>

            <div className="mt-32 flex items-center justify-center rounded-2xl bg-primary text-white">
              <p>{"+200 فرایند با اینتندر اجرایی شده است."}</p>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-8">
              <DashboardCard label="گزارش گیری" Icon={<Reporting />} />
              <DashboardCard label="مدیریت تامین" Icon={<Manager />} />
              <DashboardCard label="برگذاری مناقصه" Icon={<Invite />} />
              <DashboardCard label="شرکت در مناقصه" Icon={<Join />} />
              <DashboardCard label="سبد خرید" Icon={<Shop />} />
              <DashboardCard label="شرکت ها" Icon={<Companies />} />
            </div>
          </div>
        </div>
        <div className="bg-black bg-tail">
          <div className="container mx-auto flex w-full items-center justify-center gap-48 px-20 py-14 max-md:flex-col max-md:px-4">
            <div className="flex w-1/2 flex-col items-start justify-center gap-6 max-md:w-full">
              <p className="text-3xl font-bold text-brand">{"درباره R.A.P"}</p>
              <p className="text-sm font-medium leading-10 text-white">
                {
                  "شرکت راهکار افزارمند پیشرو، R.A.P، با هدف ارائه راهکارهای مهندسی و مدیریتی متنوع در صنعت با تکیه بر تجربه‌ی صنعتگران و انرژی و خلاقیت جوانان متخصص داخلی تشکیل شده است.R.A.P بناست که با ارائه‌ی راهکارهای خلاقانه و نوآورانه در قدم اول به حل چالش‌های صنعت فولاد بپردازد."
                }
              </p>
            </div>
            <div className="flex w-1/2 flex-col items-center justify-center max-md:w-full">
              <AboutUs className='w-full'/>
            </div>
          </div>

          <div className="container mx-auto flex w-full flex-row-reverse items-center justify-center gap-48 px-20 py-14 max-md:flex-col max-md:px-4">
            <div className="flex w-1/2 flex-col items-start justify-center gap-6 max-md:w-full">
              <p className="text-3xl font-bold text-brand">
                {"درباره intender"}
              </p>
              <p className="text-sm font-medium leading-10 text-white">
                {
                  "پلتفرم intender با هدف بهبود تجربه‌ی کاربری و افزایش بهره‌وری در مدیریت خرید، مناقصات و فرآیندهای تامین صنعتی توسعه یافته است. این پلتفرم در حال حاضر ابزارهای لازم جهت تشکیل مناقصات محدود و عمومی و تکمیل مرحله فنی را در اختیار کاربران‌قرار‌می‌دهد."
                }
              </p>
            </div>
            <div className="flex w-1/2 flex-col items-center justify-center max-md:w-full">
              <App className='w-full'/>
            </div>
          </div>

          <div className="container mx-auto flex flex-col items-center justify-center px-20 py-14 pb-44 max-md:px-4">
            <p className="text-4xl font-bold text-brand">
              {"با ما بیشتر آشنا شو!!!"}
            </p>
            <div className="flex flex-col items-center justify-center text-center">
              <a
                href={"pdfs/R.A.P.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Catalog} alt="catalog" className="shadow-xl" />
                <p className="text-sm font-bold text-milky">
                  {"برای دانلود کاتالوگ کلیک کنید"}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-primary">
          {(onClose) => (
            <form onSubmit={handleSubmit(handlePreSignUp)}>
              <ModalHeader className="flex flex-col gap-1">
                درخواست دمو
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-center gap-4">
                  <Input
                    label="نام و نام خانوادگی"
                    {...register("fullname", { required: true })}
                  />
                  <Input
                    label="نام شرکت"
                    {...register("company_name", { required: true })}
                  />

                  <Input
                    label="شماره تماس"
                    {...register("mobile", { required: true })}
                  />
                  <Input
                    label="ایمیل"
                    {...register("email", { required: true })}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button isLoading={loading} type="submit" color="success">
                  ثبت
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
