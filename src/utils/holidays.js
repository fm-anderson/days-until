import holidaysData from "./db/holidays.json";

function getNextOccurrenceDate(month, day) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let date = new Date(currentYear, month, day);
  if (date <= currentDate) {
    date.setFullYear(currentYear + 1);
  }
  return date;
}

const holidays = holidaysData.map((holiday) => ({
  ...holiday,
  date: getNextOccurrenceDate(holiday.month, holiday.day),
}));

export default holidays;
