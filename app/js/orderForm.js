import { source } from './sources';
import { popupVisible, checkForm } from './universalFunctions';
import IMask from 'imask';

let timeInput = document.querySelector('.b-timeInput');
let maskOptions = {
  overwrite: true,
  autofix: true,
  mask: 'HH:MM',
  blocks: {
    HH: {
      mask: IMask.MaskedRange,
      placeholderChar: 'HH',
      from: 12,
      to: 15,
      maxLength: 2,
    },
    MM: {
      mask: IMask.MaskedRange,
      placeholderChar: 'MM',
      from: 0,
      to: 59,
      maxLength: 2,
    },
  },
};
let mask = IMask(timeInput, maskOptions);

let phoneMask = IMask(document.querySelector('.formPhoneNumber'), {
  mask: '+{7} (000) 000-00-00',
});

let closeForm = document.querySelector('.closeForm'),
  popUpForm = document.querySelector('.m-popUpForm'),
  createOrder = document.querySelector('.createOrder'),
  blackOut = document.querySelector('.blackout');


blackOut.onclick = function () {
  popupVisible('remove', popUpForm, blackOut);
};

closeForm.onclick = function () {
  popupVisible('remove', popUpForm, blackOut);
  closeForm.classList.remove('--open');
};

createOrder.onclick = function () {
  popupVisible('add', popUpForm, blackOut);
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
  send=document.querySelector('.send'),
  error=document.querySelector('.error');

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
      if (j == valueForm.length) formBtn.removeAttribute('disabled')
      else formBtn.setAttribute('disabled', 'disabled')
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
  send.classList.add('--open')
}

