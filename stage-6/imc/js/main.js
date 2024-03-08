import {modal} from "./modals.js"
import {alertError} from "./alert-error.js"
import {notNUmber, calculateIMC} from "./utils.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');// pegar o input
const inputHeight = document.querySelector('#height'); 

form.onsubmit = (event)=>{

  event.preventDefault();

  let weight = inputWeight.value;// pegar o valor do input
  let height = inputHeight.value;

  let weightOrHeightIsNotANumber = notNUmber(weight) || notNUmber(height); // verificar se é um tipo number

  if(weightOrHeightIsNotANumber){ // se for "true" dispara o alerta de erro
    alertError.open();
    return;
  }

  alertError.close() // retirar o alerta de erro

  let result = calculateIMC(weight,height);
  let msg = `Seu IMC é de ${result}`

  modal.message.innerHTML = msg; 
  modal.open() // abrir o modal
}

inputWeight.oninput = () => { // fechar o alerta de erro ao interagir com o input weight
  alertError.close()
}
