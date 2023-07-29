import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask, TaskInitialState } from "../../types/reducers";
import dayjs from "dayjs";

const INITIAL_STATE: TaskInitialState = {
  tasks: [
    {
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
      time: "10:30",
      date: dayjs().toISOString(),
    },
    {
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
      time: "10:30",
      date: dayjs().toISOString(),
    },
    {
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
      time: "10:30",
      date: dayjs().toISOString(),
    },
    {
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
      time: "10:30",
      date: dayjs().toISOString(),
    },
    {
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
      time: "10:30",
      date: dayjs()
        .set("date", dayjs().get("date") + 1)
        .toISOString(),
    },
    {
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
      time: "10:30",
      date: dayjs()
        .set("date", dayjs().get("date") - 1)
        .toISOString(),
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState: INITIAL_STATE,
  reducers: {
    addTask(state, action: PayloadAction<ITask>) {
      state.tasks = [...state.tasks, action.payload];
      console.log("Adding a task", state.tasks);
      return state;
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
