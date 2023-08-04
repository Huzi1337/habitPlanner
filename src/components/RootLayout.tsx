import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import MobileTop from "./MobileTop";
import { useEffect, useState } from "react";
import Notification from "./Notification";

const RootLayout = () => {
  const { pathname } = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth >= 457 && <MobileTop></MobileTop>}
      <Notification></Notification>
      <Outlet></Outlet>
      {pathname !== "/" && <Navigation></Navigation>}
    </>
  );
};

export default RootLayout;
