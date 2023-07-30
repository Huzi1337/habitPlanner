import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask, TaskInitialState } from "../../types/reducers";
import dayjs from "dayjs";
import isSameorBefore from "dayjs/plugin/isSameOrBefore";
import getCurrentActivity from "../../utils/getCurrentActivity";
dayjs.extend(isSameorBefore);

const INITIAL_STATE: TaskInitialState = {
  current: 0,
  tasks: [
    {
      id: 0,
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
      time: "10:30",
      date: dayjs().toISOString(),
      isCheckedOff: false,
    },
    {
      id: 1,
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
      time: "10:30",
      date: dayjs().add(1, "minute").toISOString(),
      isCheckedOff: false,
    },
    {
      id: 2,
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
      time: "10:30",
      date: dayjs().add(2, "minute").toISOString(),
      isCheckedOff: false,
    },
    {
      id: 3,
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
      time: "10:30",
      date: dayjs().subtract(10, "minute").toISOString(),
      isCheckedOff: false,
    },
    {
      id: 4,
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
      time: "10:30",
      date: dayjs().add(1, "hour").toISOString(),
      isCheckedOff: false,
    },
    {
      id: 5,
      tag: "Family",
      title: "Jimmy's wedding",
      note: "Don't forget the GIFT!",
      time: "10:30",
      date: dayjs().add(2, "hour").toISOString(),
      isCheckedOff: false,
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState: INITIAL_STATE,
  reducers: {
    addTask(state, action: PayloadAction<ITask>) {
      state.tasks = [...state.tasks, action.payload];
      console.log(JSON.stringify(state.tasks));
      return state;
    },
    setActiveTask(state) {
      state.current = (state.tasks as ITask[]).reduce(
        (activeTask, task) => getCurrentActivity(activeTask, task) as ITask
      ).id;
      return state;
    },
  },
});

export const { addTask, setActiveTask } = taskSlice.actions;

export default taskSlice.reducer;
