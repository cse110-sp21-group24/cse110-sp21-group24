/**
 * Update colors based on current color scheme
 */
 window.addEventListener('load', () => {
  getColors(); // retrieve color scheme
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
