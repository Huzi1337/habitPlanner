import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./taskReducer";
import habitReducer from "./habitReducer";
import tagReducer from "./tagReducer";

const rootReducer = combineReducers({
  task: taskReducer,
  habit: habitReducer,
  tag: tagReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
