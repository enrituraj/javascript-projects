let [seconds,minutes,hour] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;
function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hour++;
        }
    }
    let hr = hour<10 ? "0"+hour : hour;
    let min = minutes<10 ? "0"+minutes : minutes;
    let sec = seconds<10 ? "0"+seconds : seconds;
    displayTime.innerHTML = hr + ":" + min +":"+ sec;
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(stopwatch, 1000);
}
function watchStop(){
    clearInterval(timer)
}
function watchReset(){
    [seconds,minutes,hour] = [0,0,0];
    displayTime.innerHTML = "00:00:00"
}