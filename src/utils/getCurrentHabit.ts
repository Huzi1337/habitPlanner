import dayjs from "dayjs";
import { IHabit, ValidTime } from "../types/reducers";
import convertTimeToMinutes from "./convertTimeToMinutes";

const getCurrentHabit = (activeHabit: IHabit, checkedHabit: IHabit) => {
  const activeHabitTime = convertTimeToMinutes(activeHabit.time);
  const checkedHabitTime = convertTimeToMinutes(checkedHabit.time);

  const now = convertTimeToMinutes(dayjs().format("HH:mm") as ValidTime);

  if (checkedHabitTime > activeHabitTime && checkedHabitTime <= now)
    return checkedHabit;
  return activeHabit;
};

export default getCurrentHabit;
