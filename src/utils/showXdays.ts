import dayjs from "dayjs";

const showXdays = (current: dayjs.Dayjs, numberOfDays: number) => {
  const days = [current];
  for (let i = 0; i < Math.floor(numberOfDays / 2); i++) {
    let temp = current;
    days.push(temp.set("date", current.get("date") + i + 1));
    days.unshift(temp.set("date", current.get("date") - i - 1));
  }
  return days;
};

export default showXdays;
