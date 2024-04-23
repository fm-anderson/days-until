import seasonsData from "./db/seasons.json";

const seasons = seasonsData.map((season) => {
  const formattedDates = {};
  for (const year in season.dates) {
    formattedDates[year] = new Date(season.dates[year]);
  }
  return { ...season, dates: formattedDates };
});

export default seasons;
