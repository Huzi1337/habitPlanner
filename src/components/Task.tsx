import { useSelector } from "react-redux";
import Card from "./Card";
import "./Task.scss";
import { RootState } from "../store/reducers/rootReducer";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

type Props = {
  tag: string;
  title: string;
  time?: string | null;
  date: string | null;
  note?: string | null;

  wide?: boolean | undefined;
};

const Task = ({
  tag,
  note = null,
  title,
  time = null,
  date,

  wide,
}: Props) => {
  const currentTime = useSelector((state: RootState) => state.clock);
  const completionTime = dayjs(date).set(
    "minute",
    dayjs(date).get("minute") + 30
  );
  const color = dayjs(currentTime).isBetween(date, completionTime)
    ? "greenThumb"
    : dayjs(currentTime).isBefore(date)
    ? "greenOutline"
    : "default";
  return (
    <Card wide={wide} variant={color}>
      <h4>{tag}</h4>

      <div className="task__row">
        <h3>{title}</h3>
        {time != null && <h3>{time}</h3>}
      </div>
      {note != null && <h4>{note}</h4>}
    </Card>
  );
};

export default Task;
