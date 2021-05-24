
/**
 * 
 * @param { any } element event.target
 * @param { String } currentIcon String of current class name for icon
 * @param { String } nextIcon String of next class name for icon
 * @returns changed element
 */
function changeBulletIcon(element,currentIcon,nextIcon){
  element.classList.add(nextIcon);
  element.classList.remove(currentIcon);
  return element;
}

/**
 * This function removes the element passed in as a parameter
 * @param { any } element event.target
 */
function deleteBulletIcon(element){
  element.remove();
  return element;
}