/**
 * const dayOfWeeks = [
    'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'
];

const $time = document.querySelector('.time');
const $date = document.querySelector('.date');

function padStart (value, length){

    return String(value).padStart(length,'0');
}

function upDate(){

    const now = new Date();
    // const hours = now.getHours();
    // const minutes = now. now.getMinutes();
    // const seconds = now.getSeconds();
    // const year = now.getFullYear();
    // const month = now.getMonth();
    // const date = now.getDate();
    // const day = now.getDay();
    const [
        hours, minutes, seconds, year, month, date, day,
    ] = [ now.getHours(), now.getMinutes(),
          now.getSeconds(), now.getFullYear(), now.getMonth(), now.getDate(), now.getDay(),
        ];
}

$time.innerText = `${padStart(hours,2)}:${padStart(minutes, 2)}:${padStart(seconds,2)}`;

$date.innerText = `${padStart(year, 4)}-'${padStart(month + 1,2)}-'${padStart(date,2)} ${dayOfWeeks[day]}`;

upDate();
setInterval(upDate, 1000);

 */
// function startTime() {
//     var today = new Date();
//     var hr = today.getHours();
//     var min = today.getMinutes();
//     var sec = today.getSeconds();
//     ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
//     hr = (hr == 0) ? 12 : hr;
//     hr = (hr > 12) ? hr - 12 : hr;
//     //Add a zero in front of numbers<10
//     hr = checkTime(hr);
//     min = checkTime(min);
//     sec = checkTime(sec);
//     document.getElementById("time").innerHTML = hr + ":" + min + ":" + sec + " " + ap;

//     var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     var curWeekDay = days[today.getDay()];
//     var curDay = today.getDate();
//     var curMonth = months[today.getMonth()];
//     var curYear = today.getFullYear();
//     var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
//     document.getElementById("date").innerHTML = date;

//     var time = setTimeout(function(){ startTime() }, 500);
// }
// function checkTime(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }
// startTime();


function upDateTime() {

    var dateNow = new Date();
    /* time */
    var hr,
        _min = (dateNow.getMinutes() < 10) ? "0" + dateNow.getMinutes() : dateNow.getMinutes(),
        sec = (dateNow.getSeconds() < 10) ? "0" + dateNow.getSeconds() : dateNow.getSeconds(),
        ampm = (dateNow.getHours() >= 12) ? "PM" : "AM";

    // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
    if (dateNow.getHours() == 0) {
        hr = 12;
    } else if (dateNow.getHours() > 12) {
        hr = dateNow.getHours() - 12;
    } else {
        hr = dateNow.getHours();
    }
    // Add to time format

    var currentTime = hr + ":" + _min + ":" + sec;




    // AM/ PM options 

    document.getElementsByClassName('time')[0].innerHTML = currentTime;
    document.getElementsByClassName("ampm")[0].innerHTML = ampm;



    /* date */
    var dow = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
        month = [
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
            "December"
        ],
        day = dateNow.getDate();

    // store date
    var currentDate = dow[dateNow.getDay()] + ", " + month[dateNow.getMonth()] + " " + day;
    /*  Add Date options */

    document.getElementsByClassName("date")[0].innerHTML = currentDate;
}


// print time and date once, then update them every second
upDateTime();
setInterval(function () {
    upDateTime()
}, 1000);



