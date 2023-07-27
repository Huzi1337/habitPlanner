import { useNavigate } from "react-router-dom";
import "./Landing.scss";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="landing__wrapper">
      <div className="landing__topDecoration">
        <h2 className="landing__pitch">
          Fulfill your duties, create habits, optimize the pace of your life.{" "}
        </h2>
        <img src="/ornamentTop.svg"></img>
        <img
          className="landing__topDecoration__star"
          src="starUpRight.svg"
        ></img>
      </div>
      <h1 className="landing__punchLine">It's easy with Planeo!</h1>
      <div className="landing__buttonContainer">
        <img
          className="landing__buttonContainer__topStar"
          src="/starUpLeft.svg"
        ></img>
        <img
          className="landing__buttonContainer__botStar"
          src="/starDownRight.svg"
        ></img>
        <button
          onClick={() => navigate("/home")}
          className="landing__startButton"
        >
          Get Started
        </button>
        <button className="landing__demoButton disabled">Try demo</button>
      </div>
    </div>
  );
};

export default Landing;
