/**
 * Update colors based on current color scheme
 */
window.addEventListener('load', () => {
  const color1 = localStorage.getItem("color1");
  const color2 = localStorage.getItem("color2");
  const color3 = localStorage.getItem("color3");
  const color4 = localStorage.getItem("color4");

  document.documentElement.style.setProperty('--first-color', color1);
  document.documentElement.style.setProperty('--second-color', color2);
  document.documentElement.style.setProperty('--third-color', color3);
  document.documentElement.style.setProperty('--fourth-color', color4);
});

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
  let today = new Date();
  let startWeekOne = new Date();
  let endWeekOne = new Date();
  startWeekOne.setDate(today.getDate() - (today.getDay() + 6) % 7);
  endWeekOne.setDate(today.getDate() + (6 - (today.getDay() + 6) % 7));
  return months[startWeekOne.getMonth()] + " " + startWeekOne.getDate() + " - " 
    + months[endWeekOne.getMonth()] + " " + endWeekOne.getDate();
}

/**
 * Get the dates for the previous week to display on the index as 
 * the daily log
 */
function getWeekTwo() {
  let today = new Date();
  let startWeekTwo = new Date();
  let endWeekTwo = new Date();
  startWeekTwo.setDate((today.getDate() - (today.getDay() + 6) % 7) - 7);
  endWeekTwo.setDate((today.getDate() - (today.getDay() + 6) % 7) - 1);
  return months[startWeekTwo.getMonth()] + " " + startWeekTwo.getDate() + " - "
    + months[endWeekTwo.getMonth()] + " " + endWeekTwo.getDate();
}

/**
 * Get the last 3 months to display on the index as the monthly
 * log
 */
function getMonths(month) {
  let today = new Date();
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
 */
function getFuture(option) {
  let today = new Date();
  switch(option) {
    case "first":
      return "January - June " + today.getFullYear();
    case "second":
      return "July - December " + (today.getFullYear() - 1);
    default:
      return "N/A";
  }
}

/**
 * Create Event Listeners For Different Links For Hyper Links
 * Will need to change location.href to jump to correct page
 */

var calendarLink = document.getElementById("calendar");
calendarLink.addEventListener('click', () => {
  location.href="index.html";
});

var dailyLink1 = document.getElementById("daily1");
dailyLink1.innerHTML = getWeekTwo();
dailyLink1.addEventListener('click', () => {
  location.href="dailyLog.html";
});

var dailyLink2 = document.getElementById("daily2");
dailyLink2.innerHTML = getWeekOne();
dailyLink2.addEventListener('click', () => {
  location.href="dailyLog.html";
});

var monthlyLink1 = document.getElementById("monthly1");
monthlyLink1.innerHTML = getMonths("one");
monthlyLink1.addEventListener('click', () => {
  location.href="calendar.html";
});

var monthlyLink2 = document.getElementById("monthly2");
monthlyLink2.innerHTML = getMonths("two");
monthlyLink2.addEventListener('click', () => {
  location.href="calendar.html";
});

var monthlyLink3 = document.getElementById("monthly3");
monthlyLink3.innerHTML = getMonths("three");
monthlyLink3.addEventListener('click', () => {
  location.href="calendar.html";
});

var futureLink1 = document.getElementById("future1");
futureLink1.innerHTML = getFuture("first");
futureLink1.addEventListener('click', () => {
  location.href="futureLog.html";
});

var futureLink2 = document.getElementById("future2");
futureLink2.innerHTML = getFuture("second");
futureLink2.addEventListener('click', () => {
  location.href="futureLog.html";
});

var collectionLink1 = document.getElementById('collections1');
collectionLink1.addEventListener('click', () =>{
  location.href="collection.html";
});

