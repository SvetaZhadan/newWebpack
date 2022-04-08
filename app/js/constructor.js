import { popupVisible } from './functions';
const template = document.querySelector('.cardTemplate'),
  content = template.content.querySelector('.c-foodCard'),
  parent = document.querySelector('.m-foodCardsFirst__container');

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

let closefoodCards = document.querySelector('.closefoodCardsFirst'),
  foodFirstPopup = document.querySelector('.m-foodCardsFirst'),
  blackOut = document.querySelector('.blackout');

closefoodCards.onclick = function () {
  popupVisible('remove', foodFirstPopup);
};

blackOut.onclick = function () {
  popupVisible('remove', foodFirstPopup);
};

const data = [
  [
    {
      name: '{ПЕРВОЕ}Свиная шея в ароматных специях',
      weight: '200 г - 125 ккал',
      img: '../assets/icons/Card-Image1.png',
    },

    {
      name: 'Бифстейк из говядины с гелем из желтка',
      weight: '250 г - 125 ккал / 2500 г - 125 ккал',
      img: '../assets/icons/Card-Image2.png',
    },
    {
      name: 'Томлёное седло ягнёнка с овощами в перечной карамели',
      weight: '2500 г - 125 ккал',
      img: '../assets/icons/Card-Image3.png',
    },
    {
      name: 'Говяжьи щёчки с соусом из рябины и ризотто из сельдерея',
      weight: '2500 г - 125 ккал',
      img: '../assets/icons/Card-Image4.png',
    },
    {
      name: 'Баранина на рёбрах',
      weight: '400 г - 125 ккал / 2500 г - 125 ккал',
      img: '../assets/icons/Card-Image5.png',
    },
  ],

  [
    {
      name: '{ВТОРОЕ}Свиная шея в ароматных специях',
      weight: '200 г - 125 ккал',
      img: '../assets/icons/Card-Image1.png',
    },

    {
      name: 'Бифстейк из говядины с гелем из желтка',
      weight: '250 г - 125 ккал / 2500 г - 125 ккал',
      img: '../assets/icons/Card-Image2.png',
    },
    {
      name: 'Томлёное седло ягнёнка с овощами в перечной карамели',
      weight: '2500 г - 125 ккал',
      img: '../assets/icons/Card-Image3.png',
    },
    {
      name: 'Говяжьи щёчки с соусом из рябины и ризотто из сельдерея',
      weight: '2500 г - 125 ккал',
      img: '../assets/icons/Card-Image4.png',
    },
    {
      name: 'Баранина на рёбрах',
      weight: '400 г - 125 ккал / 2500 г - 125 ккал',
      img: '../assets/icons/Card-Image5.png',
    },
  ],
  [
    {
      name: '{САЛАТ}Свиная шея в ароматных специях',
      weight: '200 г - 125 ккал',
      img: '../assets/icons/Card-Image1.png',
    },

    {
      name: 'Бифстейк из говядины с гелем из желтка',
      weight: '250 г - 125 ккал / 2500 г - 125 ккал',
      img: '../assets/icons/Card-Image2.png',
    },
    {
      name: 'Томлёное седло ягнёнка с овощами в перечной карамели',
      weight: '2500 г - 125 ккал',
      img: '../assets/icons/Card-Image3.png',
    },
    {
      name: 'Говяжьи щёчки с соусом из рябины и ризотто из сельдерея',
      weight: '2500 г - 125 ккал',
      img: '../assets/icons/Card-Image4.png',
    },
    {
      name: 'Баранина на рёбрах',
      weight: '400 г - 125 ккал / 2500 г - 125 ккал',
      img: '../assets/icons/Card-Image5.png',
    },
  ],
];

function showCards(){

  data[0].forEach((card) => {
    const elem = document.importNode(content, true);
    for (const key in card) {
      if (key === 'img') {
        elem.querySelector('.img').src = card.img;
      } else {
        elem.querySelector('.' + key).textContent = card[key];
      }
    }
    parent.appendChild(elem);
  });
}

let fitstCourseBtn = document.querySelectorAll('.firstСourse'),
  secondCourseBtn = document.querySelectorAll('.secondСourse'),
  sladCourseBtn = document.querySelectorAll('.saladCourse');

for (const btn of fitstCourseBtn) {
  btn.onclick = function () {
    let set;
    set = foodFirstPopup.classList.contains('--open') ? 'remove' : 'add';
    popupVisible(set, foodFirstPopup);
    showCards()

  };
}
// for (let i = 0; i < 3; i++) {
//   addButton[i].onclick = function () {
//     console.log(i);

//     const template = document.querySelector('.cardTemplate'),
//       content = template.content.querySelector('.c-foodCard'),
//       parent = document.querySelector('.m-foodCardsFirst__container');

//     data[i].forEach((card) => {
//       const elem = document.importNode(content, true);
//       for (const key in card) {
//         if (key === 'img') {
//           elem.querySelector('.img').src = card.img;
//         } else {
//           elem.querySelector('.' + key).textContent = card[key];
//         }
//       }
//       parent.appendChild(elem);
//     });

//     data[i].length = 0;

//     let cardBtn = document.querySelectorAll('.c-foodCard__btnAdd');
//     for (let i = 0; i < cardBtn.length; i++) {
//       cardBtn[i].onclick = function () {
//         popupVisible('remove', foodFirstPopup);
//       };
//     }

//     // fitstCourseBtn.onclick = function () {
//     //   let set;
//     //   set = foodFirstPopup.classList.contains('--open') ? 'remove' : 'add';
//     //   popupVisible(set, foodFirstPopup);

//     // };
//   };
// }

// const template = document.querySelector('.cardTemplate'),
//   content = template.content.querySelector('.c-foodCard'),
//   parent = document.querySelector('.m-foodCardsFirst__container');

// data[0].forEach((card) => {
//   const elem = document.importNode(content, true);
//   for (const key in card) {
//     if (key === 'img') {
//       elem.querySelector('.img').src = card.img;
//     } else {
//       elem.querySelector('.' + key).textContent = card[key];
//     }
//   }
//   parent.appendChild(elem);
// });

// let cardBtn = document.querySelectorAll('.c-foodCard__btnAdd');

// for (let i = 0; i < cardBtn.length; i++) {
//   cardBtn[i].onclick = function () {
//     popupVisible('remove', foodFirstPopup);
// }
// }

// fitstCourseBtn.onclick = function () {
//   let set;
//   set = foodFirstPopup.classList.contains('--open') ? 'remove' : 'add';
//   popupVisible(set, foodFirstPopup);

// };

// secondCourseBtn.onclick = function () {

//   let set;
//   set = foodFirstPopup.classList.contains('--open') ? 'remove' : 'add';
//   popupVisible(set, foodFirstPopup);

// };

// sladCourseBtn.onclick = function () {
//   let set;
//   set = foodFirstPopup.classList.contains('--open') ? 'remove' : 'add';
//   popupVisible(set, foodFirstPopup);
// };

let addDinerBtn = document.querySelector('.addDinerBtn'),
  openDinner = document.querySelectorAll('.openDinner'),
  addDiner = document.querySelector('.addDiner'),
  closeDinner2 = document.querySelectorAll('.closeDinner2');

// addDinerBtn.onclick = function () {
//   for (let index = 0; index < 5; index++) {
//     openDinner[index].classList.add('--open');
//     addDiner.classList.add('--open');
//   }
// };

// closeDinner2.onclick = function () {
//   for (let index = 0; index < 5; index++) {
//     openDinner[index].classList.remove('--open');
//   }
//   addDiner.classList.remove('--open');
// };

let check = document.querySelector('.c-check__check');

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
