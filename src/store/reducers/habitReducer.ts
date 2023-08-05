import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HabitInitialState, IHabit, ValidTime } from "../../types/reducers";
import dayjs from "dayjs";
import getCurrentHabit from "../../utils/getCurrentHabit";
import sortHabits from "../../utils/sortHabits";

const INITIAL_STATE: HabitInitialState = {
  current: 0,
  habits: [
    {
      id: 0,
      tag: "Family",
      title: "Read my daughter a bedtime story",
      dayOfTheWeek: dayjs().get("day"),
      time: dayjs().format("HH:mm") as ValidTime,
      isCheckedOff: false,
    },
    {
      id: 1,
      tag: "Family",
      title: "Watch a movie",
      dayOfTheWeek: dayjs().get("day"),

      time: dayjs().subtract(5, "hour").format("HH:mm") as ValidTime,
      isCheckedOff: false,
    },
    {
      id: 2,
      tag: "Business",
      title: "Do market research",
      dayOfTheWeek: dayjs().get("day"),

      time: dayjs().subtract(3, "hour").format("HH:mm") as ValidTime,
      isCheckedOff: false,
    },
    {
      id: 3,
      tag: "Sport",
      title: "Work out",
      dayOfTheWeek: dayjs().get("day"),

      time: dayjs().add(10, "minute").format("HH:mm") as ValidTime,
      isCheckedOff: false,
    },
    {
      id: 4,
      tag: "Business",
      title: "Meet with partners",
      dayOfTheWeek: dayjs().get("day"),

      time: dayjs().add(2, "hour").format("HH:mm") as ValidTime,
      isCheckedOff: false,
    },
    {
      id: 5,
      tag: "Medical",
      title: "Check blood pressure",
      dayOfTheWeek: dayjs().get("day"),

      time: dayjs().add(4, "hour").format("HH:mm") as ValidTime,
      isCheckedOff: false,
    },
  ],
};

const habitSlice = createSlice({
  name: "habit",
  initialState: INITIAL_STATE,
  reducers: {
    setActiveHabit(state) {
      state.current = (state.habits as IHabit[]).reduce((activeHabit, habit) =>
        getCurrentHabit(activeHabit, habit)
      ).id;
      state.habits.sort((a, b) => sortHabits(a, b, state.current));
      return state;
    },
    checkOffHabit(state, action: PayloadAction<number>) {
      const habitId = state.habits.findIndex(({ id }) => id === action.payload);
      state.habits[habitId].isCheckedOff = !state.habits[habitId].isCheckedOff;
      return state;
    },
  },
});

export const { setActiveHabit, checkOffHabit } = habitSlice.actions;

export default habitSlice.reducer;
