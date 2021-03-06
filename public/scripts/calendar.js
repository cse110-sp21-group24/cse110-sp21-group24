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
  getColors(); // retrieve color scheme

  // if clicked from index page, populate with correct month
  let urlMonth = decodeURI(location.hash).substring(1);
  if (urlMonth !== "") {
    date.setMonth(months.indexOf(urlMonth));
    renderCalendar();
  } else {
    urlMonth = months[date.getMonth()];
  }

  // retrieve stickers
  path = urlMonth + `${date.getFullYear()}`;
  getCustomStickers();
  getSavedStickers();
  addOtherBulletsOnStart();
});

const renderCalendar = () => {  
  // need to find how many days have to be shown from the prev month
  date.setDate(1);
  const monthDays = document.querySelector(".days");

  // gives the last day of the current month
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  // gives the last day of the previous month
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  // this will store the index of the week when 1st of that month lies
  const firstDayIndex = date.getDay();
  // this will store the index of the week when last day of that month lies
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  // next month's days
  const nextDays = 7 - lastDayIndex - 1;

  let days = "";
  document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " " + date.getFullYear();
  document.querySelector(".date p").innerHTML = "Today: " + new Date().toDateString();

  // display the previous month's last few days
  for (let i = firstDayIndex; i > 0; i--){
    days += `<div class = "prev-date" class = "single-day">${prevLastDay - i + 1}</div>`;
    monthDays.innerHTML = days;
  }

  for (let i = 1; i <= lastDay; i++){
    if (date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth() && i === new Date().getDate()) {
      days += `<div class = "today" class = "single-day">${i}</div>`;
    }
    else days += `<div class = "single-day">${i}</div>`;
    monthDays.innerHTML = days;

  }
  
  for (let j = 1; j <= nextDays; j++){
    days += `<div class = "next-date" class = "single-day">${j}</div>`;
    monthDays.innerHTML = days;
  }
  monthDays.innerHTML = days;
  setDayOnClick();
}


/**
 * Redirect to the correct daily log page if a day is clicked
 */
function setDayOnClick() {
  let allDays = document.querySelectorAll('.single-day');
  for (const day of allDays) {
      day.addEventListener('click', () => {
        location.href="dailyLog.html#" + getWeek(day);
      });
  }
}

/**
 * Get the current week of the day being clicked
 * @param day day currently being clicked
 * @returns { String } week to add to url hash
 */
function getWeek(day) {
  let currDay = parseInt(day.innerHTML);
  let currMonth = document.querySelector('#currMonth').innerHTML;
  currMonth = months.indexOf(currMonth.split(" ")[0]);
  console.log(currMonth);
  let currDate = new Date();
  currDate.setDate(currDay);
  currDate.setMonth(currMonth);

  let firstDay = new Date();
  firstDay.setMonth(currMonth);
  firstDay.setDate(currDate.getDate() - currDate.getDay() % 7);

  let lastDay = new Date();
  lastDay.setMonth(currMonth);
  lastDay.setDate(currDate.getDate() + (6 - currDate.getDay() % 7));

  console.log(months[firstDay.getMonth()] + " " + firstDay.getDate() + " - " 
  + months[lastDay.getMonth()] + " " + lastDay.getDate());

  return months[firstDay.getMonth()] + " " + firstDay.getDate() + " - " 
  + months[lastDay.getMonth()] + " " + lastDay.getDate();
}

/**
 * Change the month when the previous month is clicked
 */

document.querySelector('.prev').addEventListener('click', () => {
  let prevMonth = date.getMonth() - 1;
  date.setMonth(prevMonth);
  path = months[prevMonth];
  if(prevMonth > 11 || prevMonth < 0) {
    prevMonth += 12;
  }
  path = months[prevMonth] + `${date.getFullYear()}`;
  removeCurrentStickers(); // remove stickers on current page
  renderCalendar();
  getSavedStickers(); // get stickers on prev page
  removeAllBullets();
  addOtherBulletsOnStart();
});

/**
 * Change the month when the next month is clicked
 */

document.querySelector('.next').addEventListener('click', () => {
  let nextMonth = date.getMonth() + 1;
  date.setMonth(nextMonth);
  if(nextMonth > 11) {
    nextMonth -= 12;
  }
  path = months[nextMonth] + `${date.getFullYear()}`;
  removeCurrentStickers(); // remove stickers on current page
  renderCalendar();
  getSavedStickers(); // get stickers on prev page
  removeAllBullets();
  addOtherBulletsOnStart();
});

/**
 * Set general calendar format and layout
 */
document.querySelector('.date p').addEventListener('click', () => {
  date.setMonth(new Date().getMonth());
  date.setFullYear(new Date().getFullYear());
  path = months[date.getMonth()] + `${date.getFullYear()}`;
  removeCurrentStickers();
  renderCalendar();
  getSavedStickers();
  removeAllBullets();
  addOtherBulletsOnStart();
});

renderCalendar();

document.getElementById("reminder-add").addEventListener('click', () => {
  let oldList = document.getElementById("reminder").getElementsByTagName('ul')[0];
  let lastEntryId = oldList.childNodes[oldList.childNodes.length-1].id;
  let item = document.createElement('li');
  item.contentEditable = "true";
  item.innerHTML = "ADD ENTRY";
  item.classList.add('task-list');
  let dropDown = createDropDown();
  let myDropDown = addDropDownImages();
  dropDown.appendChild(item);
  dropDown.appendChild(myDropDown);
  let list = document.getElementById("reminder").getElementsByTagName('ul')[0];
  if(lastEntryId == null){
    var endingNumber = 1;
  }else{
    let number = lastEntryId.match(/(\d+)/);
    let numberAdded = parseInt(number[0]);
    var endingNumber = numberAdded + 1;
  }
  dropDown.id = "reminder" + endingNumber;
  list.appendChild(dropDown);
  saveBulletToLC(dropDown);
  //console.log(dropDown);
});

/**
 * Show dropdown when entry is clicked
 */

window.onclick = function(event) {
  if (!event.target.matches('.dropBtn')) {
    var dropdowns = document.getElementsByClassName("dropDown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        saveBulletToLC(openDropdown.parentElement);
        openDropdown.classList.remove('show');
      }
    }
  }
  if(event.target.classList == 'task-list'){
    var dropDown = event.target.parentElement.childNodes[1];
    dropDown.classList.toggle('show');
  }else if(event.target.classList == 'event-list'){
    var dropDown = event.target.parentElement.childNodes[1];
    dropDown.classList.toggle('show');
  }else if(event.target.classList == 'important-list'){
    var dropDown = event.target.parentElement.childNodes[1];
    dropDown.classList.toggle('show');
  }else if(event.target.classList == 'inspiration-list'){
    var dropDown = event.target.parentElement.childNodes[1];
    dropDown.classList.toggle('show');
  }else if(event.target.classList == 'note-list'){
    var dropDown = event.target.parentElement.childNodes[1];
    dropDown.classList.toggle('show');
  }else if(event.target.classList == 'checkMark-list'){
    var dropDown = event.target.parentElement.childNodes[1];
    dropDown.classList.toggle('show');
  }
  if(event.target.classList == 'taskImage'){
    changeBulletIcon(event.target, 'task-list');
    saveBulletChangedIcon(event.target);
  }else if(event.target.classList == 'eventImage'){
    changeBulletIcon(event.target, 'event-list');
    saveBulletChangedIcon(event.target);
  }else if(event.target.classList == 'importantImage'){
    changeBulletIcon(event.target, 'important-list');
    saveBulletChangedIcon(event.target);
  }else if(event.target.classList == 'inspirationImage'){
    changeBulletIcon(event.target, 'inspiration-list');
    saveBulletChangedIcon(event.target);
  }else if(event.target.classList == 'noteImage'){
    changeBulletIcon(event.target, 'note-list');
    saveBulletChangedIcon(event.target);
  }else if(event.target.classList == 'checkMarkImage'){
    changeBulletIcon(event.target, 'checkMark-list');
    saveBulletChangedIcon(event.target);
  }else if(event.target.classList == 'deleteImage'){
    deleteOtherBulletPoint(event.target);
    deleteBulletIcon(event.target);
  }else if(event.target.classList == 'saveIconImage'){
    saveBulletChangedIcon(event.target);
  }
}

