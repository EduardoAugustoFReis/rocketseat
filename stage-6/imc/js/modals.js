export const modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal-card .title span'),
  buttonClose: document.querySelector('.modal-card button.close'),

  open() {
    modal.wrapper.classList.add('open');
  },
  close() {
    modal.wrapper.classList.remove('open'); // fechar o modal
  }
}

modal.buttonClose.onclick = () =>{
  modal.close() // fechar o modal com o button
}

window.addEventListener('keydown', handleKeydown);  

function handleKeydown(event){
  if(event.key === "Escape"){
    modal.close() // fechar o modal com "esc"
  }
}

