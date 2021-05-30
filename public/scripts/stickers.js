let path = this.location.pathname;
let imgInput = document.getElementById("newImg");
let newSticker;

imgInput.onchange = () => {
  if (imgInput.files && imgInput.files[0]) {
    let reader = new FileReader();

    reader.onload = (e) => {
        newSticker = e.target.result;
    };

    reader.readAsDataURL(imgInput.files[0]);
  }
}

function openSticker() {
  document.getElementById("customContainer").style.display = "block";
  document.getElementById("closeBtn").hidden = false;
  document.getElementById("openBtn").hidden = true;
}

function closeSticker() {
  document.getElementById("customContainer").style.display = "none";
  document.getElementById("openBtn").hidden = false;
  document.getElementById("closeBtn").hidden = true;
}

function allowDrop(event) {
  event.preventDefault();
}

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

document.addEventListener('contextmenu', event => event.preventDefault());