/**
 * Create Event Listeners For Different Links For Hyper Links
 * Will need to change location.href to jump to correct page
 */

var calendarLink = document.getElementById("calendar");
calendarLink.addEventListener('click', () => {
  location.href="index.html";
});

var dailyLink1 = document.getElementById("daily1");
dailyLink1.addEventListener('click', () => {
  location.href="dailylogs.html";
});

var dailyLink2 = document.getElementById("daily2");
dailyLink2.addEventListener('click', () => {
  //location.href="otherpages/newpage.html";
});

var monthlyLink1 = document.getElementById("monthly1");
monthlyLink1.addEventListener('click', () => {
  location.href="calendar.html";
});

var monthlyLink2 = document.getElementById("monthly2");
monthlyLink2.addEventListener('click', () => {
  //location.href="otherpages/newpage.html";
});

var futureLink1 = document.getElementById("future1");
futureLink1.addEventListener('click', () => {
  location.href="futurelogs.html";
});

var futureLink2 = document.getElementById("future2");
futureLink2.addEventListener('click', () => {
  //location.href="otherpages/newpage.html";
});

var collectionLink1 = document.getElementById('collections1');
collectionLink1.addEventListener('click', () =>{
  location.href="collection.html";
});

