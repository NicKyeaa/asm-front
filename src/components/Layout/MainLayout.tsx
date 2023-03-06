import SideNavbar from "./SideNavbar";
import HeaderMenu from "./HeaderMenu";

const MainLayout = (children: any) => {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <SideNavbar children={children} />
    </>
  );
};

export default MainLayout;
