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
  const { tasks, current: currentTask } = useSelector(
    (state: RootState) => state.task
  );
  const { habits, current: currentHabit } = useSelector(
    (state: RootState) => state.habit
  );
  const [selectedSection, setSelectedSection] = useState<"tasks" | "habits">(
    "tasks"
  );
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const navigate = useNavigate();

  const daySelectHandler = (day: dayjs.Dayjs) => setSelectedDay(day);

  const selectSectionHandler = (section: "habits" | "tasks") =>
    setSelectedSection(section);

  const addActivityHandler = () => {
    if (selectedSection === "tasks")
      return navigate(`/journal/addNew/${selectedSection}`);
    else return;
  };

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
        {selectedSection === "tasks" &&
          tasks
            .filter(
              ({ date }) =>
                dayjs(date).isValid() && dayjs(date).isSame(selectedDay, "date")
            )
            .map(({ tag, note, title, date, id, isCheckedOff }, key) => (
              <Task
                variant="task"
                id={id}
                isCheckedOff={isCheckedOff}
                current={currentTask}
                date={date}
                tag={tag}
                title={title}
                key={key}
                note={note}
                wide={true}
              ></Task>
            ))}
        {selectedSection === "habits" &&
          habits
            .filter(({ dayOfTheWeek }) => dayjs().get("day") === dayOfTheWeek)
            .map(({ tag, title, time, id, isCheckedOff }, key) => (
              <Task
                variant="habit"
                id={id}
                isCheckedOff={isCheckedOff}
                current={currentHabit}
                time={time}
                tag={tag}
                title={title}
                key={key}
                wide={true}
              ></Task>
            ))}
      </ScrollContainer>
      <Button
        variant={`add ${selectedSection}`}
        onClick={addActivityHandler}
      ></Button>
    </>
  );
};

export default Journal;
