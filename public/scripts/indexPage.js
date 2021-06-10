/**
 * Update colors based on current color scheme
 */
window.addEventListener('load', () => {
  getColors(); // retrieve color scheme
});

let today = new Date();


/* List of months to correspond with index of getMonth */

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

/**
 * Get the dates for the current week to display on the index as 
 * the daily log
 */
function getWeekOne() {
  let startWeekOne = new Date();
  let endWeekOne = new Date();
  startWeekOne.setDate(today.getDate() - (today.getDay() % 7));
  endWeekOne.setDate(today.getDate() + (6 - (today.getDay() % 7)));
  return months[startWeekOne.getMonth()] + " " + startWeekOne.getDate() + " - " 
    + months[endWeekOne.getMonth()] + " " + endWeekOne.getDate();
}

/**
 * Get the dates for the previous week to display on the index as 
 * the daily log
 */
function getWeekTwo() {
  let startWeekTwo = new Date();
  let endWeekTwo = new Date();
  startWeekTwo.setDate(today.getDate() - (today.getDay() % 7) - 7);
  endWeekTwo.setDate((today.getDate() - (today.getDay() % 7) - 1));
  return months[startWeekTwo.getMonth()] + " " + startWeekTwo.getDate() + " - "
    + months[endWeekTwo.getMonth()] + " " + endWeekTwo.getDate();
}

/**
 * Get the last 3 months to display on the index as the monthly
 * log
 * @param { String } month number of month to display
 * @returns the requested month
 */
function getMonths(month) {
  switch(month) {
    case "one":
      return monthOne = months[today.getMonth() - 2];
    case "two":
      return monthTwo = months[today.getMonth() - 1];
    case "three":
      return monthThree = months[today.getMonth()];
    default:
      return "N/A"
  }
}

/**
 * Get the last 2 sets of 6 months to display on the index as
 * the future log
 * @param { String } option choose which six months to display
 * @param { Integer } year year to add to month range
 */
function getFuture(option, year) {
  switch(option) {
    case "jan-jun":
      return "January - June " + year;
    case "jul-dec":
      return "July - December " + year;
    default:
      return "N/A";
  }
}

/*** 
 * Create Event Listeners For Different Links For Hyper Links
 */

var calendarLink = document.getElementById("calendar");
calendarLink.addEventListener('click', () => {
  location.href="index.html";
});

var dailyLink1 = document.getElementById("daily1");
let weekTwoDates = getWeekTwo();
dailyLink1.innerHTML = weekTwoDates;
dailyLink1.addEventListener('click', () => {
  location.href = "dailyLog.html#" + weekTwoDates;
});

var dailyLink2 = document.getElementById("daily2");
let weekOneDates = getWeekOne();
dailyLink2.innerHTML = getWeekOne();
dailyLink2.addEventListener('click', () => {
  location.href="dailyLog.html#" + weekOneDates;
});

var monthlyLink1 = document.getElementById("monthly1");
let monthOneDate = getMonths("one");
monthlyLink1.innerHTML = monthOneDate;
monthlyLink1.addEventListener('click', () => {
  location.href="calendar.html#" + monthOneDate;
});

var monthlyLink2 = document.getElementById("monthly2");
let monthTwoDate = getMonths("two");
monthlyLink2.innerHTML = monthTwoDate;
monthlyLink2.addEventListener('click', () => {
  location.href="calendar.html#" + monthTwoDate;
});

var monthlyLink3 = document.getElementById("monthly3");
let monthThreeDate = getMonths("three");
monthlyLink3.innerHTML = monthThreeDate;
monthlyLink3.addEventListener('click', () => {
  location.href="calendar.html#" + monthThreeDate;
});

/**
 * Get the current and next future logs according to
 * the current month
 */

var futureLink1 = document.getElementById("future1");
var futureLink2 = document.getElementById("future2");
let futureOne, futureTwo;
// for curr month jan - may
if (today.getMonth() >= 0 && today.getMonth() <= 4) {
  futureOne = getFuture("jan-jun", today.getFullYear());
  futureTwo = getFuture("jul-dec", today.getFullYear());
}
// for curr month jun - nov
else if (today.getMonth() >= 5 && today.getMonth() <= 10) {
  futureOne = getFuture("jul-dec", today.getFullYear());
  futureTwo = getFuture("jan-jun", (today.getFullYear() + 1));
}
// for curr month dec
else {
  futureOne = getFuture("jan-jun", (today.getFullYear() + 1));
  futureTwo = getFuture("jul-dec", (today.getFullYear() + 1));
}
futureLink1.innerHTML = futureOne;
futureLink1.addEventListener('click', () => {
  location.href="futureLog.html#" + futureOne;
});

futureLink2.innerHTML = futureTwo;
futureLink2.addEventListener('click', () => {
  location.href="futureLog.html#" + futureTwo;
});

/**
 * Redirect to collections page from index
 */
var collectionLink1 = document.getElementById('collections1');
collectionLink1.addEventListener('click', () =>{
  location.href="collection.html";
});

