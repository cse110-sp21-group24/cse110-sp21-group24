const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let curr = new Date;
let first, last, firstDay, lastDay;

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

  // get the dates of the current week
  first = curr.getDate() - curr.getDay();
  last = first + 6;
  firstDay = new Date(curr.setDate(first));
  lastDay = new Date(curr.setDate(last));

  let firstFormat = `${monthNames[firstDay.getMonth()]} ${firstDay.getDate()}`
  let lastFormat = `${monthNames[lastDay.getMonth()]} ${lastDay.getDate()}`

  document.getElementById("datesHeader").innerHTML = `week of ${firstFormat} - ${lastFormat}`;
});
