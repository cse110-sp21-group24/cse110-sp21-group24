/**
 * This function saves the passed element to local storage
 * @param {*} element 
 */
function saveBulletToLC(element){
  let pageName = document.querySelector('title').innerHTML;
  let pageID = pageName + document.getElementById('currMonth').innerHTML;
  let dayStorage = JSON.parse(localStorage.getItem(pageID));
  if(dayStorage == null){
    console.log("null");
    dayStorage = {};
  }
  let entryJSON = {
    pageID: pageID,
    day: element.parentElement.parentElement.id,
    id: element.id,
    bulletType: element.childNodes[0].classList[0],
    entry: element.childNodes[0].innerHTML
  }
  //console.log(entryJSON.id);
  dayStorage[entryJSON.id] = entryJSON;
  //console.log(dayStorage);
  let key = pageID;
  localStorage.setItem(key, JSON.stringify(dayStorage));
  //console.log(JSON.parse(localStorage.getItem(key)));
}

/**
 * This function saves an element's bullet icon using
 * saveBulletToLC
 * @param {*} element 
 */
function saveBulletChangedIcon(element){
  let divChanged = element.parentElement.parentElement;
  saveBulletToLC(divChanged);
}

/**
 * This function adds the reminders for the month that is 
 * open on the page
 */
function addOtherBulletsOnStart(){
  let pageName = document.querySelector('title').innerHTML;
  let id = pageName + document.getElementById('currMonth').innerHTML;
  //console.log(id);
  let dayData = JSON.parse(localStorage.getItem(id));
  //console.log(dayData);
  let bullets = [];
  if(dayData != null){
    bullets = Object.keys(dayData).map(key => {
      return dayData[key];
    });
  }
  //console.log(bullets);
  bullets.forEach(elem => {
    let bullet = createDropDown();
    let bulletDropDown = addDropDownImages();
    let bulletItem = document.createElement('li');
    bulletItem.contentEditable = "true";
    bulletItem.innerHTML = elem.entry;
    bulletItem.classList.add(elem.bulletType);
    bullet.appendChild(bulletItem);
    bullet.appendChild(bulletDropDown);
    let list = document.getElementById(elem.day).getElementsByTagName('ul')[0];
    bullet.id = elem.id;
    list.appendChild(bullet);
  });
}

/**
 * This function deletes the passed element from local storage
 * @param {*} element 
 */
function deleteOtherBulletPoint(element){
  let pageName = document.querySelector('title').innerHTML;
  let id = pageName + document.getElementById('currMonth').innerHTML;
  let dayData = JSON.parse(localStorage.getItem(id));
  delete dayData[element.parentElement.parentElement.id];
  localStorage.setItem(id, JSON.stringify(dayData));
}

/**
 * This function removes the bullet points on the reminder section of the page
 */
function removeAllBullets(){
  let list = document.getElementById('reminder').childNodes[1].childNodes;
  for(var i = list.length - 1; i > 0; i--){
    list[i].remove();
  }
}