import dayjs from "dayjs";
import WeekCalendar from "../WeekCalendar";
import { useState } from "react";

import "./Journal.scss";
import Task from "../Task";
import Button from "../Button";
import { RootState } from "../../store/reducers/rootReducer";
import { useSelector } from "react-redux";
import ScrollContainer from "react-indiana-drag-scroll";
import { useNavigate } from "react-router-dom";

const Journal = () => {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const [selectedSection, setSelectedSection] = useState<"tasks" | "habits">(
    "tasks"
  );
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const navigate = useNavigate();

  const daySelectHandler = (day: dayjs.Dayjs) => setSelectedDay(day);

  const selectSectionHandler = (section: "habits" | "tasks") =>
    setSelectedSection(section);

  console.log("Tasks", tasks);

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
        <button
          onClick={() => selectSectionHandler("tasks")}
          className={selectedSection === "tasks" ? "active" : "inactive"}
        >
          <h3>Task</h3>
        </button>
        <button
          className={selectedSection === "habits" ? "active" : "inactive"}
          onClick={() => selectSectionHandler("habits")}
        >
          <h3>Habit</h3>
        </button>
      </div>
      <ScrollContainer className="journal__itemContainer">
        {tasks
          .filter(
            ({ date }) =>
              dayjs(date).isValid() && dayjs(date).isSame(selectedDay, "date")
          )
          .map(({ tag, note, time, title }, key) => (
            <Task
              tag={tag}
              title={title}
              key={key}
              note={note}
              time={time}
              wide={true}
            ></Task>
          ))}
      </ScrollContainer>
      <Button
        variant="add"
        onClick={() => {
          navigate(`/journal/addNew/${selectedSection}`);
        }}
      ></Button>
    </>
  );
};

export default Journal;
