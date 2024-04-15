"use client";
import { useState } from "react";
import InfoCard from "@/components/common/InfoCard";
import Active from "public/icons/dashboard/requests/active.svg";
import All from "public/icons/dashboard/requests/all.svg";
import Favorite from "public/icons/dashboard/requests/favorite.svg";
import Deactive from "public/icons/dashboard/requests/deactive.svg";
import Modal from "@/components/common/Modal";
import TestModal from "@/components/Modals/TestModal";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const info = [
    {
      title: "درخواست های فعال",
      date: 30,
      count: 28383384,
      Icon: Active,
      color: "#00D008",
    },
    {
      title: "کل درخواست ها",
      date: 30,
      count: 28383384,
      Icon: All,
      color: "#FF5117",
    },
    {
      title: "درخواست های برگزیده",
      date: 30,
      count: 28383384,
      Icon: Favorite,
      color: "#448CF6",
    },
    {
      title: "درخواست های غیرفعال",
      date: 30,
      count: 28383384,
      Icon: Deactive,
      color: "#6C6C6C",
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-4">
        {info.map((item) => (
          <div className="w-1/4" key={item.color}>
            <InfoCard {...item} />
          </div>
        ))}
      </div>
      {/* ////////////////as inja  */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer border border-weeny bg-weeny p-4 text-center font-bold text-white hover:bg-white hover:text-weeny"
      >
        {"Click me pls"}
      </div>
      <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TestModal />
      </Modal>
    </div>
  );
};

export default Dashboard;
