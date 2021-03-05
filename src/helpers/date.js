import moment from "moment";

export const monthHour = (date) => {
  const todayMonth = moment(date);
  return todayMonth.format("HH:mm a | MMMM Do");
};
