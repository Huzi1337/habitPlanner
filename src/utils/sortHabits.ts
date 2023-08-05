import dayjs from "dayjs";
import { IHabit, ValidTime } from "../types/reducers";
import convertTimeToMinutes from "./convertTimeToMinutes";

const sortHabits = (a: IHabit, b: IHabit, currentActive: number) => {
  if (a.id === currentActive) {
    return -1;
  } else if (b.id === currentActive) {
    return 1;
  }

  const timeA = convertTimeToMinutes(a.time);
  const timeB = convertTimeToMinutes(b.time);
  const now = convertTimeToMinutes(dayjs().format("HH:mm") as ValidTime);

  if (timeA < now || timeA == now) {
    return 1;
  } else if (timeB < now || timeB === now) {
    return -1;
  } else {
    return timeA - timeB;
  }
};

export default sortHabits;
