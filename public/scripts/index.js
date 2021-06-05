/**
 * Update colors based on current color scheme
 */
 window.addEventListener('load', () => {
  getColors(); // retrieve color scheme
});



function openNav(btn) {
  document.getElementById("navigation").style.width = "250px";
  if (document.getElementById("main")) {
    document.getElementById("main").style.marginLeft = "250px";
  }
  btn.style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0";
  if (document.getElementById("main")) {
    document.getElementById("main").style.marginLeft= "0";
  }
  document.querySelector('button[class="openbtn"]').style.marginLeft = "0px";
}
