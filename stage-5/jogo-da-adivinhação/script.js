const screem1 = document.querySelector(".screenOne");
const screem2 =  document.querySelector(".screenTwo");

let randomNumber = Math.round((Math.random() * 10)); 
let attempts = 1;

// função callback
function handleTryClick(event){
  event.preventDefault(); // não realizar o padrão

  let inputNumber = document.querySelector("#inputNumber");

  if(Number(inputNumber.value) == randomNumber){ // verifica se o número gerado pelo click é igula ao número aleatório gerado.
    screem1.classList.add("hide");
    screem2.classList.remove("hide");
    document.querySelector(".screenTwo h2").innerText = `Acertou em ${attempts} tentativas`
  }
  inputNumber.value = "" // deixar o input em branco depois de acionar o button

  attempts++
}

// eventos

const buttonTry = document.querySelector("#buttonTry");
const buttonReset = document.querySelector("#buttonReset");

buttonTry.addEventListener("click", handleTryClick);
buttonReset.addEventListener("click", function(){
  screem1.classList.remove("hide");
  screem2.classList.add("hide");
  attempts = 1;
}
)