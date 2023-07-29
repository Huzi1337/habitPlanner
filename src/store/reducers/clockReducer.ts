import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const clockSlice = createSlice({
  name: "clock",
  initialState: dayjs().toISOString(),
  reducers: {
    setClock(state, action: PayloadAction<string>) {
      state = action.payload;
      return state;
    },
  },
});

export const { setClock } = clockSlice.actions;

export default clockSlice.reducer;
