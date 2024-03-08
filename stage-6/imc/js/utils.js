export function notNUmber(value){
  return isNaN(value) || value == "" // retorna um boolean
}

export function calculateIMC(weight,height){
  return (weight / ((height/100) **2)).toFixed(2);
}