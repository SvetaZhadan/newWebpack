import { popupVisible } from './functions';

let btnCheckPopop = document.querySelector('.needMore'),
  checkPopup = document.querySelector('.c-check-popup');

  btnCheckPopop.onclick = function () {
  if (checkPopup.classList.contains('--open')) {
    checkPopup.classList.remove('--open');
    document.body.classList.add('--no-scroll');
  } else {
    checkPopup.classList.add('--open');
    document.body.classList.remove('--no-scroll');
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


const template = document.querySelector('.c-foodCard');
const cardTemplate = template.querySelector('.c-foodCard__container');

getData().forEach(card => {
  console.log('test 1');
  const cardElem = document.importNode(cardTemplate, true);
  for (const key in card) {
    if (key === 'img') {
      cardElem.querySelector('.img').src = card.img;
    } else {
      cardElem.querySelector('.' + key).textContent = card[key];
    }

  }
  document.body.appendChild(cardElem)


});

function getData() {
  return [
    {
      "name": "Dodge123",
      "weight": 1967,
      "img": "/images/car-1" 
    },
    {
      "name": "Cadillac",
      "weight": 1968,
      "img": "/images/car-2" 
    },
  ];
}


// let cardFirst=[
//   {
//   name:'Свиная шея в ароматных специях',
//   weight:'200 г - 125 ккал'
//   },

//   {
//     name:'Бифстейк из говядины с гелем из желтка',
//     weight:'250 г - 125 ккал / 2500 г - 125 ккал'
//   },
//   {
//     name:'Томлёное седло ягнёнка с овощами в перечной карамели',
//     weight:'2500 г - 125 ккал'
//   },
//   {
//     name:'Говяжьи щёчки с соусом из рябины и ризотто из сельдерея',
//     weight:'2500 г - 125 ккал'
//   },
//   {
//     name:'Баранина на рёбрах',
//     weight:'400 г - 125 ккал / 2500 г - 125 ккал'
//   },
// ]
