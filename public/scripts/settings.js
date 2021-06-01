import ColorThief from '../colorthief/dist/color-thief.mjs'

const colorThief = new ColorThief();

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
});

let input = document.querySelector("input");
input.addEventListener('change', (event) => {
  let image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
});

let img = document.getElementById("output");
img.addEventListener('load', () => {
  const colors = colorThief.getPalette(img,4);

  // set new palette colors in local storage
  localStorage.setItem("color1", rgbToHex(colors[0][0], colors[0][1], colors[0][2]));
  localStorage.setItem("color2", rgbToHex(colors[1][0], colors[1][1], colors[1][2]));
  localStorage.setItem("color3", rgbToHex(colors[2][0], colors[2][1], colors[2][2]));
  localStorage.setItem("color4", rgbToHex(colors[3][0], colors[3][1], colors[3][2]));
  
  // get new palette colors as variables
  const color1 = localStorage.getItem("color1");
  const color2 = localStorage.getItem("color2");
  const color3 = localStorage.getItem("color3");
  const color4 = localStorage.getItem("color4");

  // set circles on Settings page to new palette
  document.getElementById("color1").style = `background-color: ${color1}`
  document.getElementById("color2").style = `background-color: ${color2}`
  document.getElementById("color3").style = `background-color: ${color3}`
  document.getElementById("color4").style = `background-color: ${color4}`

  // change colors of Settings page
  document.documentElement.style.setProperty('--first-color', color1);
  document.documentElement.style.setProperty('--second-color', color2);
  document.documentElement.style.setProperty('--third-color', color3);
  document.documentElement.style.setProperty('--fourth-color', color4);
});

let reset = document.getElementById("resetBtn");
reset.addEventListener('click', () => {
  // set palette to default colors
  localStorage.setItem("color1", "#9EB3C2");
  localStorage.setItem("color2", "#9BD4F5");
  localStorage.setItem("color3", "#1D8ECE");
  localStorage.setItem("color4", "#2E77BB");

  // remove uploaded picture
  let image = document.getElementById('output');
  image.removeAttribute("src");
  
  // set circles on Settings page to default palette
  document.getElementById("color1").style = `background-color: ${localStorage.getItem("color1")}`
  document.getElementById("color2").style = `background-color: ${localStorage.getItem("color2")}`
  document.getElementById("color3").style = `background-color: ${localStorage.getItem("color3")}`
  document.getElementById("color4").style = `background-color: ${localStorage.getItem("color4")}`

  // change colors of Settings page
  document.documentElement.style.setProperty('--first-color', localStorage.getItem("color1"));
  document.documentElement.style.setProperty('--second-color', localStorage.getItem("color2"));
  document.documentElement.style.setProperty('--third-color', localStorage.getItem("color3"));
  document.documentElement.style.setProperty('--fourth-color', localStorage.getItem("color4"));
})

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}