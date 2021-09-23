function currentTime(){
    //declare variables
    var d = new Date();//get current date
    var hr = d.getHours();//Get current hours
    var min = d.getMinutes();//get current mins
    var sec = d.getSeconds();//get current seconds
    var ampm; //declare empty variable to store AM or PM

//add 0 to sigle digits for seconds
if (sec < 10){
    sec = "0" + sec;
}
if (min < 10){
    min = "0" + min;
}
if (hr == 12){
    ampm ="PM";
} else if ( hr > 12){
    hr -= 12;
    ampm = "PM";
} else {
    ampm = "AM";
}
var time = hr + ":" + min + ":" + sec + " " + ampm;
//display current local time and time zone on HTML elements
document.getElementById("clock").innerText = time;//adding time
}
//run time data function every 1 second
setInterval(currentTime, 1000);//setting timer

currentTime();

//Add timezone



