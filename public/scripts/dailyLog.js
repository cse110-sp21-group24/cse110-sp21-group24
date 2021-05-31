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

  // get the dates of the current week
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  let curr = new Date;
  let first = curr.getDate() - curr.getDay();
  let last = first + 6;
  let firstDay = new Date(curr.setDate(first));
  let lastDay = new Date(curr.setDate(last));

  let firstFormat = `${monthNames[firstDay.getMonth()]} ${firstDay.getDate()}`
  let lastFormat = `${monthNames[lastDay.getMonth()]} ${lastDay.getDate()}`

  document.getElementById("datesHeader").innerHTML = `Week of ${firstFormat} - ${lastFormat}`;

  // retrieve custom stickers
  let results = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
      if (key.startsWith("custom")) {
          results.push(JSON.parse(localStorage.getItem(key)));
      }
  }
  results.forEach(elem => {
    let loadCustom = document.createElement("img");
    loadCustom.id = elem.id
    loadCustom.src = elem.src;
    loadCustom.setAttribute("ondragstart", "drag(event)");
    loadCustom.setAttribute("onmousedown", "deleteSticker(event)");
    loadCustom.height = "80";
    document.getElementById("customBox").appendChild(loadCustom);
  })
  
  // retrieve stickers placmenet
  let stickers = Array.from(document.querySelectorAll("img")).filter(elem => elem.id.startsWith("sticker") || elem.id.startsWith("washi") || elem.id.startsWith("custom"));
  stickers.forEach((elem) => {
    let key = path.concat("/" + elem.id)
    if (localStorage.getItem(`${key}`) !== null) {
      let img = JSON.parse(localStorage.getItem(`${key}`));
      let load = document.createElement("img");
      load.id = img.id;
      load.src = img.src;
      load.setAttribute("ondragstart", "drag(event)");
      load.setAttribute("onmousedown", "deleteSticker(event)");
      load.class = "ui-draggable ui-draggable-handle";
      load.height = "80";
      load.style.position = img.style.position;
      load.style.inset = img.style.inset;
      let parent = "stickerBox";
      if (elem.id.startsWith("washi")) {
        parent = "washiBox";
      } else if (elem.id.startsWith("custom")) {
        parent = "customBox";
      }
      document.getElementById(parent).removeChild(elem);
      document.getElementById("dropBody").appendChild(load);
    }
  })
});

document.getElementById("mon-add").addEventListener('click', () => {
  let item = document.createElement('li');
  item.contentEditable = "true";
  item.innerHTML = "ADD ENTRY";
  item.classList.add('task-list');
  let dropDown = document.createElement('div');
  dropDown.style.width = '215px';
  dropDown.classList.add('dropDown');
  let myDropDown = document.createElement('div');
  myDropDown.classList.add('dropDown-content');
  myDropDown.setAttribute('id','myDropDown');
  myDropDown.style.margin = "0px 0px 0px 10px";
  let taskList = document.createElement('img');
  taskList.src = 'images/taskB.png';
  taskList.className = 'taskImage';
  myDropDown.appendChild(taskList);
  let eventList = document.createElement('img');
  eventList.src = 'images/eventB.png';
  eventList.className = 'eventImage';
  myDropDown.appendChild(eventList);
  let importantList = document.createElement('img');
  importantList.src = 'images/importantB.png';
  importantList.className = 'importantImage';
  myDropDown.appendChild(importantList);
  let inspirationList = document.createElement('img');
  inspirationList.src = 'images/inspirationB.png';
  inspirationList.className = 'inspirationImage';
  myDropDown.appendChild(inspirationList);
  let noteList = document.createElement('img');
  noteList.src = 'images/noteB.png';
  noteList.className = 'noteImage';
  myDropDown.appendChild(noteList);
  let checkMarkList = document.createElement('img');
  checkMarkList.src = 'images/checkMark.png';
  checkMarkList.className = 'checkMarkImage';
  myDropDown.appendChild(checkMarkList);
  let deleteList = document.createElement('img');
  deleteList.src = 'images/trash.png';
  deleteList.className = 'deleteImage';
  myDropDown.appendChild(deleteList);
  dropDown.appendChild(item);
  dropDown.appendChild(myDropDown);
  document.getElementById("mon").getElementsByTagName('ul')[0].appendChild(dropDown);
});

window.onclick = function(event) {
  if (!event.target.matches('.dropBtn')) {
    var dropdowns = document.getElementsByClassName("dropDown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
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
  }else if(event.target.classList == 'eventImage'){
    changeBulletIcon(event.target, 'event-list');
  }else if(event.target.classList == 'importantImage'){
    changeBulletIcon(event.target, 'important-list');
  }else if(event.target.classList == 'inspirationImage'){
    changeBulletIcon(event.target, 'inspiration-list');
  }else if(event.target.classList == 'noteImage'){
    changeBulletIcon(event.target, 'note-list');
  }else if(event.target.classList == 'checkMarkImage'){
    changeBulletIcon(event.target, 'checkMark-list');
  }else if(event.target.classList == 'deleteImage'){
    deleteBulletIcon(event.target);
  }

  
}

var days = document.getElementsByTagName('h2');

var day = document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0];

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

days[0].addEventListener('click', () => {

  putBack();
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("mon"));
  document.getElementById("monCurr").classList.add("current");
  day.innerHTML = "Monday";
});

days[1].addEventListener('click', () => {

  putBack();
  day.innerHTML = "Tuesday";
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("tue"));
  document.getElementById("tueCurr").classList.add("current");
  document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0].innerHTML = "Tuesday";
});

days[2].addEventListener('click', () => {

  putBack();
  day.innerHTML = "Wednesday";
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("wed"));
  document.getElementById("wedCurr").classList.add("current");
  document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0].innerHTML = "Wednesday";
});

days[3].addEventListener('click', () => {

  putBack();
  day.innerHTML = "Thursday";
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("thu"));
  document.getElementById("thuCurr").classList.add("current");
  document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0].innerHTML = "Thursday";
});

days[4].addEventListener('click', () => {

  putBack();
  day.innerHTML = "Friday";
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("fri"));
  document.getElementById("friCurr").classList.add("current");
  document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0].innerHTML = "Friday";
});

days[5].addEventListener('click', () => {

  putBack();
  day.innerHTML = "Saturday";
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("sat"));
  document.getElementById("satCurr").classList.add("current");
  document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0].innerHTML = "Saturday";
});

days[6].addEventListener('click', () => {

  putBack();
  day.innerHTML = "Sunday";
  document.querySelector("[class='bigDayContent']").appendChild(document.getElementById("sun"));
  document.getElementById("sunCurr").classList.add("current");
  document.querySelector("[class='bigDayContent']").getElementsByTagName('h1')[0].innerHTML = "Sunday";
});