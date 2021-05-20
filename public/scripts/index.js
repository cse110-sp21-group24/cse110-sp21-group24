function openNav() {
  document.getElementById("navigation").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

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