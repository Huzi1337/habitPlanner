import dayjs from "dayjs";
import ScrollContainer from "react-indiana-drag-scroll";

import Task from "../Task";

import "./Home.scss";
import "react-indiana-drag-scroll/dist/style.css";
import Button from "../Button";
const Home = () => {
  return (
    <>
      <div className="home__tagSelection">
        <button>Family</button>
        <button>Sport</button>
        <button>Business</button>
        <button>House Duties</button>

        <button>Medical</button>
      </div>
      <div className="home__headerContainer">
        <div className="home__userContainer">
          <img src="/margotrobbie.jpg" alt="User Avatar"></img>
          <h3>Hi, Margot</h3>
        </div>
        <button></button>
      </div>
      <h2 className="home__h2">Let's plan together</h2>
      <h4 className="home__h4">{dayjs().format("ddd DD/MM/YYYY")}</h4>
      <h3 className="home__h3">Today tasks:</h3>
      <ScrollContainer className="home__todayTaskContainer">
        <Task
          tag="BUSINESS"
          note="Don't forget to take notes!"
          title="Big meeting"
          time={"10:30"}
        ></Task>
        <Task
          tag="BUSINESS"
          note="Don't forget to take notes!"
          title="Big meetingasdasdasdasdasdasdasdasdas"
          time={"10:30"}
        ></Task>
      </ScrollContainer>
      <h3 className="home__h3">Habits:</h3>
      <div className="home__habitContainer">
        <Task tag="BEAUTY" title="Skin care routine"></Task>
        <Task tag="BEAUTY" title="Meditation"></Task>
        <Task tag="BEAUTY" title="Drink water"></Task>
        <Task tag="BEAUTY" title="Inject gold"></Task>
        <Task tag="BEAUTY" title="Become monkey"></Task>
        <Task tag="BEAUTY" title="Drink water"></Task>
      </div>
      <Button variant="add" onClick={() => {}}></Button>
    </>
  );
};

export default Home;
