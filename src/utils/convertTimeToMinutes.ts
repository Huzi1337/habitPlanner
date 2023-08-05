import { ValidTime } from "../types/reducers";

const convertTimeToMinutes = (time: ValidTime) => {
  const [hours, minutes] = time.split(":");

  return +hours * 60 + +minutes;
};

export default convertTimeToMinutes;
