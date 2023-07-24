import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./taskReducer";
import habitReducer from "./habitReducer";

const rootReducer = combineReducers({
  task: taskReducer,
  habit: habitReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
