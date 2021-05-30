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

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let today = new Date().getMonth();
  let count = 1;

  document.querySelectorAll("h2").forEach(month => {
    let curr = today + count;
    if (curr < 0) {
      curr += 12;
    }
    month.innerHTML = monthNames[curr];
    count++;
  });

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

document.querySelector('#text').addEventListener('click', (event) => {
    let field = event.target;
    if (field.contentEditable === true) {
        field.contentEditable = false;
    } else {
        field.contentEditable = true;
    }
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}