import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";

const RootLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      {/* <div className="topInformation"></div> */}
      <Outlet></Outlet>
      {pathname !== "/" && <Navigation></Navigation>}
    </>
  );
};

export default RootLayout;
