setInterval(showTime, 1000);
function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    session = "AM";




    if(hour > 12){
        hour -= 12;
        session = "PM";
    }
    if(hour = 0){
        hour = 12;
        session = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + " " + session; 

    document.getElementById("Clock").innerHTML = currentTime;
}
showTime();