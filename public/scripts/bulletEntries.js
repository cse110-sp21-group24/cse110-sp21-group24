
/**
 * This function changes the icon from the current to the next of
 * the given element
 * @param { any } element event.target
 * @param { String } currentIcon class name of current icon
 * @param { string } nextIcon class name of icon being changed to
 *  
 */
function changeBulletIcon(element,currentIcon,nextIcon){
  element.classList.add(nextIcon);
  element.classList.remove(currentIcon);
}

/**
 * This function removes the element passed in as a parameter
 * @param { any } element event.target
 */
function deleteBulletIcon(element){
  element.remove();
}