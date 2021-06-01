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

function openNav() {
  document.getElementById("navigation").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function collectionAdd() {
  const x = document.getElementById("cinputline");
  if (x.style.display == "block"){
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
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
  collectionRow.innerHTML = inputVal;
  document.getElementById('collection-list').appendChild(collectionRow);
  collectionAdd();
  collectionList = document.querySelectorAll(".collection-list p");
  for (let i = 0; i < collectionList.length; i++) { 
     collectionList[i].addEventListener("click", function() {
       //collectionList[i].style.textDecoration = 'underline';
       document.querySelector(".collection-title h1").innerHTML = collectionList[i].textContent;
     });
  }
  document.getElementById('cinput').value = '';
}