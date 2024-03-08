export default function(){
  const soundTree = new Audio();
  const soundCloud = new Audio();
  const soundHouse = new Audio();
  const soundFire = new Audio();

  soundTree.src = "./sounds/Floresta.wav";
  soundCloud.src = "./sounds/Chuva.wav"
  soundHouse.src = "./sounds/Cafeteria.wav"
  soundFire.src = "./sounds/Lareira.wav"

  function pressButtonTree(){
    soundTree.play();
    soundCloud.pause();
    soundHouse.pause();
    soundFire.pause();
  }

  function pressButtonCloud(){
    soundCloud.play();
    soundTree.pause();
    soundHouse.pause();
    soundFire.pause();
  }

  function pressButtonHouse(){
    soundHouse.play();
    soundTree.pause();
    soundCloud.pause();
    soundFire.pause();
  }

  function pressButtonFire(){
    soundFire.play();
    soundTree.pause();
    soundCloud.pause();
    soundHouse.pause();
  }

  return{
    pressButtonTree,
    pressButtonCloud,
    pressButtonHouse,
    pressButtonFire
  }
}