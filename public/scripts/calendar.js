const date = new Date();


const renderCalendar = () => {
    // need to find how many days have to be shown from the prev month
    date.setDate(1);
    console.log(date.getDay());


    const monthDays = document.querySelector(".days");

    // gives the last day of the current month
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    // this will store the index of the week when 1st of that month lies
    const firstDayIndex = date.getDay();


    // this will store the index of the week when last day of that month lies
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();


    // next month's days
    const nextDays = 7 - lastDayIndex -1;


    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];


    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";


    // display the previous month's last few days
    // i = firstDayIndex-1 because my calendar starts from Monday
    for (let i = firstDayIndex; i > 0; i--){
        days += `<div class = "prev-date">${prevLastDay - i + 1}</div>`;
    }


    for (let i = 1; i <= lastDay; i++){
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class = today>${i}</div>`;
        }
        else days += `<div>${i}</div>`;

    }

    for (let j = 1; j <= nextDays; j++){
        days += `<div class = "next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }

}



document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth()-1);
    renderCalendar();
});


document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth()+1);
    renderCalendar();
});

renderCalendar();