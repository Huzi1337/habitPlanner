import dayjs from "dayjs";
import { IResponsibility, ITask } from "../types/reducers";

const getCurrentActivity = (
  activeTask: ITask | IResponsibility,
  task: ITask | IResponsibility
) => {
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

export default getCurrentActivity;
