
/**
 * 
 * @param { any } element event.target
 * @param { String } currentIcon String of current class name for icon
 * @param { String } nextIcon String of next class name for icon
 * @returns changed element
 */
function changeBulletIcon(element,nextIcon){
  let elementToChange = element.parentElement.parentElement.childNodes[0];
  elementToChange.className = nextIcon;
  return elementToChange;
}

/**
 * This function removes the element passed in as a parameter
 * @param { any } element event.target
 */
function deleteBulletIcon(element){
  let elementToChange = element.parentElement.parentElement;
  elementToChange.remove();
  return elementToChange;
}

/**
 * This function toggles the drop down menu of entries
 */
function toggleDrop(){
  document.getElementById('myDropDown').classList.toggle('show');
}

/**
 * This function creates the div element that the bullet entry is stored in
 * @returns div html element of create bullet
 */
function createDropDown(){
  let dropDown = document.createElement('div');
  dropDown.style.width = '215px';
  dropDown.classList.add('dropDown');
  return dropDown;
}

/**
 * This function creates the div element that is the drop dow
 * @returns div element of the drop down to change and delete entries
 */
function addDropDownImages(){
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
  let saveList = document.createElement('img');
  saveList.src = 'images/saveIcon.png';
  saveList.className = 'saveIconImage';
  myDropDown.appendChild(saveList);
  let deleteList = document.createElement('img');
  deleteList.src = 'images/trash.png';
  deleteList.className = 'deleteImage';
  myDropDown.appendChild(deleteList);
  return myDropDown;
}

function saveToLC(element){
  let pageID = document.getElementById("datesHeader").innerHTML;
  let entryJSON = {
    pageID: pageID,
    day: element.parentElement.parentElement.id,
    id: element.id,
    bulletType: element.childNodes[0].classList[0],
    entry: element.childNodes[0].innerHTML
  }
  let key = entryJSON.id;
  localStorage.setItem(key, JSON.stringify(entryJSON));
}

function saveChangedIcon(element){
  let divChanged = element.parentElement.parentElement;
  saveToLC(divChanged);
  console.log(divChanged);
}

function deleteBulletPoint(element){
  let divToDelete = element.parentElement.parentElement;
  localStorage.removeItem(divToDelete.id);
}