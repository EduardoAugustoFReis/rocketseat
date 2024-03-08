import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { elements } from "./configs.js";
import sound from "./sound.js";
let userSelectedMinutes;

const {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
} = elements

const sounds = sound()

const controls = Controls( {buttonPlay, buttonPause, buttonSet, buttonStop} );

const timer = Timer( {minutesDisplay, secondsDisplay, resetDisplayControls: controls.resetDisplayControls}, userSelectedMinutes );

buttonPlay.addEventListener("click", function(){
  controls.play()
  timer.countDown();
  sounds.pressButton();
})

buttonPause.addEventListener("click", function(){
  controls.pause()
  timer.hold()
  sounds.pressButton();
})

buttonStop.addEventListener("click", function(){
  controls.resetDisplayControls();
  timer.resetTimer();
  sounds.pressButton();
})

buttonSoundOn.addEventListener("click", function(){
  buttonSoundOn.classList.add("hide");
  buttonSoundOff.classList.remove("hide");
  sounds.bgAudio.play();
})

buttonSoundOff.addEventListener("click", function(){
  buttonSoundOff.classList.add("hide");
  buttonSoundOn.classList.remove("hide");
  sounds.bgAudio.pause();
})

buttonSet.addEventListener("click", function(){
  let newMinutes = controls.getMinutes()
  if(!newMinutes){
    timer.resetTimer();
    return
  }
  userSelectedMinutes = newMinutes;
  timer.updateTimerDisplay(userSelectedMinutes,0);
  timer.updateMinutes(userSelectedMinutes);
})