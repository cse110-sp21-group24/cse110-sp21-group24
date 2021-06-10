function openNav() {
  document.getElementById("navigation").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function collectionAdd() {
  const x = document.getElementById("cinputline");
  if (x.style.display == "block"){
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
/**
 * Set the title of the collection based on current selection
 */

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
  collectionRow.innerHTML = inputVal;
  document.getElementById('collection-list').appendChild(collectionRow);
  collectionAdd();
  collectionList = document.querySelectorAll(".collection-list p");
  for (let i = 0; i < collectionList.length; i++) { 
     collectionList[i].addEventListener("click", function() {
       //collectionList[i].style.textDecoration = 'underline';
       document.querySelector(".collection-title h1").innerHTML = collectionList[i].textContent;
     });
  }
  document.getElementById('cinput').value = '';
}