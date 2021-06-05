function saveFutureBulletToLC(element){
  let pageName = document.querySelector('title').innerHTML;
  let dayStorage = JSON.parse(localStorage.getItem(pageName));
  if(dayStorage == null){
    dayStorage = {};
  }
  let entryJSON = {
    pageID: pageName,
    month: element.parentElement.parentElement.parentElement.childNodes[1].innerHTML,
    id: element.id,
    bulletType: element.childNodes[0].classList[0],
    entry: element.childNodes[0].innerHTML
  }
  dayStorage[entryJSON.id] = entryJSON;
  let key = pageName;
  localStorage.setItem(key, JSON.stringify(dayStorage));
}

function saveFutureBulletChangedIcon(element){
  let divChanged = element.parentElement.parentElement;
  saveFutureBulletToLC(divChanged);
}

function addFutureBulletsOnStart(){
  const monthsArr = ["first","second","third","fourth","fifth","sixth"];
  var monthsToSection = {};
  var currentMonths = getMonths();
  monthsToSection[currentMonths[0]] = monthsArr[0];
  monthsToSection[currentMonths[1]] = monthsArr[1];
  monthsToSection[currentMonths[2]] = monthsArr[2];
  monthsToSection[currentMonths[3]] = monthsArr[3];
  monthsToSection[currentMonths[4]] = monthsArr[4];
  monthsToSection[currentMonths[5]] = monthsArr[5];
  //console.log(monthsToSection);
  let id = document.querySelector('title').innerHTML;
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
    //console.log(elem.month);
    let section = monthsToSection[elem.month];
    if(currentMonths.includes(elem.month)){
      let list = document.getElementById(section).getElementsByTagName('ul')[0];
      bullet.id = elem.id;
      list.appendChild(bullet);
    }
  });
}

function deleteFutureBulletPoint(element){
  let id = document.querySelector('title').innerHTML;
  let dayData = JSON.parse(localStorage.getItem(id));
  delete dayData[element.parentElement.parentElement.id];
  localStorage.setItem(id, JSON.stringify(dayData));
}

function getMonths(){
  let monthList = [];
  let months = document.querySelectorAll('h2');
  months.forEach((entry) => {
    //console.log(entry.innerHTML);
    monthList.push(entry.innerHTML);
  });
  //console.log(monthList);
  return monthList;
}