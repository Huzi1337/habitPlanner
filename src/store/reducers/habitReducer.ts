import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HabitInitialState, IResponsibility } from "../../types/reducers";
import dayjs from "dayjs";
import getCurrentActivity from "../../utils/getCurrentActivity";
import sortActivities from "../../utils/sortActivities";

const INITIAL_STATE: HabitInitialState = {
  current: 0,
  habits: [
    {
      id: 0,
      tag: "Family",
      title: "Read my daughter a bedtime story",
      date: dayjs().toISOString(),
      isCheckedOff: false,
    },
    {
      id: 1,
      tag: "Family",
      title: "Watch a movie",
      date: dayjs().subtract(5, "hour").toISOString(),
      isCheckedOff: false,
    },
    {
      id: 2,
      tag: "Business",
      title: "Do market research",
      date: dayjs().subtract(3, "hour").toISOString(),
      isCheckedOff: false,
    },
    {
      id: 3,
      tag: "Sport",
      title: "Work out",
      date: dayjs().add(10, "minute").toISOString(),
      isCheckedOff: false,
    },
    {
      id: 4,
      tag: "Business",
      title: "Meet with partners",
      date: dayjs().add(2, "hour").toISOString(),
      isCheckedOff: false,
    },
    {
      id: 5,
      tag: "Medical",
      title: "Check blood pressure",
      date: dayjs().add(4, "hour").toISOString(),
      isCheckedOff: false,
    },
  ],
};

const habitSlice = createSlice({
  name: "habit",
  initialState: INITIAL_STATE,
  reducers: {
    setActiveHabit(state) {
      state.current = (state.habits as IResponsibility[]).reduce(
        (activeHabit, habit) => getCurrentActivity(activeHabit, habit)
      ).id;
      state.habits.sort((a, b) => sortActivities(a, b, state.current));
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
