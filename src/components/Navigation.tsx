import { NavLink, useLocation } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
  const { pathname } = useLocation();
  const rootPath = pathname.split("/")[1];
  console.log(pathname.split("/"));
  return (
    <nav className={`navigation__container`}>
      <NavLink
        to={"/home"}
        className={
          rootPath === "home" ? "navigation active" : "navigation inactive"
        }
      >
        <img
          src={`/icons/home${rootPath === "home" ? "Active" : ""}.svg`}
        ></img>
        <h4>HOME</h4>
      </NavLink>
      <NavLink
        to={"/journal"}
        className={
          rootPath === "journal" ? "navigation active" : "navigation inactive"
        }
      >
        <img
          src={`/icons/journal${rootPath === "journal" ? "Active" : ""}.svg`}
        ></img>
        <h4>JOURNAL</h4>
      </NavLink>
      <div className="navigation">
        <img src="/icons/explore.svg"></img>
        <h4>EXPLORE</h4>
      </div>
      <div className="navigation">
        <img src="/icons/me.svg"></img>
        <h4>ME</h4>
      </div>
    </nav>
  );
};

export default Navigation;
