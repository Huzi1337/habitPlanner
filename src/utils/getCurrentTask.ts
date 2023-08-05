import dayjs from "dayjs";
import { ITask } from "../types/reducers";

const getCurrentTask = (activeTask: ITask, task: ITask) => {
  const taskDate = dayjs(task.date);
  const activeTaskDate = dayjs(activeTask.date);
  const now = dayjs();
  if (
    taskDate.isSameOrBefore(now, "minute") &&
    taskDate.isAfter(activeTaskDate, "minute")
  )
    return task;
  return activeTask;
};

export default getCurrentTask;
