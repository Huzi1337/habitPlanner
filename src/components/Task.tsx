import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import "./Task.scss";
import { RootState } from "../store/reducers/rootReducer";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { checkOffTask } from "../store/reducers/taskReducer";
import { Tooltip } from "@mantine/core";
import { checkOffHabit } from "../store/reducers/habitReducer";
import { ValidTime } from "../types/reducers";
import convertTimeToMinutes from "../utils/convertTimeToMinutes";
dayjs.extend(isBetween);

type Props = {
  tag: string;
  title: string;
  date?: string | null;
  note?: string | null;
  time?: ValidTime;
  id: number;
  current: number;
  wide?: boolean | undefined;
  isCheckedOff: boolean;
  displayTime?: boolean;
  variant: "task" | "habit";
};

const Task = ({
  variant,
  tag,
  note = null,
  title,
  date = null,
  id,
  current,
  wide,
  displayTime = true,
  isCheckedOff,
  time,
}: Props) => {
  const currentTime = useSelector((state: RootState) => state.clock);
  const dispatch = useDispatch();
  const taskCheckOffHandler = () => {
    if (variant === "task") dispatch(checkOffTask(id));
    else if (variant === "habit") dispatch(checkOffHabit(id));
  };

  const color =
    id === current
      ? "greenThumb"
      : (date && dayjs(currentTime).isBefore(date)) ||
        (time &&
          convertTimeToMinutes(dayjs().format("HH:mm") as ValidTime) <
            convertTimeToMinutes(time as ValidTime))
      ? "greenOutline"
      : "default";
  return (
    <Card wide={wide} variant={color}>
      <div className="task__row">
        <h4>{tag}</h4>
        {color === "default" && (
          <Tooltip
            label={
              isCheckedOff
                ? "You confirmed completing this activity."
                : "You have not confirmed completing this activity."
            }
          >
            <button
              onClick={taskCheckOffHandler}
              className={`task__checkOffBtn ${
                isCheckedOff ? "done" : "pending"
              }`}
            ></button>
          </Tooltip>
        )}
      </div>

      <div className="task__row">
        <h3 className={`task__title ${variant}`}>{title}</h3>
        {displayTime && <h3>{date ? dayjs(date).format("HH:mm") : time}</h3>}
      </div>
      {note != null && <h4>{note}</h4>}
    </Card>
  );
};

export default Task;
