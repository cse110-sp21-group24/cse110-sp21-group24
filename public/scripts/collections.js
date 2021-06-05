/**
 * Update colors based on current color scheme
 */
 window.addEventListener('load', () => {
  getColors(); // retrieve color scheme

  // retrieve stickers
  getCustomStickers();
  getSavedStickers();
  addCollectionList();
  addCollectionBulletsOnStart();
});

function collectionAdd() {
  document.getElementsById("cinput").style.display = "inline";
}

var collectionList = document.querySelectorAll(".collection-list p");

if (collectionList[0]){
  document.querySelector(".collection-title h1").innerHTML = collectionList[0].textContent;
}

for (let i = 0; i < collectionList.length; i++) { 
     collectionList[i].addEventListener("click", function() {
       //collectionList[i].style.textDecoration = 'underline';
       document.querySelector(".collection-title h1").innerHTML = collectionList[i].textContent;
     });
}

var collectionInput = document.getElementById("cinput");

collectionInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("csubmit-button").click();
   document.getElementById("creset-button").click();
   
  }
});

function addCollectionRow() {
  const collectionRow = document.createElement('p');
  const inputVal = document.getElementById("cinput").value;
  const list = document.getElementById("collection-list");
  collectionRow.innerHTML = inputVal;
  document.getElementById('collection-list').appendChild(collectionRow);
  let collectionList = JSON.parse(localStorage.getItem("Collections"));
  if(collectionList == null){
    collectionList = {};
  }
  let cList = {
    name: inputVal,
    id: "Collections"+list.childNodes.length
  }
  collectionList[cList.id] = cList;
  localStorage.setItem("Collections", JSON.stringify(collectionList));
}

document.getElementById("collection-add").addEventListener('click', () => {
  let oldList = document.getElementById("collectionListArea").getElementsByTagName('ul')[0];
  let lastEntryId = oldList.childNodes[oldList.childNodes.length-1].id;
  let item = document.createElement('li');
  item.contentEditable = "true";
  item.innerHTML = "ADD ENTRY";
  item.classList.add('task-list');
  let dropDown = createDropDown();
  let myDropDown = addDropDownImages();
  dropDown.appendChild(item);
  dropDown.appendChild(myDropDown);
  let list = document.getElementById("collectionListArea").getElementsByTagName('ul')[0];
  let listName = document.getElementById("ctitle").innerHTML;
  if(lastEntryId == null){
    var endingNumber = 1;
  }else{
    let number = lastEntryId.match(/(\d+)/);
    let numberAdded = parseInt(number[0]);
    var endingNumber = numberAdded + 1;
  }
  dropDown.id = listName + endingNumber;
  list.appendChild(dropDown);
  saveCollectionBulletToLC(dropDown);
  //console.log(dropDown);
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
    saveCollectionBulletChangedIcon(event.target);
  }else if(event.target.classList == 'eventImage'){
    changeBulletIcon(event.target, 'event-list');
    saveCollectionBulletChangedIcon(event.target);
  }else if(event.target.classList == 'importantImage'){
    changeBulletIcon(event.target, 'important-list');
    saveCollectionBulletChangedIcon(event.target);
  }else if(event.target.classList == 'inspirationImage'){
    changeBulletIcon(event.target, 'inspiration-list');
    saveCollectionBulletChangedIcon(event.target);
  }else if(event.target.classList == 'noteImage'){
    changeBulletIcon(event.target, 'note-list');
    saveCollectionBulletChangedIcon(event.target);
  }else if(event.target.classList == 'checkMarkImage'){
    changeBulletIcon(event.target, 'checkMark-list');
    saveCollectionBulletChangedIcon(event.target);
  }else if(event.target.classList == 'deleteImage'){
    deleteCollectionBulletPoint(event.target);
    deleteBulletIcon(event.target);
  }else if(event.target.classList == 'saveIconImage'){
    saveCollectionBulletChangedIcon(event.target);
  }
}