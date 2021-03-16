let time = document.getElementById("time");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let mseconds = 0;
let interval;

function stopWatch(){
  mseconds++;
    if(mseconds / 10 == 1){
      seconds++;
      mseconds = 0;
    }
      if(seconds / 60 == 1){
        minutes++;
        seconds = 0;
      }
        if(minutes / 60 == 1){
          hours++;
          minutes = 0;
        }
time.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + mseconds;
}

start.addEventListener("click",function(){
  interval = setInterval(stopWatch, 100);
  start.disabled = "disabled";
  stop.disabled = ""
})

stop.addEventListener("click",function(){
  clearInterval(interval);
  start.disabled = "";
  stop.disabled = "disabled"
})

reset.addEventListener("click",function(){
  clearInterval(interval);
  time.innerHTML = "0:0:0:0";
  start.disabled = ""
  stop.disabled = ""
})