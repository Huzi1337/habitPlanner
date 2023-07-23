import dayjs from "dayjs";
import ScrollContainer from "react-indiana-drag-scroll";

import "./Home.scss";
import Task from "../Task";

const Home = () => {
  return (
    <>
      <div className="home__headerContainer">
        <div className="home__userContainer">
          <img alt="User Avatar"></img>
          <h3>Hi, Margot</h3>
        </div>
      </div>
      <h2>Let's plan together</h2>
      <h4>{dayjs().format("ddd DD/MM/YYYY")}</h4>
      <h3>Today tasks:</h3>
      <ScrollContainer>
        <Task
          tag="BUSINESS"
          note="Don't forget to take notes!"
          title="Big meeting"
        ></Task>
      </ScrollContainer>
    </>
  );
};

export default Home;
