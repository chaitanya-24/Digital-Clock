function digitalClock() {
    
    let timeHTML = document.getElementById("time-js");
    let todayHTML = document.getElementById("today-js");
    let dateHTML = document.getElementById("date-js");
    let monthHTML = document.getElementById("month-js");
    let yearHTML = document.getElementById("year-js");

    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    date = addZero(date);
    
    let hours = d.getHours();
    hours = addZero(hours);

    let minutes = d.getMinutes();
    minutes = addZero(minutes);

    let seconds = d.getSeconds();
    seconds = addZero(seconds);

    let today = d.getDay();
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    timeHTML.innerHTML = hours + ":" + minutes + ":" + seconds;
    todayHTML.innerHTML = dayName[today];
    dateHTML.innerHTML = date;
    monthHTML.innerHTML = monthName[month];
    yearHTML.innerHTML = year;

}

function addZero(i){
    if(i < 10){
        i = "0" + i;
    }
    return i;
}

setInterval(digitalClock, 1000);

// let d1 = new Date();
// console.log(d1.getDay());