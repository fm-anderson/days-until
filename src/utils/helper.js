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

export function daysUntil(currentDate, eventDate) {
  let yearAdjustment = 0;
  if (eventDate < currentDate) {
    yearAdjustment = 1;
  }
  const nextEventDate = new Date(eventDate.getTime());
  nextEventDate.setFullYear(eventDate.getFullYear() + yearAdjustment);

  const msPerDay = 24 * 60 * 60 * 1000;
  const timeDiff = nextEventDate - currentDate;
  const daysDiff = Math.ceil(timeDiff / msPerDay);
  return daysDiff;
}

export function formatKey(key) {
  if (!key) return "";

  const words = key.split("-");
  const formattedName = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedName;
}

export function formatDate(date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return formatter.format(date);
}
