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
  path = urlMonth;
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
  for (let i = firstDayIndex; i > 0; i--){
    days += `<div class = "prev-date">${prevLastDay - i + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++){
    
    if (date.getMonth() === new Date().getMonth() && i === new Date().getDate()) {
      days += `<div class = "today">${i}</div>`;
    }
    else days += `<div>${i}</div>`;
  }
  alert(firstDayIndex);

  for (let j = 1; j <= nextDays; j++){
    days += `<div class = "next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

  

}

document.querySelector('.prev').addEventListener('click', () => {
  let prevMonth = date.getMonth() - 1;
  date.setMonth(prevMonth);
  path = months[prevMonth];
  if(prevMonth > 11) {
    prevMonth += 12;
  }
  removeCurrentStickers(); // remove stickers on current page
  renderCalendar();
  getSavedStickers(); // get stickers on prev page
  removeAllBullets();
  addOtherBulletsOnStart();
});


document.querySelector('.next').addEventListener('click', () => {
  let nextMonth = date.getMonth() + 1;
  date.setMonth(nextMonth);
  path = months[nextMonth];
  if(nextMonth > 11) {
    nextMonth -= 12;
  }
  removeCurrentStickers(); // remove stickers on current page
  renderCalendar();
  getSavedStickers(); // get stickers on prev page
  removeAllBullets();
  addOtherBulletsOnStart();
});

renderCalendar();

document.getElementById("remider-add").addEventListener('click', () => {
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
  dropDown.id = "remider" + endingNumber;
  list.appendChild(dropDown);
  saveBulletToLC(dropDown);
  //console.log(dropDown);
});

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

