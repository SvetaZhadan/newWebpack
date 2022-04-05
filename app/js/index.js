// ================================ Imports ======================================
//scss
import 'bootstrap/dist/css/bootstrap-grid.css';
import '../scss/index.scss';
//js
// import $ from 'jquery'; //Работает
import Swiper from 'swiper'; //Работает
import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui'; //Работает
import IMask from 'imask';
import Choices from 'choices.js';
import autoComplete from '@tarekraafat/autocomplete.js';
import validate from 'validate.js';
import ApexCharts from 'apexcharts';
import { scrolly } from 'scrolly';
import tabs from './plugins/tabs';
import { rippleEffect, Ripple } from 'data-ripple';
import accordion from './plugins/accordion';
import { stringify } from 'postcss';

// ================================ Code ======================================
let source = [
  'Москва, Нижний Сусальный переулок, 5к1',
  'Москва, Нижний Сусальный переулок, 5к2',
  'Москва, улица Горчакова, 11',
  'Москва, Павелецкая площадь, 1',
  'Москва, ул. Чехова, 81',
  'Москва, пер. Бухарестская, 74',
  'Москва, пер. Ломоносова, 72',
  'Москва, проезд Будапештсткая, 87',
  'Москва, ул. Гагарина, 63',
  'Москва, бульвар Ладыгина, 32',
  'Москва, въезд Сталина, 47',
  'Москва, ул. Гоголя, 22',
];

const autoCompleteJS = new autoComplete({
  selector: '.autoComplete',
  data: {
    src: source,
  },
  // autoComplete.js Config Options
  resultItem: {
    highlight: true,
  },

  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },

  resultsList: {
    element: (list, data) => {
      if (!data.results.length) {
        // Create "No Results" message element
        const message = document.createElement('div');
        // Add class to the created element
        message.setAttribute('class', 'no_result');
        // Add message text content
        message.innerHTML = `<span>Неверно введен адрес</span>`;
        // Append message element to the results list
        list.prepend(message);
      }
    },
    noResults: true,
  },
});

const ripples = document.querySelectorAll('.--ripple');
for (const ripple of ripples) {
  new Ripple(ripple, {
    opacity: 1,
  });
}

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

let header = document.querySelector('.m-header'),
  headerMobile = document.querySelector('.m-headerMenu'),
  logo = document.querySelector('.m-header__logo'),
  burger = document.querySelector('.b-burger'),
  menuItem = headerMobile.querySelectorAll('.b-textLink');

for (let index = 0; index < menuItem.length; index++) {
  menuItem[index].onclick = function () {
    burger.classList.remove('--close');
    document.body.classList.remove('--no-scroll');
    headerMobile.classList.remove('--active');
    header.classList.remove('--h-100per');

    let scrolled = window.pageYOffset;
    if (scrolled < 10) {
      header.classList.remove('--bg-white');
      header.classList.remove('--h-100per');
      logo.classList.add('--white');
    }
  };
}

function toggleMenu(obj) {
  document.body.classList[obj]('--no-scroll');
  burger.classList[obj]('--close');
  headerMobile.classList[obj]('--active');
  header.classList[obj]('--h-100per');
}

burger.onclick = function () {
  let scrolled = window.pageYOffset;

  //onclose
  if (burger.classList.contains('--close')) {
    toggleMenu('remove');
    if (scrolled <= 10) {
      header.classList.remove('--bg-white');
      logo.classList.add('--white');
    }
  }
  //onopen
  else {
    toggleMenu('add');
    logo.classList.remove('--white');
    header.classList.add('--bg-white');

    if (scrolled >= 10) {
      header.classList.add('--bg-white');
      logo.classList.remove('--white');
    }

    headerMobile.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

let btnCheckPopop = document.querySelector('.needMore'),
  checkPopup = document.querySelector('.c-check-popup'),
  constructor = document.querySelector('.m-constructor');

btnCheckPopop.onclick = function () {
  if (checkPopup.classList.contains('--close')) {
    checkPopup.classList.add('--open');
    checkPopup.classList.remove('--close');
    document.body.classList.add('--no-scroll');
  } else {
    checkPopup.classList.remove('--open');
    checkPopup.classList.add('--close');
    document.body.classList.remove('--no-scroll');
  }
};

window.onscroll = function () {
  let scrolled = window.pageYOffset;
  // console.log( 'Позиция скрола: '+scrolled );
  if (scrolled >= 10) {
    header.classList.add('--bg-white');
    logo.classList.remove('--white');
  }

  if (scrolled < 10) {
    header.classList.remove('--bg-white');
    logo.classList.add('--white');
  }

  let windowScroll = window.scrollY + window.innerHeight,
    constructopOfTop = constructor.offsetTop;
  if (windowScroll > constructopOfTop && windowScroll < constructopOfTop + constructor.clientHeight) {
    checkPopup.classList.add('--h-100px');
  } else {
    checkPopup.classList.remove('--h-100px');
  }
};

let closefoodCarts = document.querySelector('.closefoodCartsFirst'),
  foodFirstPopup = document.querySelector('.m-foodCartsFirst'),
  blackOut = document.querySelector('.blackout');

closefoodCarts.onclick = function () {
  popupVisible('remove', foodFirstPopup);
};

blackOut.onclick = function () {
  popupVisible('remove', foodFirstPopup);
  popupVisible('remove', popUpForm);
};

let fitstCourseBtn = document.querySelector('.firstСourse'),
  secondCourseBtn = document.querySelector('.secondСourse'),
  sladCourseBtn = document.querySelector('.saladCourse');

fitstCourseBtn.onclick = function () {
  let set;
  set = foodFirstPopup.classList.contains('--open') ? 'remove' : 'add';
  popupVisible(set, foodFirstPopup);
};
secondCourseBtn.onclick = function () {
  let set;
  set = foodFirstPopup.classList.contains('--open') ? 'remove' : 'add';
  popupVisible(set, foodFirstPopup);
};
sladCourseBtn.onclick = function () {
  let set;
  set = foodFirstPopup.classList.contains('--open') ? 'remove' : 'add';
  popupVisible(set, foodFirstPopup);
};

function popupVisible(obj, popup) {
  popup.classList[obj]('--open');
  blackOut.classList[obj]('--open');
  document.body.classList[obj]('--no-scroll');
}

let addDinerBtn = document.querySelector('.addDinerBtn'),
  openDinner = document.querySelectorAll('.openDinner'),
  addDiner = document.querySelector('.addDiner'),
  closeDinner2 = document.querySelectorAll('.closeDinner2');

addDinerBtn.onclick = function () {
  for (let index = 0; index < 5; index++) {
    openDinner[index].classList.add('--open');
    addDiner.classList.add('--open');
  }
};

closeDinner2.onclick = function () {
  for (let index = 0; index < 5; index++) {
    openDinner[index].classList.remove('--open');
  }
  addDiner.classList.remove('--open');
};

let accordeonSection = document.querySelectorAll('.c-accordeonSection');

// accordion({ query: '.c-accordeonSection__question' });

for (const element of accordeonSection) {
  let question = element.querySelector('.c-accordeonSection__question');
  let answer = element.querySelector('.c-accordeonSection__answer');
  let morph = element.querySelector('.b-morph');
  question.onclick = function () {
    if (morph.classList.contains('--open')) {
      morph.classList.remove('--open');
      answer.classList.remove('--open');
    } else {
      answer.classList.add('--open');
      morph.classList.add('--open');
    }
  };
}

let check = document.querySelector('.c-check__check'),
  addButton = document.querySelectorAll('.b-addButton');

function addButtonVisible() {
  for (let index = 0; index < 3; index++) {
    if (addButton[index].classList.contains('hover')) {
      addButton[index].classList.remove('hover');
    } else {
      addButton[index].classList.add('hover');
    }
  }
}

check.onmouseover = function () {
  addButtonVisible();
};

check.onmouseout = function () {
  addButtonVisible();
};

//form
let closeForm = document.querySelector('.closeForm'),
  popUpForm = document.querySelector('.m-popUpForm'),
  createOrder = document.querySelector('.createOrder');

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
  comment = document.querySelector('.formComment');

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

function checkForm(item, cond) {
  if (cond) {
    item.classList.remove('--error');
    item.classList.add('--correct');
  } else {
    item.classList.add('--error');
    item.classList.remove('--correct');
  }
}

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



form.onchange = function () {
  let j = 0;
  for (let i = 0; i < valueForm.length; i++) {
    if (valueForm[i].check() == true) {
      j++;
      if (j == valueForm.length) formBtn.removeAttribute('disabled');
    }
  }
};
