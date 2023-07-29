import dayjs from "dayjs";
import "./MobileTop.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";

const MobileTop = () => {
  const time = useSelector((state: RootState) => state.clock);

  return (
    <div className="mobileTop__container">
      <span className="mobileTop__time">{dayjs(time).format("HH:mm")}</span>
      <img src="/icons/service.svg"></img>
      <img src="/icons/battery.svg"></img>
      <img src="/icons/wifi.svg"></img>
    </div>
  );
};

export default MobileTop;
