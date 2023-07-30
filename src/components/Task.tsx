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
  date: string | null;
  note?: string | null;
  id: number;
  current: number;
  wide?: boolean | undefined;
  isCheckedOff: boolean;
  displayTime?: boolean;
};

const Task = ({
  tag,
  note = null,
  title,
  date,
  id,
  current,
  wide,
  isCheckedOff = false,
  displayTime = true,
}: Props) => {
  const currentTime = useSelector((state: RootState) => state.clock);

  console.log(date, dayjs(currentTime).isBefore(date));
  const color =
    id === current
      ? "greenThumb"
      : dayjs(currentTime).isBefore(date)
      ? "greenOutline"
      : "default";
  return (
    <Card wide={wide} variant={color}>
      <h4>{tag}</h4>

      <div className="task__row">
        <h3>{title}</h3>
        {displayTime && <h3>{dayjs(date).format("HH:mm")}</h3>}
      </div>
      {note != null && <h4>{note}</h4>}
    </Card>
  );
};

export default Task;
