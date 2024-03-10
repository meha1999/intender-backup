import React from "react";
import Logo from "public/icons/dashboardLogo.svg";
import { TbBellFilled } from "react-icons/tb";
import UserInfo from "./UserInfo";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-primary px-12 py-8">
      <div className="flex items-center gap-16">
        <Logo />
        <TbBellFilled className="text-2xl text-secondary-light" />
      </div>
      <UserInfo />
    </div>
  );
};

export default Header;
