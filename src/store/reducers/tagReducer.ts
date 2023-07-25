import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = [
  "Family",
  "Sport",
  "Business",
  "House Duties",
  "Medical",
];

const tagSlice = createSlice({
  name: "tag",
  initialState: INITIAL_STATE,
  reducers: {
    addTag(state, action: PayloadAction<string>) {
      state = [...state, action.payload];
      return state;
    },
  },
});

export const { addTag } = tagSlice.actions;

export default tagSlice.reducer;
