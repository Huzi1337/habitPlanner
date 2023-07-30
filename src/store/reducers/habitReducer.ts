import { createSlice } from "@reduxjs/toolkit";
import { HabitInitialState, IResponsibility } from "../../types/reducers";
import dayjs from "dayjs";
import getCurrentActivity from "../../utils/getCurrentActivity";

const INITIAL_STATE: HabitInitialState = {
  current: 0,
  habits: [
    {
      id: 0,
      tag: "Family",
      title: "Read my daughter a bedtime story",
      date: dayjs().toISOString(),
    },
    {
      id: 1,
      tag: "Family",
      title: "Watch a movie",
      date: dayjs().subtract(5, "hour").toISOString(),
    },
    {
      id: 2,
      tag: "Business",
      title: "Do market research",
      date: dayjs().subtract(3, "hour").toISOString(),
    },
    {
      id: 3,
      tag: "Sport",
      title: "Work out",
      date: dayjs().add(10, "minute").toISOString(),
    },
    {
      id: 4,
      tag: "Business",
      title: "Meet with partners",
      date: dayjs().add(2, "hour").toISOString(),
    },
    {
      id: 5,
      tag: "Medical",
      title: "Check blood pressure",
      date: dayjs().add(4, "hour").toISOString(),
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
      return state;
    },
  },
});

export default habitSlice.reducer;
