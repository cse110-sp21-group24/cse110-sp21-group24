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


/**
 * Open navigation bar - overlap content for all pages except home
 */
function openNav(btn) {
  document.getElementById("navigation").style.width = "250px";
  if (document.getElementById("main")) {
    document.getElementById("main").style.marginLeft = "250px";
  }
  else {
    btn.style.marginLeft = "250px";
  }
}

/**
 * Close navigation bar 
 */
function closeNav() {
  document.getElementById("navigation").style.width = "0";
  if (document.getElementById("main")) {
    document.getElementById("main").style.marginLeft= "0";
  }
  document.querySelector('button[class="openbtn"]').style.marginLeft = "0px";
}
