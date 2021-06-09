/**
 * Update colors based on current color scheme, update week header, 
 * and get stickers when the page loads
 */
 window.addEventListener('load', () => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  getColors(); // retrieve color scheme

  // get week dates from url
  let urlDate = decodeURI(location.hash).substring(1);
  if (urlDate !== "") {
    document.getElementById("datesHeader").innerHTML = `Week of ${urlDate}`;
  }
  // if clicked from nav bar, display current week
  else {
    let curr = new Date;
    let first = curr.getDate() - curr.getDay() + 1;
    let firstDay = new Date(curr.setDate(first));
    let lastDay = new Date(curr.setDate(curr.getDate() + 6));

    let firstFormat = `${monthNames[firstDay.getMonth()]} ${firstDay.getDate()}`;
    let lastFormat = `${monthNames[lastDay.getMonth()]} ${lastDay.getDate()}`;

    urlDate = firstFormat + " - " + lastFormat;
    document.getElementById("datesHeader").innerHTML = `Week of ${urlDate}`;
  }  

  // retrieve stickers
  path = urlDate;
  getCustomStickers();
  getSavedStickers();
  addBulletsOnStart();

  day.innerHTML = "Sunday";
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("sun"));
  document.getElementById("sunCurr").classList.add("current");
  document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0].innerHTML = "Sunday";
});

const daysArr = ["sun","mon","tue","wed","thu","fri","sat","goal","notes"];

daysArr.forEach((elem) => {
  let day = elem+"-add";
  document.getElementById(day).addEventListener('click', () => {
    let oldList = document.getElementById(elem).getElementsByTagName('ul')[0];
    let lastEntryId = oldList.childNodes[oldList.childNodes.length-1].id;
    let item = document.createElement('li');
    item.contentEditable = "true";
    item.innerHTML = "ADD ENTRY";
    item.classList.add('task-list');
    let dropDown = createDropDown();
    let myDropDown = addDropDownImages();
    dropDown.appendChild(item);
    dropDown.appendChild(myDropDown);
    let list = document.getElementById(elem).getElementsByTagName('ul')[0];
    //console.log(oldList);
    if(lastEntryId == null){
      dropDown.id = elem + 1;
      //console.log(dropDown.id);
    }else{
      let number = lastEntryId.match(/(\d+)/);
      //console.log(parseInt(number[0])+1);
      let numberAdded = parseInt(number[0]);
      let newNumberAdded = numberAdded+1;
      dropDown.id = elem + newNumberAdded;
    }
    list.appendChild(dropDown);
    saveToLC(dropDown);
    //console.log(dropDown);
  });
});


window.onclick = function(event) {
  if (!event.target.matches('.dropBtn')) {
    var dropdowns = document.getElementsByClassName("dropDown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        saveToLC(openDropdown.parentElement);
        openDropdown.classList.remove('show');
      }
    }
  }
  
  /*** Show dropdown when bullet is selected ***/

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

  /*** Change bullet icon when one from dropdown is selected ***/

  if(event.target.classList == 'taskImage'){
    changeBulletIcon(event.target, 'task-list');
    saveChangedIcon(event.target);
  }else if(event.target.classList == 'eventImage'){
    changeBulletIcon(event.target, 'event-list');
    saveChangedIcon(event.target);
  }else if(event.target.classList == 'importantImage'){
    changeBulletIcon(event.target, 'important-list');
    saveChangedIcon(event.target);
  }else if(event.target.classList == 'inspirationImage'){
    changeBulletIcon(event.target, 'inspiration-list');
    saveChangedIcon(event.target);
  }else if(event.target.classList == 'noteImage'){
    changeBulletIcon(event.target, 'note-list');
    saveChangedIcon(event.target);
  }else if(event.target.classList == 'checkMarkImage'){
    changeBulletIcon(event.target, 'checkMark-list');
    saveChangedIcon(event.target);
  }else if(event.target.classList == 'deleteImage'){
    deleteBulletPoint(event.target);
    deleteBulletIcon(event.target);
  }else if(event.target.classList == 'saveIconImage'){
    saveChangedIcon(event.target);
  }

  
}

var days = document.getElementsByTagName('h2');

var day = document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0];

/* Function to remove the current day from the daily log section */
function putBack(){
  if (day.innerHTML == "Monday") {
    document.getElementById("monContainer").appendChild(document.getElementById("mon"));
    document.getElementById("monCurr").classList.remove("current");
    day.innerHTML = "";
  }
  else if (day.innerHTML == "Tuesday") {
    document.getElementById("tueContainer").appendChild(document.getElementById("tue"));
    document.getElementById("tueCurr").classList.remove("current");
    day.innerHTML = "";
  }
  else if (day.innerHTML == "Wednesday") {
    document.getElementById("wedContainer").appendChild(document.getElementById("wed"));
    document.getElementById("wedCurr").classList.remove("current");
    day.innerHTML = "";
  }
  else if (day.innerHTML == "Thursday") {
    document.getElementById("thuContainer").appendChild(document.getElementById("thu"));
    document.getElementById("thuCurr").classList.remove("current");
    day.innerHTML = "";
  }
  else if (day.innerHTML == "Friday") {
    document.getElementById("friContainer").appendChild(document.getElementById("fri"));
    document.getElementById("friCurr").classList.remove("current");
    day.innerHTML = "";
  }
  else if (day.innerHTML == "Saturday") {
    document.getElementById("satContainer").appendChild(document.getElementById("sat"));
    document.getElementById("satCurr").classList.remove("current");
    day.innerHTML = "";
  }
  else {
    document.getElementById("sunContainer").appendChild(document.getElementById("sun"));
    document.getElementById("sunCurr").classList.remove("current");
    day.innerHTML = "";
  }
}

/*** Make a day the focus of the main daily log on click ***/

days[1].addEventListener('click', () => {

  putBack();
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("sun"));
  document.getElementById("sunCurr").classList.add("current");
  day.innerHTML = "Sunday";
});

days[1].addEventListener('click', () => {

  putBack();
  day.innerHTML = "Monday";
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("mon"));
  document.getElementById("monCurr").classList.add("current");
  document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0].innerHTML = "Monday";
});

days[2].addEventListener('click', () => {

  putBack();
  day.innerHTML = "Tuesday";
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("tue"));
  document.getElementById("tueCurr").classList.add("current");
  document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0].innerHTML = "Tuesday";
});

days[3].addEventListener('click', () => {

  putBack();
  day.innerHTML = "Wednesday";
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("wed"));
  document.getElementById("wedCurr").classList.add("current");
  document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0].innerHTML = "Wednesday";
});

days[4].addEventListener('click', () => {

  putBack();
  day.innerHTML = "Thursday";
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("thu"));
  document.getElementById("thuCurr").classList.add("current");
  document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0].innerHTML = "Thursday";
});

days[5].addEventListener('click', () => {

  putBack();
  day.innerHTML = "Friday";
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("fri"));
  document.getElementById("friCurr").classList.add("current");
  document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0].innerHTML = "Friday";
});

days[6].addEventListener('click', () => {

  putBack();
  day.innerHTML = "Saturday";
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("sat"));
  document.getElementById("satCurr").classList.add("current");
  document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0].innerHTML = "Saturday";
});

days[0].addEventListener('click', () => {

  putBack();
  day.innerHTML = "Sunday";
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("sun"));
  document.getElementById("sunCurr").classList.add("current");
  document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0].innerHTML = "Sunday";
});