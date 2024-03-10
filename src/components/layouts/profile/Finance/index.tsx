"use client";
import Button from "@/components/common/Button";
import ReactECharts from "echarts-for-react";
import BankCard from "public/images/defaults/bank-card.svg";
const Finance = () => {
  /** @type EChartsOption */
  const option = {
    grid: {
      top: 10,
      bottom: 25,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        lineStyle: {
          width: 5,
        },
        smooth: true,
        symbol: "none",
      },
    ],
  };
  const option2 = {
    grid: {
      top: 10,
      bottom: 25,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        lineStyle: {
          width: 5,
          color: "#FF5117",
        },
        smooth: true,
        symbol: "none",
      },
    ],
  };
  return (
    <div className="flex h-full w-1/3 flex-col gap-7 overflow-auto bg-primary px-12">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-2 font-bold text-weeny">
            <p className="text-nowrap"> {"در آمد  ماه جاری"}</p>
            <p>{"300,456,000,000"}</p>
          </div>
          <ReactECharts
            style={{ height: 200 }}
            option={option}
            notMerge={true}
            lazyUpdate={true}
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-2 font-bold text-brand">
            <p className="text-nowrap"> {"مخارج ماه جاری"}</p>
            <p>{"456,000"}</p>
          </div>
          <ReactECharts
            style={{ height: 200 }}
            option={option2}
            notMerge={true}
            lazyUpdate={true}
            className="w-full"
          />
        </div>
        <div className="w-full border border-platinum" />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-bold text-white">{"موجودی کل:"}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-weeny">
            {"300,456,000,000 ریال"}
          </p>
          <div className="flex items-center gap-4">
            <Button className="rounded-xl bg-weeny px-5 py-1.5 text-sm font-bold text-white hover:bg-white hover:text-weeny">
              {"افزایش اعتبار"}
            </Button>
            <Button className="rounded-xl bg-white px-5 py-1.5 text-sm font-bold text-weeny hover:bg-weeny hover:text-white">
              {"ارسال اعتبار"}
            </Button>
          </div>
        </div>
      </div>
      <BankCard className="mx-auto" />
    </div>
  );
};

export default Finance;
