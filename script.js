// grab DOM elements
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const loading = document.getElementById("loading");
const subtitle = document.getElementById("subtitle");
const audio = new Audio("campFireBurning.mp3");
const audio1 = new Audio("Campfire-sound.mp3");
const btn = document.getElementById('btn')

const body = document.getElementById("body");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
const christmasShow = new Date(`December 11 ${currentYear} 19:00:00`);

// update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = christmasShow - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // add values to DOM
  // updates site when countdown is complete
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;

  if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
    days.innerHTML = 0;
    hours.innerHTML = 0;
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;

    subtitle.innerText = "Happening now!";
    btn.style.display = "inline";
  }
}

// show spinner before countdown loads
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
  // playAudio();
}, 1000);

// run every secon
setInterval(updateCountdown, 1000);

let isPlaying = false;

function playAudio() {
  audio1.play();
  audio1.loop = true
  isPlaying = true;
}
function stopAudio() {
  audio1.pause();
  isPlaying = false;
}

document.addEventListener("click", function () {
  if (!isPlaying) {
    playAudio();
    audio1.volume = 0.2;
  } else {
    stopAudio();
  }
  console.log("The fire sounds nice doesn't it?");
});

const d = new Date();
console.log(d);

const localTime = d.getTime();
console.log(localTime);
const localOffset = d.getTimezoneOffset() * 60000;
console.log(localOffset);
function getSameCountdown( ) {
var d = new Date();

var localTime = d.getTime();

var localOffset = d.getTimezoneOffset() * 60000;

var utc = localTime + localOffset;
// obtain and add destination's UTC time offset
// for example, Bombay 
// which is UTC + 5.5 hours
var offset = 5.5;   
var bombay = utc + (3600000*offset);
console.log(`${bombay} bombay`);
}
getSameCountdown()

document.body.addEventListener('click', function (evt) {
  if (evt.target.className === 'firePlace') {
    if (!isPlaying) {
      playAudio();
      audio.volume = 0.2;
    } else {
      stopAudio();
    }
    console.log("The fire sounds nice doesn't it?");
  }
});

document.body.addEventListener('click', function (evt) {
  if (evt.target.className === 'firePlace' && !isPlaying) {
      playAudio();
      audio.volume = 0.2;
    } else {
      stopAudio();
    }
    console.log("The fire sounds nice doesn't it?");
  });

  document.body.addEventListener('click', function (evt) {
    if (evt.target.className === 'firePlace' && !isPlaying) {
        playAudio();
        audio.volume = 0.2;
      } else {
        stopAudio();
      }
      console.log("The fire sounds nice doesn't it?");
    });

    document.getElementById('firePlace').addEventListener('click', function (evt) {
 
      console.log("you clicked on the fireplace")
 }
   );
