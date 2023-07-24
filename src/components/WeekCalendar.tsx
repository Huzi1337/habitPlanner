import dayjs from "dayjs";
import { useState } from "react";
import showXdays from "../utils/showXdays";

import "./WeekCalendar.scss";

const WeekCalendar = () => {
  console.log(showXdays(dayjs(), 7));
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [visibleDays, setVisibleDays] = useState(showXdays(dayjs(), 7));
  console.log("visible days", visibleDays);
  const nextDateHandler = () => {
    return setVisibleDays((previous) => {
      console.log("lastPrevious", [previous[previous.length - 1]]);
      return [
        ...previous.slice(1),
        dayjs().set("date", previous[previous.length - 1].get("date") + 1),
      ];
    });
  };

  const previousDateHandler = () => {
    return setVisibleDays((previous) => [
      dayjs().set("date", previous[0].get("date") + -1),
      ...previous.slice(0, -1),
    ]);
  };

  const daySelectHandler = (day: dayjs.Dayjs) => setSelectedDay(day);
  return (
    <div className="weekCalendar__wrapper">
      <button
        onClick={previousDateHandler}
        className="weekCalendar__backBtn"
      ></button>
      {visibleDays.map((day, key) => (
        <button
          key={key}
          onClick={() => daySelectHandler(day)}
          className={`weekCalendar__day ${
            selectedDay.isSame(day, "date") ? "active" : ""
          }`}
        >
          <h4>{day.format("dd")}</h4>
          <h3>{day.get("date")}</h3>
        </button>
      ))}
      <button
        onClick={nextDateHandler}
        className="weekCalendar__nextBtn"
      ></button>
    </div>
  );
};

export default WeekCalendar;
