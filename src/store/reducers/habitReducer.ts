import { createSlice } from "@reduxjs/toolkit";
import { HabitInitialState } from "../../types/reducers";

const INITIAL_STATE: HabitInitialState = {
  habits: [
    {
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
    },
    {
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
    },
    {
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
    },
  ],
};

const habitSlice = createSlice({
  name: "habit",
  initialState: INITIAL_STATE,
  reducers: {},
});

export default habitSlice.reducer;
