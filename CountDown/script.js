const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2026, 3, 17, 11, 30, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const dayIndex = futureDate.getDay();

const date = futureDate.getDate();
const monthIndex = futureDate.getMonth();

giveaway.textContent = `giveaway ends on ${weekdays[dayIndex]}, ${date} ${months[monthIndex]} ${year}, ${hours}:${minutes}am`;

// Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
// The month as a number between 0 and 11 (January to December).

//future time in miliseconds
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  //   console.log(t);
  // 1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1day = 24hr

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinutes = 60 * 1000;

  //calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  console.log(days);

  //we find how many full days are there = (t%oneDay)
  let hours = Math.floor((t % oneDay) / oneHour);
  console.log(hours);

  //we find how may full hours are there = (t% oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinutes);
  console.log(minutes);

  //we find how may full mins are there = (t%oneMinutes)
  let seconds = Math.floor((t % oneMinutes) / 1000);
  console.log(seconds);

  //set values arrays
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
}
getRemainingTime();
