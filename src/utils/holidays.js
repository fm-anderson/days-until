import christmasImg from "../images/christmas.jpg";
import thanksgivingImg from "../images/thanksgiving.jpg";

export const holidays = [
  {
    key: "christmas",
    name: "Christmas Day",
    global: true,
    countryCode: null,
    fixed: false,
    date: new Date(new Date().getFullYear(), 11, 25),
    image: christmasImg,
  },
  {
    key: "thanksgiving",
    name: "Thanksgiving Day",
    global: false,
    countryCode: "US",
    fixed: false,
    date: new Date(new Date().getFullYear(), 10, 28),
    image: thanksgivingImg,
  },
];
