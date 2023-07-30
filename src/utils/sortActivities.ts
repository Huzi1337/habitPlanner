import dayjs from "dayjs";
import { IResponsibility } from "../types/reducers";

const sortActivities = (
  a: IResponsibility,
  b: IResponsibility,
  currentActive: number
) => {
  if (a.id === currentActive) {
    return -1;
  } else if (b.id === currentActive) {
    return 1;
  }

  const dateA = dayjs(a.date);
  const dateB = dayjs(b.date);
  const now = dayjs();

  if (
    dateA.isBefore(now, "minute") ||
    dateA.isSame(now, "minute") ||
    a.id === currentActive
  ) {
    return 1;
  } else if (dateB.isBefore(now, "minute") || dateB.isSame(now, "minute")) {
    return -1;
  } else {
    return dateA.diff(dateB, "millisecond");
  }
};

export default sortActivities;
