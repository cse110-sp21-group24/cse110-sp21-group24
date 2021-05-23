import ColorThief from '../../node_modules/colorthief/dist/color-thief.mjs'

const colorThief = new ColorThief();

let img = document.getElementById("output");

console.log(document.styleSheets);

// let colorArray = [];
//   $("*").each(function(){
//     let color = $(this).css("color");
//     if(colorArray.indexOf(color) == -1) {
//       colorArray.push(color);
//     }
//   });
//   console.log(colorArray);

img.addEventListener('load', function() {
  const colors = colorThief.getPalette(img,4);

  const first = rgbToHex(colors[0][0], colors[0][1], colors[0][2]);
  const second = rgbToHex(colors[1][0], colors[1][1], colors[1][2]);
  const third = rgbToHex(colors[2][0], colors[2][1], colors[2][2]);
  const fourth = rgbToHex(colors[3][0], colors[3][1], colors[3][2]);

  document.getElementById("color1").style = `background-color: ${first}`
  document.getElementById("color2").style = `background-color: ${second}`
  document.getElementById("color3").style = `background-color: ${third}`
  document.getElementById("color4").style = `background-color: ${fourth}`

  document.documentElement.style.setProperty('--first-color', first);
  document.documentElement.style.setProperty('--second-color', second);
  document.documentElement.style.setProperty('--third-color', third);
  document.documentElement.style.setProperty('--fourth-color', fourth);
});

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}