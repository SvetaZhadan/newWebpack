function popupVisible(obj, elem, blackOut) {
  elem.classList[obj]('--open');
  document.body.classList[obj]('--no-scroll');
  blackOut.classList[obj]('--open');
}

export {popupVisible}

function checkForm(item, cond) {
  
  if (cond) {
    item.classList.remove('--error');
    item.classList.add('--correct');
  } else {
    item.classList.add('--error');
    item.classList.remove('--correct');
  }
}
export {checkForm}

// function addFoodInCard(button){
// let foodPopup = document.querySelector('.m-foodCards');
// let blackOut = document.querySelector('.blackoutfoodCards');
//     popupVisible('remove',foodPopup, blackOut)
// }

// export {addFoodInCard}