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

function collectionAdd() {
  document.getElementsById("cinput").style.display = "inline";
}

var collectionList = document.querySelectorAll(".collection-list p");

if (collectionList[0]){
  document.querySelector(".collection-title h1").innerHTML = collectionList[0].textContent;
}

for (let i = 0; i < collectionList.length; i++) { 
     collectionList[i].addEventListener("click", function() {
       //collectionList[i].style.textDecoration = 'underline';
       document.querySelector(".collection-title h1").innerHTML = collectionList[i].textContent;
     });
}

var collectionInput = document.getElementById("cinput");

collectionInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("csubmit-button").click();
   document.getElementById("creset-button").click();
   
  }
});

function addCollectionRow() {
  const collectionRow = document.createElement('p');
  const inputVal = document.getElementById("cinput").value;
  collectionRow.innerHTML = element;

  document.getElementById('collection-list').appendChild(collectionRow);
}