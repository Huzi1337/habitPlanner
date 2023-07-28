import { createSlice } from "@reduxjs/toolkit";
import { HabitInitialState } from "../../types/reducers";

const INITIAL_STATE: HabitInitialState = {
  habits: [
    {
      tag: "Family",
      title: "Read my daugther a bedtime story",
    },
    {
      tag: "Family",
      title: "Watch a movie",
    },
    {
      tag: "Business",
      title: "Do market research",
    },
    {
      tag: "Sport",
      title: "Work out",
    },
    {
      tag: "Business",
      title: "Meet with partners",
    },
    {
      tag: "Medical",
      title: "Check blood pressure",
    },
  ],
};

const habitSlice = createSlice({
  name: "habit",
  initialState: INITIAL_STATE,
  reducers: {},
});

export default habitSlice.reducer;
