let path = this.location.pathname;
let imgInput = document.getElementById("newImg");
let newSticker;

/**
 * Change sticker when image input is changed
 */
imgInput.onchange = () => {
  if (imgInput.files && imgInput.files[0]) {
    let reader = new FileReader();

    reader.onload = (e) => {
        newSticker = e.target.result;
    };

    reader.readAsDataURL(imgInput.files[0]);
  }
}

/**
 * Open the sticker popup on click
 */
function openSticker() {
  document.getElementById("customContainer").style.display = "block";
  document.getElementById("closeBtn").hidden = false;
  document.getElementById("openBtn").hidden = true;
}

/**
 * Close the sticker popup on click
 */
function closeSticker() {
  document.getElementById("customContainer").style.display = "none";
  document.getElementById("openBtn").hidden = false;
  document.getElementById("closeBtn").hidden = true;
}

/**
 * Stop page from refreshing when a sticker is being dragged
 */
function allowDrop(event) {
  event.preventDefault();
}

/**
 * Store the position of a sticker when it is dragged into a new position
 */
function drag(event) {
  let img = document.getElementById(event.target.id);
  document.getElementById("dropBody").appendChild(img);
  img.style = "position: absolute; top: 5%; left: 5%;";
  $(img).draggable({ containment:'#dropBody',
  stop: function(event, ui) {
    let imgJSON = {
      id: img.id,
      src: img.src,
      style: img.style,
    };
    let key = path.concat("/" + imgJSON.id);
    localStorage.setItem(`${key}`, JSON.stringify(imgJSON));
  } });
}

/**
 * Delete sticker on right click
 */
function deleteSticker(event) {
  if (event.button == 2) {
    let img = document.getElementById(event.target.id);
    let key = path.concat("/" + img.id);
    if (localStorage.getItem(`${key}`) !== null) {
      localStorage.removeItem(`${key}`);
    }
    document.getElementById("dropBody").removeChild(img);
    img.removeAttribute("class");
    img.removeAttribute("style");
    if (event.target.id.startsWith("sticker")) {
      document.getElementById("stickerBox").appendChild(img);
    } else if (event.target.id.startsWith("washi")) {
      document.getElementById("washiBox").appendChild(img);
    } else {
      document.getElementById("customBox").appendChild(img);
    }
  }
}

/**
 * Create a custom sticker
 */
function createCustom(event) {
  event.preventDefault();
  let custom = document.createElement("img");
  let uniqueId = Date.now();
  custom.id = "custom".concat(uniqueId.toString());
  custom.src = newSticker;
  custom.setAttribute("ondragstart", "drag(event)");
  custom.setAttribute("onmousedown", "deleteSticker(event)");
  custom.height = "80";
  document.getElementById("customBox").appendChild(custom);

  // store into local storage
  let imgJSON = {
    id: custom.id,
    src: custom.src,
  };
  localStorage.setItem(`${imgJSON.id}`, JSON.stringify(imgJSON));
}

/*
 * On page load functions
 */
function getCustomStickers() {
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
}

/**
 * Restore stickers on a page from local storage
 */
function getSavedStickers() {
  // retrieve stickers placement
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
};

/**
 * Remove stickers from current page
 */
function removeCurrentStickers() {
  let pageStickers = Array.from(document.querySelectorAll("#dropBody > img")).filter(elem => elem.id.startsWith("sticker") || elem.id.startsWith("washi") || elem.id.startsWith("custom"));
  for (let i = 0; i < pageStickers.length; i++) {
    document.getElementById("dropBody").removeChild(pageStickers[i]);
    pageStickers[i].removeAttribute("class");
    pageStickers[i].removeAttribute("style");
    if (pageStickers[i].id.startsWith("sticker")) {
      document.getElementById("stickerBox").appendChild(pageStickers[i]);
    } else if (pageStickers[i].id.startsWith("washi")) {
      document.getElementById("washiBox").appendChild(pageStickers[i]);
    } else {
      document.getElementById("customBox").appendChild(pageStickers[i]);
    }
  }
}

document.addEventListener('contextmenu', event => event.preventDefault());