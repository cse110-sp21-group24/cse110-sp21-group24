
/**
 * 
 * @param { any } element event.target
 * @param { String } currentIcon String of current class name for icon
 * @param { String } nextIcon String of next class name for icon
 * @returns changed element
 */
function changeBulletIcon(element,nextIcon){
  let elementToChange = element.parentElement.parentElement.childNodes[0];
  elementToChange.className = nextIcon;
  return elementToChange;
}

/**
 * This function removes the element passed in as a parameter
 * @param { any } element event.target
 */
function deleteBulletIcon(element){
  let elementToChange = element.parentElement.parentElement;
  elementToChange.remove();
  return elementToChange;
}

/**
 * This function toggles the drop down menu of entries
 */
function toggleDrop(){
  document.getElementById('myDropDown').classList.toggle('show');
}

