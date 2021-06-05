/*
 * Get color scheme on the log pages
 */
function getColors() {
    const color1 = localStorage.getItem("color1");
    const color2 = localStorage.getItem("color2");
    const color3 = localStorage.getItem("color3");
    const color4 = localStorage.getItem("color4");
  
    document.documentElement.style.setProperty('--first-color', color1);
    document.documentElement.style.setProperty('--second-color', color2);
    document.documentElement.style.setProperty('--third-color', color3);
    document.documentElement.style.setProperty('--fourth-color', color4);
};