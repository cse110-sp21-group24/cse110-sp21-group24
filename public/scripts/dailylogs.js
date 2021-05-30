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