import dayjs from "dayjs";
import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import Task from "../Task";

import "./Home.scss";

import Button from "../Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const tags = useSelector((state: RootState) => state.tag);
  const { habits, current: currentHabit } = useSelector(
    (state: RootState) => state.habit
  );
  const { tasks, current: currentTask } = useSelector(
    (state: RootState) => state.task
  );
  const [selectedTag, setSelectedTag] = useState("");
  const navigate = useNavigate();

  const selectTagHandler = (tag: string) =>
    setSelectedTag((prev) => (prev === tag ? "" : tag));
  return (
    <>
      <div className="home__tagSelection">
        {tags.map((tag, index) => (
          <button
            className={selectedTag === tag ? "active" : ""}
            key={index}
            onClick={() => selectTagHandler(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="home__headerContainer">
        <div className="home__userContainer">
          <img src="/avatar.png" alt="User Avatar"></img>
          <h3>Hi, Margot</h3>
        </div>
        <button></button>
      </div>
      <h2 className="home__h2">Let's plan together</h2>
      <h4 className="home__h4">{dayjs().format("ddd DD/MM/YYYY")}</h4>
      <h3 className="home__h3">Today tasks:</h3>
      <ScrollContainer className="home__todayTaskContainer">
        {tasks
          .filter(({ date, tag }) =>
            dayjs(date).isValid() &&
            dayjs(date).isSame(dayjs(), "date") &&
            selectedTag === ""
              ? true
              : selectedTag === tag
          )
          .map(({ tag, note, title, date, id, isCheckedOff }, key) => (
            <Task
              current={currentTask}
              id={id}
              date={date}
              tag={tag}
              title={title}
              key={key}
              note={note}
              wide={true}
              isCheckedOff={isCheckedOff}
            ></Task>
          ))}
      </ScrollContainer>
      <h3 className="home__h3">Habits:</h3>
      <ScrollContainer className="home__habitContainer">
        {habits
          .filter(({ tag }) =>
            selectedTag === "" ? true : selectedTag === tag
          )
          .map(({ tag, title, date, id }, index) => (
            <Task
              current={currentHabit}
              id={id}
              date={date}
              isCheckedOff={false}
              displayTime={false}
              tag={tag}
              title={title}
              key={index}
            ></Task>
          ))}
      </ScrollContainer>
      <Button
        variant="add"
        onClick={() => navigate("/home/addNew/task")}
      ></Button>
    </>
  );
};

export default Home;
