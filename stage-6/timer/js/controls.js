// function factory controls

export function Controls( {buttonPlay, buttonPause, buttonSet, buttonStop} ){

  function play(){
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    buttonSet.classList.add("hide");
    buttonStop.classList.remove("hide");

  }

  function pause(){
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  function resetDisplayControls(){
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
    buttonStop.classList.add("hide");
    buttonSet.classList.remove("hide");
  }

  function getMinutes(){
    let userMinutes = prompt("Quantos minutos para o timer?");
    if(!userMinutes){
      return false;
    }
    return userMinutes;
  }

  return {
    resetDisplayControls,
    play,
    pause,
    getMinutes
  }
}

