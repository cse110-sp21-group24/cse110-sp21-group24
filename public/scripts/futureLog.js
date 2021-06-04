/**
 * Update colors based on current color scheme
 */
window.addEventListener('load', () => {
  // retrieve color scheme
  const color1 = localStorage.getItem("color1");
  const color2 = localStorage.getItem("color2");
  const color3 = localStorage.getItem("color3");
  const color4 = localStorage.getItem("color4");

  document.documentElement.style.setProperty('--first-color', color1);
  document.documentElement.style.setProperty('--second-color', color2);
  document.documentElement.style.setProperty('--third-color', color3);
  document.documentElement.style.setProperty('--fourth-color', color4);

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

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
});

document.querySelector('#text').addEventListener('click', (event) => {
    let field = event.target;
    if (field.contentEditable === true) {
        field.contentEditable = false;
    } else {
        field.contentEditable = true;
    }
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}