import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const RootLayout = () => {
  return (
    <>
      <Outlet></Outlet>
      <Navigation></Navigation>
    </>
  );
};

export default RootLayout;
