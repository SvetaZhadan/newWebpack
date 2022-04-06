import { source } from './sources';
import { popupVisible, checkForm } from './functions';


let closeForm = document.querySelector('.closeForm'),
  popUpForm = document.querySelector('.m-popUpForm'),
  createOrder = document.querySelector('.createOrder'),
  blackOut = document.querySelector('.blackout');


blackOut.onclick = function () {
  popupVisible('remove', popUpForm);
};

closeForm.onclick = function () {
  popupVisible('remove', popUpForm);
  closeForm.classList.remove('--open');
};

createOrder.onclick = function () {
  popupVisible('add', popUpForm);
  closeForm.classList.add('--open');
};

let form = document.querySelector('.formCheckOut'),
  name = document.querySelector('.formName'),
  address = document.querySelector('.formAddress'),
  phoneNumber = document.querySelector('.formPhoneNumber'),
  formBtn = document.querySelector('.m-popUpForm__button'),
  time = document.querySelector('.formTime'),
  comment = document.querySelector('.formComment'),
  load=document.querySelector('.load'),
  send=document.querySelector('.send');


let valueForm = [
  {
    item: name,
    check() {
      return this.item.value.length >= 2;
    },
  },
  {
    item: phoneNumber,
    check() {
      return this.item.value.length == 18;
    },
  },
  {
    item: address,
    check() {
      return source.some((element) => element == this.item.value);
    },
  },
  {
    item: comment,
    check() {
      return this.item.value.length >= 0;
    },
  },
  {
    item: time,
    check() {
      return this.item.value.length == 5;
    },
  },
];

// function checkForm(item, cond) {
//   if (cond) {
//     item.classList.remove('--error');
//     item.classList.add('--correct');
//   } else {
//     item.classList.add('--error');
//     item.classList.remove('--correct');
//   }
// }


valueForm[2].item.onchange = () => {
  checkForm(valueForm[2].item, valueForm[2].check());
};

valueForm[0].item.oninput = () => {
  valueForm[0].item.value = valueForm[0].item.value.replace(/[^а-яА-ЯёЁa-zA-Z]/g, '');

  checkForm(valueForm[0].item, valueForm[0].check());
};

valueForm.forEach((element) => {
  if (!element.item.classList.contains('formName')) element.item.oninput = () => checkForm(element.item, element.check());
});

form.oninput = function () {
  let j = 0;
  for (let i = 0; i < valueForm.length; i++) {
    if (valueForm[i].check() == true) {
      j++;
      if (j == valueForm.length) formBtn.removeAttribute('disabled');
    }
  }
};

//отмена отправки формы на enter
form.addEventListener('keydown', function (event) {
  if (event.keyCode == 13) {
    event.preventDefault();
  }
});

formBtn.onclick=function(){
  
  if(!load.classList.contains('--open')){
    load.classList.add('--open')
    popUpForm.classList.add('--no-scroll')
    
    formBtn.setTimeout(send.classList.add('--open'), 3000);
  }

}

