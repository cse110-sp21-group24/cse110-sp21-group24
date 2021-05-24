
/**
 * 
 * @param { any } element event.target
 * @param { String } currentIcon class name of current icon
 * @param { string } nextIcon class name of icon being changed to
 *  
 */
function changeBulletIcon(element,currentIcon,nextIcon){
  element.classList.add(nextIcon);
  element.classList.remove(currentIcon);
}

function deleteBulletIcon(element){
  element.remove();
}