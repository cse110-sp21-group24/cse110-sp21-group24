/**
 * Update colors based on current color scheme
 */
window.addEventListener('load', () => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  getColors(); // retrieve color scheme

  /**
  * Get future log months depending on url or current month if no url hash
  */
  let urlFuture = decodeURI(location.hash).substring(1);
  // if no url hash, populate url variable
  if (urlFuture === "") {
    let today = new Date();
    if ((today.getMonth() >= 0 && today.getMonth() <= 4) || today.getMonth() === 11) {
      urlFuture = "January - June ";
      if (today.getMonth() === 11) {
        urlFuture += (today.getFullYear() + 1);
      } else {
        urlFuture += today.getFullYear();
      }
    } else {
      urlFuture = "July - December " + today.getFullYear();
    }
  }

  // get starting month and year from url
  const splitArr = urlFuture.split(" ");
  const startMonth = monthNames.indexOf(splitArr[0]);
  const year = splitArr[3];

  // populate the correct months and year
  let count = 0;
  document.querySelectorAll("h2").forEach(month => {
    let curr = startMonth + count;
    month.innerHTML = monthNames[curr];
    count++;
  });
  document.querySelector("h1").innerHTML = `${year} Future Log`;
  
  // retrieve custom stickers
  path = urlFuture;
  getCustomStickers();
  getSavedStickers();
  addFutureBulletsOnStart();
});


const monthsArr = ["first","second","third","fourth","fifth","sixth"];


monthsArr.forEach((elem) => {
  let month = elem+"-add";
  document.getElementById(month).addEventListener('click', () => {
    let oldList = document.getElementById(elem).getElementsByTagName('ul')[0];
    let lastEntryId = oldList.childNodes[oldList.childNodes.length-1].id;
    let item = document.createElement('li');
    item.contentEditable = "true";
    item.innerHTML = "ADD ENTRY";
    item.classList.add('task-list');
    let dropDown = createDropDown();
    let myDropDown = addDropDownImages();
    dropDown.appendChild(item);
    dropDown.appendChild(myDropDown);
    let list = document.getElementById(elem).getElementsByTagName('ul')[0];
    let year = document.querySelector('h1').innerHTML;
    let yearNumber = year.match(/(\d+)/);
    if(lastEntryId == null){
      var endingNumber = 1;
    }else{
      let number = lastEntryId.match(/(\d+)/);
      let numberAdded = parseInt(number[0]);
      var endingNumber = numberAdded + 1;
    }
    let monthName =document.getElementById(month).parentElement.parentElement.childNodes[1].innerHTML + yearNumber[0] + endingNumber;
    console.log(monthName);
    dropDown.id = monthName;
    list.appendChild(dropDown);
    saveFutureBulletToLC(dropDown);
    //console.log(dropDown);
  });
});

window.onclick = function(event) {
  if (!event.target.matches('.dropBtn')) {
    var dropdowns = document.getElementsByClassName("dropDown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        saveFutureBulletToLC(openDropdown.parentElement);
        openDropdown.classList.remove('show');
      }
    }
  }
    if(event.target.classList == 'task-list'){
      var dropDown = event.target.parentElement.childNodes[1];
      dropDown.classList.toggle('show');
    }else if(event.target.classList == 'event-list'){
      var dropDown = event.target.parentElement.childNodes[1];
      dropDown.classList.toggle('show');
    }else if(event.target.classList == 'important-list'){
      var dropDown = event.target.parentElement.childNodes[1];
      dropDown.classList.toggle('show');
    }else if(event.target.classList == 'inspiration-list'){
      var dropDown = event.target.parentElement.childNodes[1];
      dropDown.classList.toggle('show');
    }else if(event.target.classList == 'note-list'){
      var dropDown = event.target.parentElement.childNodes[1];
      dropDown.classList.toggle('show');
    }else if(event.target.classList == 'checkMark-list'){
      var dropDown = event.target.parentElement.childNodes[1];
      dropDown.classList.toggle('show');
    }
    if(event.target.classList == 'taskImage'){
      changeBulletIcon(event.target, 'task-list');
      saveFutureBulletChangedIcon(event.target);
    }else if(event.target.classList == 'eventImage'){
      changeBulletIcon(event.target, 'event-list');
      saveFutureBulletChangedIcon(event.target);
    }else if(event.target.classList == 'importantImage'){
      changeBulletIcon(event.target, 'important-list');
      saveFutureBulletChangedIcon(event.target);
    }else if(event.target.classList == 'inspirationImage'){
      changeBulletIcon(event.target, 'inspiration-list');
      saveFutureBulletChangedIcon(event.target);
    }else if(event.target.classList == 'noteImage'){
      changeBulletIcon(event.target, 'note-list');
      saveFutureBulletChangedIcon(event.target);
    }else if(event.target.classList == 'checkMarkImage'){
      changeBulletIcon(event.target, 'checkMark-list');
      saveFutureBulletChangedIcon(event.target);
    }else if(event.target.classList == 'deleteImage'){
      deleteFutureBulletPoint(event.target);
      deleteBulletIcon(event.target);
    }else if(event.target.classList == 'saveIconImage'){
      saveFutureBulletChangedIcon(event.target);
    }
}