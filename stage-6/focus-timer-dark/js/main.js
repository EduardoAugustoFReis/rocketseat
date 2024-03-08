import sounds from "./sounds.js";
import soundsDarkMode from "./soundsDarkMode.js";

const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

const darkPlay = document.querySelector('.play-dark');
const darkStop = document.querySelector('.stop-dark');
const darkPlus = document.querySelector(".plus-dark");
const darkMinus = document.querySelector(".minus-dark");

const minutesDisplayDark = document.querySelector('.minutes-dark');
const secondsDisplayDark = document.querySelector('.seconds-dark');


const buttonSun = document.querySelector(".light-button");
const buttonMoon = document.querySelector(".dark-button");

const light = document.querySelector(".screen1");
const dark = document.querySelector(".screen2");

const buttonTree = document.querySelector(".tree");
const buttonCloud = document.querySelector(".cloud");
const buttonHouse = document.querySelector(".house");
const buttonFire = document.querySelector(".fire");

const darkTree = document.querySelector(".tree-dark");
const darkCloud = document.querySelector(".cloud-dark");
const darkHouse = document.querySelector(".house-dark");
const darkFire = document.querySelector(".fire-dark");


const bgSound = sounds();
const bgSoundDark = soundsDarkMode();

let timeOut;
let timeOutDark;

function countdown(){
  timeOut = setTimeout(function() {
    let seconds =  Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    if(minutes <=0){ // ponto de parada
      secondsDisplay.textContent = "00";
      return;
    }

    if( seconds <= 0 ) {
      seconds = 60;
      minutesDisplay.textContent = String(minutes - 1).padStart(2,"0"); // atualiza os minutos para menos 1
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2,"0"); // atualiza os segundos para menos 1
    
    countdown()
  }, 1000)
}

function countdownDark(){
  timeOutDark = setTimeout(function(){
    let seconds = Number(secondsDisplayDark.textContent);
    let minutes = Number(minutesDisplayDark.textContent);

    if(minutes <= 0){
      secondsDisplayDark = "00";
      return
    }

    if(seconds <=0){
      seconds = 60;
      minutesDisplayDark.textContent = String(minutes - 1).padStart(2,"0");
    }
    secondsDisplayDark.textContent = String(seconds - 1).padStart(2, "0");

    countdownDark()
  },1000)
}

function updateTimePlus(){
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5;
}

function updateTimePlusDark(){
  minutesDisplayDark.textContent = Number(minutesDisplayDark.textContent) + 5;
}

function updateTimeMinus(){
  minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5;
  
  if(minutesDisplay.textContent <= 0){
    minutesDisplay.textContent = "00"
  }
}

function updateTimeMinusDark(){
  minutesDisplayDark.textContent = Number(minutesDisplayDark.textContent) - 5;
  if(minutesDisplayDark.textContent <=0){
    minutesDisplayDark.textContent = "00";
  }
}

buttonPlay.addEventListener("click", function(){
  countdown();
});

buttonStop.addEventListener("click", function(){
  clearTimeout(timeOut); // parada da função setTimeout
})

buttonPlus.addEventListener("click", function(){
  updateTimePlus(); // soma 5 minutos
})

buttonMinus.addEventListener("click", function(){
  updateTimeMinus(); // subtrai 5 minutos
})

buttonTree.addEventListener("click", function(){
  bgSound.pressButtonTree()
})

buttonCloud.addEventListener("click", function(){
  bgSound.pressButtonCloud();
})

buttonHouse.addEventListener("click", function(){
  bgSound.pressButtonHouse();
})

buttonFire.addEventListener("click", function(){
  bgSound.pressButtonFire();
})

buttonSun.addEventListener("click", function(){
  light.classList.add("hide");
  dark.classList.remove("hide");
  document.body.style.backgroundColor = "black";
})

buttonMoon.addEventListener("click", function(){
  light.classList.remove("hide")
  dark.classList.add("hide");
  document.body.style.backgroundColor = "white";
})

darkPlay.addEventListener("click", function(){
  countdownDark()
})

darkStop.addEventListener("click", function(){
  clearTimeout(timeOutDark);
})

darkPlus.addEventListener("click", function(){
  updateTimePlusDark();
})

darkMinus.addEventListener("click", function(){
  updateTimeMinusDark();
})

darkTree.addEventListener("click", function(){
  bgSoundDark.darkButtonTree();
})

darkCloud.addEventListener("click", function(){
  bgSoundDark.darkButtonCloud();
})

darkHouse.addEventListener("click", function(){
  bgSoundDark.darkButtonHouse();
})

darkFire.addEventListener("click", function(){
  bgSoundDark.darkButtonFire();
})