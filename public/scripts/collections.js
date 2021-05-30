/**
 * Update colors based on current color scheme
 */
 window.addEventListener('load', () => {
  const color1 = localStorage.getItem("color1");
  const color2 = localStorage.getItem("color2");
  const color3 = localStorage.getItem("color3");
  const color4 = localStorage.getItem("color4");

  document.documentElement.style.setProperty('--first-color', color1);
  document.documentElement.style.setProperty('--second-color', color2);
  document.documentElement.style.setProperty('--third-color', color3);
  document.documentElement.style.setProperty('--fourth-color', color4);

  let stickers = Array.from(document.querySelectorAll("img")).filter(elem => elem.id.startsWith("sticker") || elem.id.startsWith("washi"));
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
      }
      document.getElementById(parent).removeChild(elem);
      document.getElementById("dropBody").appendChild(load);
      // <img id="sticker1" src="" ondragstart="drag(event)" onmousedown="deleteSticker(event)" width="auto" height="80" style="position: absolute; inset: 630.844px auto auto 868.594px; width: 88.1719px; height: 80px;" class="ui-draggable ui-draggable-handle">
    }
  })
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
  collectionRow.innerHTML = element;

  document.getElementById('collection-list').appendChild(collectionRow);
}