export function daysUntil(dateFromAPI, targetDate) {
  const now = new Date(dateFromAPI);
  const target = new Date(targetDate);
  const timeDifference = target - now;
  const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return days;
}
