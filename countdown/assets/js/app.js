/* const months = [
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
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// let futureDate = new Date(2020, 3, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
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

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();
 */

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
  "Desember",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Fryday",
  "Saturday",
];
/* 
=============
Current Time
=============
*/
const giveaway = document.querySelector(".giveaway");

const currentDate = new Date();
console.log("currentDate :>> ", currentDate);
/* 
const currentYear = currentDate.getFullYear();
console.log("currentYear :>> ", currentYear);
const currentDay = currentDate.getDate();
console.log("currentDay :>> ", currentDay);
const currentMonth = months[currentDate.getMonth()];
console.log("currentMonth :>> ", currentMonth);
const currentWeekday = weekdays[currentDate.getDay()];
console.log("currentWeekday :>> ", currentWeekday);
const currentHours = currentDate.getHours();
console.log("currentHours :>> ", currentHours);
const currentMinutes = currentDate.getMinutes();
console.log("currentMinutes :>> ", currentMinutes);
const currenSeconds = currentDate.getSeconds();
console.log("currenSeconds :>> ", currenSeconds);
 */
/* 
=============
Future Time (today plus 10 days)
=============
*/

const todayPlusTenDays = new Date();
todayPlusTenDays.setDate(currentDate.getDate() + 10);
console.log("todayPlusTenDays :>> ", todayPlusTenDays);
const throughTenDaysYear = todayPlusTenDays.getFullYear();
console.log("throughTenDaysYear :>> ", throughTenDaysYear);
const throughTenDaysDay = todayPlusTenDays.getDate();
console.log("throughTenDaysDay :>> ", throughTenDaysDay);
const throughTenDaysMonth = todayPlusTenDays.getMonth();
// const throughTenDaysMonth = months[todayPlusTenDays.getMonth()];
console.log(" throughTenDaysMonth :>> ", months[todayPlusTenDays.getMonth()]);
const throughTenDaysWeekday = todayPlusTenDays.getDate();
// const throughTenDaysWeekday = weekdays[todayPlusTenDays.getDate()];
console.log(
  " throughTenDaysWeekday :>> ",
  weekdays[todayPlusTenDays.getDate()]
);

const futureData = new Date(
  throughTenDaysYear,
  throughTenDaysMonth,
  throughTenDaysDay,
  11,
  30,
  0
);

const futureYear = futureData.getFullYear();
console.log("futureYear :>> ", futureYear);
const futureMonth = months[futureData.getMonth()];
console.log("futureMonth :>> ", futureMonth);
const futureWeekday = weekdays[futureData.getDate()];
console.log("futureWeekday :>> ", futureWeekday);
const futureHours = futureData.getHours();
console.log("futureHours :>> ", futureHours);
const futureMinutes = futureData.getMinutes();
console.log("futureMinutes :>> ", futureMinutes);
const futureSeconds = futureData.getSeconds();
console.log("futureSeconds :>> ", futureSeconds);

giveaway.textContent = `Giveaway ends on ${futureWeekday}, ${throughTenDaysDay} ${futureMonth} ${futureYear}, ${futureHours}:${futureMinutes}`;

function countdownStart() {
  const today = Date.now();
  const countdownTime = futureData - today;
  const sec = 1000; // 1000
  const min = 60 * 1000; // 60000
  const hour = 60 * 60 * 1000; // 360000
  const day = 24 * 60 * 60 * 1000; // 86400000

  const getDays = Math.floor(countdownTime / day);
  const getHour = Math.floor((countdownTime % day) / hour);
  const getMinute = Math.floor((countdownTime % hour) / min);
  const getSecond = Math.floor((countdownTime % min) / sec);
  const countdownArray = [getDays, getHour, getMinute, getSecond];
  const countdown = document.querySelectorAll(".deadline-format h4");

  countdown.forEach((el, idx) => {
    el.innerHTML = countdownArray[idx];
  });
}

let init = setInterval(countdownStart, 1000);
