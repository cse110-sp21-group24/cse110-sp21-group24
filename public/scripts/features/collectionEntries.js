function addCollectionList(){
  let collectionList = JSON.parse(localStorage.getItem("Collections"));
  let list = [];
  if(collectionList != null){
    list = Object.keys(collectionList).map(key => {
      return collectionList[key];
    });
  }
  //console.log(list);
  list.forEach(elem => {
    const collectionRow = document.createElement('p');
    collectionRow.innerHTML = elem.name;
    document.getElementById('collection-list').appendChild(collectionRow);
  });
  document.querySelector(".collection-title h1").innerHTML = list[0].name;
  clickableCollections();
}

function clickableCollections(){
  var collectionList = document.querySelectorAll(".collection-list p");
  for (let i = 0; i < collectionList.length; i++) { 
    collectionList[i].addEventListener("click", function() {
      //collectionList[i].style.textDecoration = 'underline';
      document.querySelector(".collection-title h1").innerHTML = collectionList[i].textContent;
      deleteAllBullets();
      addCollectionBulletsOnStart();

    });
  }
}

function saveCollectionBulletToLC(element){
  let collectionList = document.getElementById('ctitle').innerHTML;
  let collectionStorage = JSON.parse(localStorage.getItem("CollectionsList"));
  if(collectionStorage == null){
    collectionStorage = {};
  }
  let entryJSON = {
    pageID: "Collections",
    collectionName: collectionList,
    id: element.id,
    bulletType: element.childNodes[0].classList[0],
    entry: element.childNodes[0].innerHTML
  }
  collectionStorage[entryJSON.id] = entryJSON;
  let key = "CollectionsList";
  localStorage.setItem(key, JSON.stringify(collectionStorage));
}

function saveCollectionBulletChangedIcon(element){
  let divChanged = element.parentElement.parentElement;
  saveCollectionBulletToLC(divChanged);
}

function addCollectionBulletsOnStart(){
  let collectionList = document.getElementById('ctitle').innerHTML;
  let collectionStorage = JSON.parse(localStorage.getItem("CollectionsList"));
  let bullets = [];
  if(collectionStorage != null){
    bullets = Object.keys(collectionStorage).map(key => {
      return collectionStorage[key];
    });
  }
  bullets.forEach(elem => {
    if(elem.id.startsWith(collectionList)){
      let bullet = createDropDown();
      let bulletDropDown = addDropDownImages();
      let bulletItem = document.createElement('li');
      bulletItem.contentEditable = "true";
      bulletItem.innerHTML = elem.entry;
      bulletItem.classList.add(elem.bulletType);
      bullet.appendChild(bulletItem);
      bullet.appendChild(bulletDropDown);
      let list = document.getElementById("collectionListArea").getElementsByTagName('ul')[0];
      bullet.id = elem.id;
      list.appendChild(bullet);
    }
  });
}

function deleteAllBullets(){
  let list = document.getElementById("collectionListArea").childNodes[1].childNodes;
  for(var i = list.length - 1; i > 0; i--){
    list[i].remove();
  }
  console.log(list);
}

function deleteCollectionBulletPoint(element){
  let collectionStorage = JSON.parse(localStorage.getItem("CollectionsList"));
  let id = element.parentElement.parentElement.id;
  delete collectionStorage[id];
  localStorage.setItem("CollectionsList", JSON.stringify(collectionStorage));
}
