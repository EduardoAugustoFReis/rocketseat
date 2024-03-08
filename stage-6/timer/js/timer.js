// função factory -> retorna um objeto


export function Timer( {minutesDisplay, secondsDisplay, resetDisplayControls, userSelectedMinutes} ){ //injeção de dependência

  let timeTimerOut;
  function updateTimerDisplay(minutes,seconds){
    minutesDisplay.textContent = String(minutes).padStart(2,"0");
    secondsDisplay.textContent = String(seconds).padStart(2,"0");
  }
  
  function resetTimer(){
    updateTimerDisplay(userSelectedMinutes,0) // passar os minutos e segundos
    clearTimeout(timeTimerOut); // força a parada da contagem
  }
  
  function countDown(){
    timeTimerOut = setTimeout(function(){
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
  
      updateTimerDisplay(minutes, 0);
      
      if(minutes <=0){
        resetDisplayControls(); // minutos zerados reseta o display   
        return // fim do timer
      }
  
      if(seconds <=0){
        seconds = 60;
        minutesDisplay.textContent = String(minutes-1).padStart(2,"0"); //decresce os minutos
      }
  
      secondsDisplay.textContent = String(seconds -1).padStart(2,"0");//decresce os segundos
  
      countDown()//função recursiva
    }, 1000)
  }

  function updateMinutes(newMinutes){
    userSelectedMinutes = newMinutes;
  }

  function hold(){
    clearTimeout(timeTimerOut);
  }

  return {
    countDown,
    resetTimer,
    updateTimerDisplay,
    updateMinutes,
    hold
  }
}

