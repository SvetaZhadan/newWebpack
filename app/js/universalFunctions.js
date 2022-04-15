function popupVisible(obj, elem, blackOut) {
  elem.classList[obj]('--open');
  document.body.classList[obj]('--no-scroll');
  blackOut.classList[obj]('--open');
}

export {popupVisible}
let formBtn = document.querySelector('.m-popUpForm__button'); 

function checkForm(item, cond) {
  
  if (cond) {
    item.classList.remove('--error');
    item.classList.add('--correct');
  } else {
    item.classList.add('--error');
    item.classList.remove('--correct');
    formBtn.setAttribute('disabled');
  }
}
export {checkForm}

