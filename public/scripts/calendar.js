const date = new Date();
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
 * Update colors based on current color scheme
 */
 window.addEventListener('load', () => {
  // retrieve color scheme
  const color1 = localStorage.getItem("color1");
  const color2 = localStorage.getItem("color2");
  const color3 = localStorage.getItem("color3");
  const color4 = localStorage.getItem("color4");

  document.documentElement.style.setProperty('--first-color', color1);
  document.documentElement.style.setProperty('--second-color', color2);
  document.documentElement.style.setProperty('--third-color', color3);
  document.documentElement.style.setProperty('--fourth-color', color4);

  // if clicked from index page, populate with correct month
  let urlMonth = decodeURI(location.hash).substring(1);
  if (urlMonth !== "") {
    date.setMonth(months.indexOf(urlMonth));
    renderCalendar();
  } else {
    urlMonth = months[date.getMonth()];
  }

  // retrieve stickers
  path = urlMonth;
  getCustomStickers();
  getSavedStickers();
});

const renderCalendar = () => {
  // need to find how many days have to be shown from the prev month
  date.setDate(1);
  const monthDays = document.querySelector(".days");
  // gives the last day of the current month
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  // this will store the index of the week when 1st of that month lies
  const firstDayIndex = date.getDay();
  // this will store the index of the week when last day of that month lies
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  // next month's days
  const nextDays = 7 - lastDayIndex - 1;

  let days = "";
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = new Date().toDateString();

  // display the previous month's last few days
  // i = firstDayIndex-1 because my calendar starts from Monday
  for (let i = firstDayIndex; i > 0; i--){
    days += `<div class = "prev-date">${prevLastDay - i + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++){
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class = today>${i}</div>`;
    }
    else days += `<div>${i}</div>`;
  }

  for (let j = 1; j <= nextDays; j++){
    days += `<div class = "next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

}

document.querySelector('.prev').addEventListener('click', () => {
  const prevMonth = date.getMonth() - 1;
  date.setMonth(prevMonth);
  path = months[prevMonth];
  removeCurrentStickers(); // remove stickers on current page
  renderCalendar();
  getSavedStickers(); // get stickers on prev page
});


document.querySelector('.next').addEventListener('click', () => {
  const nextMonth = date.getMonth() + 1;
  date.setMonth(nextMonth);
  path = months[nextMonth];
  removeCurrentStickers(); // remove stickers on current page
  renderCalendar();
  getSavedStickers(); // get stickers on prev page
});

renderCalendar();

