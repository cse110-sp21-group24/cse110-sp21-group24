const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let curr = new Date;
let first, last, firstDay, lastDay;

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

  // get the dates of the current week
  first = curr.getDate() - curr.getDay();
  last = first + 6;
  firstDay = new Date(curr.setDate(first));
  lastDay = new Date(curr.setDate(last));

  let firstFormat = `${monthNames[firstDay.getMonth()]} ${firstDay.getDate()}`
  let lastFormat = `${monthNames[lastDay.getMonth()]} ${lastDay.getDate()}`

  document.getElementById("datesHeader").innerHTML = `week of ${firstFormat} - ${lastFormat}`;

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
