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
  document.getElementById("color1").style = `background-color: rgb(${colors[0]})`
  document.getElementById("color2").style = `background-color: rgb(${colors[1]})`
  document.getElementById("color3").style = `background-color: rgb(${colors[2]})`
  document.getElementById("color4").style = `background-color: rgb(${colors[3]})`
});
