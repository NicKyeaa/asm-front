import React from "react";
import SideNavbar from "./SideNavbar";
import HeaderMenu from "./HeaderMenu";

const MainLayout = () => {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <SideNavbar />
    </>
  );
};

export default MainLayout;
