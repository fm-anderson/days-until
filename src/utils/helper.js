export async function getCurrentDate() {
  try {
    const response = await fetch(import.meta.env.LOCATION_URL);
    if (!response.ok) {
      throw new Error("Error fetching user's location");
    }
    const data = await response.json();
    return data.datetime;
  } catch (error) {
    console.error("Error fetching the current date:", error);
    return null;
  }
}

export function daysUntil(currentDate, targetDate) {
  const now = new Date(currentDate);
  const target = new Date(targetDate);
  const timeDifference = target - now;
  const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return days;
}

export function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}
