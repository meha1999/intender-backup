import Bills from "public/icons/site/bills.svg";
import Tasks from "public/icons/site/tasks.svg";
import Cart from "public/icons/site/cart.svg";
import Company from "public/icons/site/company.svg";
import Report from "public/icons/site/report.svg";
import Inquiry from "public/icons/site/inquiry.svg";
import Manage from "public/icons/site/manage.svg";
import CardBg from "public/images/defaults/card-bg.png";
import { FaUser } from "react-icons/fa";

import Home from "public/icons/site/header/home.svg";
import TendersList from "public/icons/site/header/tender.svg";
import Request from "public/icons/site/header/request.svg";
import Company2 from "public/icons/site/header/company.svg";

import Facebook from "public/icons/site/footer/facebook.svg";
import Twitter from "public/icons/site/footer/twitter.svg";
import Instagram from "public/icons/site/footer/instagram.svg";
import Google from "public/icons/site/footer/google.svg";
import Dots from "public/icons/site/footer/dots.svg";

import Dashboard from "public/icons/dashboard/sidebar/dashboard.svg";
import Requests from "public/icons/dashboard/sidebar/requests.svg";
import List from "public/icons/dashboard/sidebar/list.svg";
import Advertisment from "public/icons/dashboard/sidebar/advertisment.svg";
import Companies from "public/icons/dashboard/sidebar/comapnies.svg";

export const siteHeader = [
  {
    name: "صفحه اصلی",
    route: "/",
    icon: <Home />,
  },
  {
    name: "لیست مناقصات",
    route: "/",
    icon: <TendersList />,
  },
  {
    name: "درخواست تشکیل مناقصه",
    route: "/",
    icon: <Request />,
  },
  {
    name: "شرکت‌ها",
    route: "/",
    icon: <Company2 />,
  },
];

export const services = [
  {
    name: "برگزاری مناقصه",
    route: "",
    icon: <Bills />,
    color: "#414042CC",
    textColor: "#fff",
  },
  {
    name: "شرکت در مناقصه",
    route: "",
    icon: <Tasks />,
    color: "#FFAC9CD4",
    textColor: "#000",
  },
  {
    name: "درخواست خرید",
    route: "",
    icon: <Cart />,
    color: "#448CF6B0",
    textColor: "#000",
  },
  {
    name: "ارتباط با شرکت‌ها",
    route: "",
    icon: <Company />,
    color: "#EBECEC",
    textColor: "#000",
  },
  {
    name: "گزارش‌گیری",
    route: "",
    icon: <Report />,
    color: "#448CF6B0",
    textColor: "#000",
  },
  {
    name: "استعلام",
    route: "",
    icon: <Inquiry />,
    color: "#EBECEC",
    textColor: "#000",
  },
  {
    name: "مدیریت تامین",
    route: "",
    icon: <Manage />,
    color: "#414042CC",
    textColor: "#fff",
  },
];

export const cards = [
  {
    id: "",
    image: CardBg,
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    isFavorite: true,
  },
  {
    id: "",
    image: CardBg,
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    isFavorite: false,
  },
  {
    id: "",
    image: CardBg,
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    isFavorite: false,
  },
  {
    id: "",
    image: CardBg,
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    isFavorite: false,
  },
  {
    id: "",
    image: CardBg,
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    isFavorite: false,
  },
  {
    id: "",
    image: CardBg,
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    isFavorite: false,
  },
  {
    id: "",
    image: CardBg,
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    isFavorite: true,
  },
  {
    id: "",
    image: CardBg,
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    isFavorite: true,
  },
];

export const social = [
  {
    icon: <Facebook />,
    url: "",
  },
  {
    icon: <Twitter />,
    url: "",
  },
  {
    icon: <Instagram />,
    url: "",
  },
  {
    icon: <Google />,
    url: "",
  },
  {
    icon: <Dots />,
    url: "",
  },
];

export const dashboardSideBar = [
  {
    name: "داشبورد",
    icon: <Dashboard />,
    url: "/dashboard",
  },
  {
    name: "درخواست‌ها",
    icon: <Requests />,
    url: "/dashboard/requests",
  },
  {
    name: "لیست مناقصات",
    icon: <List />,
    url: "/dashboard/tenders",
  },
  {
    name: "آگهی‌ها",
    icon: <Advertisment />,
    url: "/dashboard/advertisements",
  },
  {
    name: "شرکت‌ها",
    icon: <Companies />,
    url: "/dashboard/companies",
  },
  {
    name: "پروفایل",
    icon: <FaUser className="h-6 w-7" />,
    url: "/dashboard/profile",
  },
];
