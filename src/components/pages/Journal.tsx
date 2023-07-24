import dayjs from "dayjs";
import WeekCalendar from "../WeekCalendar";
import { useState } from "react";

import "./Journal.scss";
import Task from "../Task";
import Button from "../Button";

const Journal = () => {
  const [selectedDay, setSelectedDay] = useState(dayjs());

  const daySelectHandler = (day: dayjs.Dayjs) => setSelectedDay(day);

  return (
    <>
      <div className="journal__header">
        <h3>{selectedDay.format("MMMM YYYY")}</h3>
        <h3>Edit</h3>
      </div>
      <WeekCalendar
        selectedDay={selectedDay}
        setSelectedDay={daySelectHandler}
      ></WeekCalendar>
      <div className="journal__optionSelect">
        <button>
          <h3>Task</h3>
        </button>
        <button>
          <h3>Habit</h3>
        </button>
      </div>
      <div className="journal__itemContainer">
        <Task
          tag="FAMILY"
          title="Family dinner"
          time="5:30"
          note={"Remember to bring the guitar!!"}
          wide={true}
          variant="active"
        ></Task>
        <Task
          tag="FAMILY"
          title="Family dinner"
          time="5:30"
          note={"Remember to bring the guitar!!"}
          wide={true}
        ></Task>
        <Task
          tag="FAMILY"
          title="Family dinner"
          time="5:30"
          note={"Remember to bring the guitar!!"}
          wide={true}
        ></Task>
        <Task
          tag="FAMILY"
          title="Family dinner"
          time="5:30"
          note={"Remember to bring the guitar!!"}
          wide={true}
        ></Task>
      </div>
      <Button variant="add" onClick={() => {}}></Button>
    </>
  );
};

export default Journal;
