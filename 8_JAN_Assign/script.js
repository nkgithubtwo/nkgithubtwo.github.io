let addLap = document.querySelector(".lapButton");
let showModal = document.querySelector(".modal");
let closebtn = document.querySelector(".close");
let addData = document.querySelector(".add");
let time = document.querySelector(".time");
let timer = document.querySelector(".timer");
let timer_val = document.querySelector(".timer_val");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

var time_arr = 0;

let hr;
let min;
let sec;

function stopwatch(){
  showModal.classList.remove("showModal");
   console.log(time.value);
  if (time.value == "00:00:00") {
    alert("Enter time Lap");
  } else {
    timer_val.innerHTML = time.value;
    time_arr = time.value.split(":");
    hr = time_arr[0];
    min = time_arr[1];
    sec = time_arr[2];
  }
};


const AddLap = () => {
  showModal.classList.add("showModal");
};

const closeModal = () => {
  showModal.classList.remove("showModal");
};

let stoptime = true;

const startTimer = () => {
    if(time.value == "00:00:00"){
        alert("Enter time Lap");
    }
    else{
  if (stoptime == true) {
    stoptime = false;
    timerdisplay();
  }
}
  
};

const stopTimer = () => {
  if (stoptime == false) {
    stoptime = true;
    clearTimeout(timerdisplay);
  }
};

const resetTimer = () => {
  timer_val.innerHTML = "00:00:00";
  time.value = "00:00:00";
  stoptime = true;
  clearTimeout(timerdisplay);
};

function timerdisplay() {
   
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    if (sec == 0) {
      min--;
      sec = 60;
    }

    if (min == 0) {
      if (hr > 0) {
        hr--;
        min = 60;
      }
      sec = 60;
    }

    sec--;

    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }

    if (min < 10 || min == 0) {
      min = "0" + min;
    }

    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }

    timer_val.innerHTML = hr + ":" + min + ":" + sec;
    setTimeout(timerdisplay, 1000);
  }
}

addData.addEventListener("click", stopwatch);
addLap.addEventListener("click", AddLap);
closebtn.addEventListener("click", closeModal);
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
