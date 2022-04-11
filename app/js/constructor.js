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

function removeDivs() {
  let lastChild = parent.lastElementChild;
  // console.log(lastChild.tagName);
  while (lastChild.tagName === 'DIV') {
    parent.removeChild(lastChild);
    lastChild = parent.lastElementChild;
  }
}

closefoodCards.onclick = function () {
  popupVisible('remove', foodFirstPopup);
  let addButton = document.querySelectorAll('.b-addButton');
  removeDivs();
};

blackOut.onclick = function () {
  popupVisible('remove', foodFirstPopup);
  removeDivs();
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
function showCards(obj) {
  data[obj].forEach((card) => {
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

// let selectedFood__button=document.querySelector('.c-selectedFood__button')

// selectedFood__button.onclick=function(){
//   console.log('close');
//   let selectedFood=document.querySelector('.c-selectedFood'), 
//   fitstCourseBtn = document.querySelector('.firstСourse');
//   selectedFood.classList.remove('--open');
//   fitstCourseBtn.classList.remove('--close');
// }

let addButton = document.querySelectorAll('.b-addButton');

for (let i = 0; i < 3; i++) {
  let Parent=addButton[i].parentNode;
  
  addButton[i].onclick=function(){
    showCards(i);
    addFood();
    popupVisible('add', foodFirstPopup);
    
    console.log('test '+[i]);
    
    addButton[i].classList.add('--close');
    for (let i = 0; i < 3; i++) {
      let selectedFood=Parent.querySelectorAll('.c-selectedFood');
      selectedFood[i].classList.add('--open')
    }
  }
}

//--------------------------//
function addFood() {
  let cardBtn = document.querySelectorAll('.c-foodCard__btnAdd');
  cardBtn.forEach((button) => {
    
    button.onclick = function () {
      for (let i = 0; i < 3; i++) {
        // let addButton = document.querySelectorAll('.b-addButton');
        // let Parent=addButton[i].parentNode;
        // let selectedFood=Parent.querySelectorAll('.c-selectedFood');
        // console.log('selectedFood ', selectedFood[i]);

        // selectedFood[i].classList.add('--open')
    
        // console.log(Parent);
        // addButton[i].classList.add('--close');
        popupVisible('remove', foodFirstPopup);
        removeDivs();

        let foodCard=document.querySelectorAll('.c-foodCard')
        // for (let i = 0; i < 5; i++) {
          console.log(foodCard);
        // }
      }
      

      // let selectedFood__name=document.querySelector('.c-selectedFood__name'),
      // selectedFood__weight=document.querySelector('.c-selectedFood__weight'),
      // foodCard__name=content.querySelectorAll('.foodCard__name'),
      // foodCard__weight=content.querySelectorAll('.foodCard__weight');


      // for (let i = 0; i < 5; i++) {
      //   selectedFood__name.innerHTML = foodCard__name[i];
      //   selectedFood__weight.innerHTML = foodCard__weight[i];
      // }
    }
  });
}

//-------------------------//

let check = document.querySelector('.c-check__check');

function addButtonVisible() {
  let addButton = document.querySelectorAll('.b-addButton');
  for (let index = 0; index < 3; index++) {
    if (addButton[index].classList.contains('hover')) {
      addButton[index].classList.remove('hover');
    } else {
      addButton[index].classList.add('hover');
    }
  }
}

check.onmouseover = () => addButtonVisible();

check.onmouseout = () => addButtonVisible();


// let addDinerBtn = document.querySelector('.addDinerBtn'),
//   openDinner = document.querySelectorAll('.openDinner'),
//   addDiner = document.querySelector('.addDiner'),
//   closeDinner2 = document.querySelectorAll('.closeDinner2');

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

