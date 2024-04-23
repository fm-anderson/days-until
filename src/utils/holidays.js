import christmasImg from "../images/christmas.jpg";
import thanksgivingImg from "../images/thanksgiving.jpg";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function getNextOccurrenceDate(month, day) {
  let date = new Date(currentYear, month, day);
  if (date <= currentDate) {
    date.setFullYear(currentYear + 1);
  }
  return date;
}

export const holidays = [
  {
    key: "new-years",
    name: "New Year's Day",
    global: true,
    countryCode: null,
    fixed: true,
    date: getNextOccurrenceDate(0, 1),
  },
  {
    key: "mlk-day",
    name: "Martin Luther King, Jr. Day",
    global: false,
    countryCode: "US",
    fixed: false,
    date: getNextOccurrenceDate(0, 15),
  },
  {
    key: "presidents-day",
    name: "Presidents Day",
    global: false,
    countryCode: "US",
    fixed: false,
    date: getNextOccurrenceDate(1, 19),
  },
  {
    key: "memorial-day",
    name: "Memorial Day",
    global: false,
    countryCode: "US",
    fixed: false,
    date: getNextOccurrenceDate(4, 27),
  },
  {
    key: "juneteenth",
    name: "Juneteenth National Independence Day",
    global: false,
    countryCode: "US",
    fixed: false,
    date: getNextOccurrenceDate(5, 19),
  },
  {
    key: "independence-day",
    name: "Independence Day",
    global: false,
    countryCode: "US",
    fixed: false,
    date: getNextOccurrenceDate(6, 4),
  },
  {
    key: "labor-day",
    name: "Labor Day",
    global: false,
    countryCode: "US",
    fixed: false,
    date: getNextOccurrenceDate(8, 2),
  },
  {
    key: "columbus-day",
    name: "Columbus Day",
    global: false,
    countryCode: "US",
    fixed: false,
    date: getNextOccurrenceDate(9, 14),
  },
  {
    key: "indigenous-peoples-day",
    name: "Indigenous Peoples' Day",
    global: false,
    countryCode: "US",
    fixed: false,
    date: getNextOccurrenceDate(9, 14),
  },
  {
    key: "veterans-day",
    name: "Veterans Day",
    global: false,
    countryCode: "US",
    fixed: false,
    date: getNextOccurrenceDate(10, 11),
  },
  {
    key: "thanksgiving",
    name: "Thanksgiving Day",
    global: false,
    countryCode: "US",
    fixed: false,
    date: getNextOccurrenceDate(10, 28),
  },
  {
    key: "christmas",
    name: "Christmas Day",
    global: true,
    countryCode: null,
    fixed: false,
    date: getNextOccurrenceDate(11, 25),
  },
];
