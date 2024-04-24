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

export function getNextSeason(currentDate, seasonsArray) {
  if (!(currentDate instanceof Date)) {
    currentDate = new Date(currentDate);
  }

  const upcomingSeasons = [];

  for (const season of seasonsArray) {
    for (const year in season.dates) {
      if (season.dates[year] > currentDate) {
        upcomingSeasons.push({
          key: season.key,
          name: season.name,
          image: season.image,
          date: season.dates[year],
          year: year,
        });
      }
    }
  }

  upcomingSeasons.sort((a, b) => a.date - b.date);

  return upcomingSeasons.length > 0 ? upcomingSeasons[0] : null;
}

export const getCountriesList = (holidays) => {
  const countryCodes = new Set();
  holidays.forEach((holiday) => {
    if (holiday.countryCode && holiday.countryCode !== "global") {
      countryCodes.add(holiday.countryCode);
    }
  });
  return Array.from(countryCodes);
};

export async function fetchCountryName(countryCodes) {
  try {
    const response = await fetch(
      `${import.meta.env.GET_COUNTRY}${countryCodes}`,
    ).then((res) => res.json());
    return response[0].name.common;
  } catch (error) {
    console.error(
      "Failed to fetch country name for code:",
      countryCodes,
      error,
    );
    return countryCodes;
  }
}

export async function fetchCountryNamesFromCodes(countryCodes) {
  const filteredCountryCodes = countryCodes.filter((code) => code !== "global");

  const countryData = await Promise.all(
    filteredCountryCodes.map(async (code) => {
      const name = await fetchCountryName(code);
      return { code, name };
    }),
  );

  return countryData;
}
