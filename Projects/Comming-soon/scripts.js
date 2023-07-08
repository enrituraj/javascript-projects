var countDownDate = new Date("Oct 16,2030 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days
    var hr= hours<10 ? ("0" + hours):hours
    document.getElementById("hours").innerHTML = hr
    var min= minutes<10 ? ("0" + minutes):minutes

    document.getElementById("minutes").innerHTML = min
    var sec= seconds<10 ? ("0" + seconds):seconds

    document.getElementById("seconds").innerHTML = sec

    if(distance < 0){
        clearInterval(0);
        document.getElementById("days").innerHTML = "00"
        document.getElementById("hours").innerHTML = "00"
        document.getElementById("minutes").innerHTML = "00"
        document.getElementById("seconds").innerHTML = "00"

    }


},1000)
