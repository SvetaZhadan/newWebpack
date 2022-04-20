import { popupVisible } from './universalFunctions';

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

let dinners = [
  {
    order: 1,
    food: [{}, {}, {}],
  },
];

const dinnerTemplate = document.querySelector('.dinnerTemplate');
const dinnerContainer = document.querySelector('.c-addButton__additionalGroup');
makeClone(dinnerContainer, dinnerTemplate);

const blackOut = document.querySelector('.blackoutfoodCards');
const addDinerBtn = document.querySelector('.addDinerBtn');
const foodPopup = document.querySelector('.m-foodCards');
const addButton = document.querySelectorAll('.b-addButton');
const check = document.querySelector('.c-check__check');
const closefoodCards = document.querySelector('.closefoodCards');
const template = document.querySelector('.cardTemplate'),
  content = template.content.querySelector('.c-foodCard'),
  parent = document.querySelector('.m-foodCards__container');

const btnCheckPopop = document.querySelector('.needMore'),
  checkPopup = document.querySelector('.c-check-popup');

const closeInfo = foodPopup.querySelector('.b-iconButton'),
  foodCardsInfo = document.querySelector('.m-foodCardsInfo');

const selectedFood__button = document.querySelectorAll('.c-selectedFood__button');

const sliderBtn = document.querySelectorAll('.b-quantityToggle__slider');
let activeButton;
let btnNum = 0;

addDinerBtn.onclick = () => {
  makeClone(dinnerContainer, dinnerTemplate);
  addDinner();
  removeDinners();
};

test();

check.onmouseover = () => foodHint();
check.onmouseout = () => foodHint();

//-============Закрытие попапа=========================

blackOut.onclick = closePopupFoodCards;
closefoodCards.onclick = closePopupFoodCards;

//-==============Добавление карточек в попап через шаблон===========================

btnCheckPopop.onclick = function () {
  let set = checkPopup.classList.contains('--open') ? 'remove' : 'add';
  openCheckPopup(set);
};

//-============Удаление карточки с едой на гл странице=======================

selectedFood__button.forEach((button) => {
  button.onclick = function () {
    const parent = button.parentNode.parentNode.parentNode,
      mainCont = parent.parentNode,
      btn = mainCont.querySelector('.b-addButton'),
      checkName = check.querySelector('.name'),
      checkWeight = check.querySelector('.weight');

    parent.classList.remove('--open');

    btn.classList.remove('--close');
    checkName.innerHTML = '';
    checkWeight.innerHTML = '';

    if (check.innerText == '') {
      check.classList.remove('--full');
    }
  };
});

sliderBtn.forEach((button) => {
  button.onclick = function () {
    let set = button.classList.contains('--open') ? 'remove' : 'add';
    doubleFood(set, button);
  };
});

// Создание новых (по шаблону template) карточек
function makeClone(parent, template) {
  const clone = template.content.cloneNode(true);
  parent.appendChild(clone);
}

function addDinner() {
  const childs = document.querySelectorAll('.wrap');

  dinners.push({
    order: childs.length,
    food: [{}, {}, {}],
  });

  for (const [i, child] of childs.entries()) {
    console.dir(child);

    const heading = child.querySelector('.b-controlHeading'),
      name = child.querySelector('.b-controlHeading__name');

    heading.classList.add('--open');
    name.innerHTML = `Обед ${i + 1}`;
  }
  console.log(dinners);
  test();
}

function removeDinner(index) {
  const childs = dinnerContainer.querySelectorAll('.wrap');

  dinners.splice(index, 1);

  for (const [i, child] of childs.entries()) {
    const name = child.querySelector('.b-controlHeading__name');
    name.innerHTML = `Обед ${i + 1}`;

    if (childs.length == 1) {
      const heading = child.querySelector('.b-controlHeading');
      heading.classList.remove('--open');
    }
  }
}

function visibleFoodInfo(obj) {
  removeCards();
  foodCardsInfo.classList[obj]('--open');
  closeInfo.classList[obj]('--open');
}

function addHint(obj, elem) {
  elem.classList[obj]('hover');
}

function removeCards() {
  const container = document.querySelector('.m-foodCards__container');
  const set = container.classList.contains('--close') ? 'remove' : 'add';
  container.classList[set]('--close');
}

function removeDinners() {
  const removeDinnerBtn = document.querySelectorAll('.b-controlHeading__button');

  removeDinnerBtn.forEach(
    (elem, i) =>
      (elem.onclick = function () {
        this.parentNode.parentNode.remove();
        removeDinner(i);
      })
  );
}

function getData(index) {
  data[index].forEach((card) => {
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

function test() {
  const btnsFirstCourse = document.querySelectorAll('.b-addButton.firstСourse');
  const btnsSecondCourse = document.querySelectorAll('.b-addButton.secondСourse');
  const btnsThirdSalad = document.querySelectorAll('.b-addButton.saladCourse');
  handlerTest(btnsFirstCourse, 0);
  handlerTest(btnsSecondCourse, 1);
  handlerTest(btnsThirdSalad, 2);
}

function handlerTest(btns, numberOfData) {
  const wraps = document.querySelectorAll('.wrap');

  btns.forEach((btn, i) => {
    btn.onclick = () => {
      btn.parentNode.classList.add('--active');
      wraps.forEach((wrap) => {
        // console.log('wrap', wrap, wrap.querySelector('.--active') );
      });
      dinners[i].food[numberOfData] = data[numberOfData];
      getData(numberOfData);
      addFood();
      popupVisible('add', foodPopup, blackOut);
      document.querySelector('.m-foodCards__container').classList.remove('--close');
      closeInfo.classList.remove('--open');
      btnNum = numberOfData;
      openInfo();
      activeButton = btn;
    };
  });
}

function foodHint() {
  const addButton = document.querySelectorAll('.b-addButton');
  for (const btn of addButton) {
    const set = btn.classList.contains('hover') ? 'remove' : 'add';
    addHint(set, btn);
  }
}

function addNameFood(name, newname, weight, newweight, img, newimg) {
  newname.innerHTML = name.innerHTML;
  newweight.innerHTML = weight.innerHTML;
  newimg.src = img.src;
}

function addFood() {
  const cardBtn = document.querySelectorAll('.c-foodCard__btnAdd');
  cardBtn.forEach((button) => {
    button.onclick = function () {
      check.classList.add('--full');
      addButton[btnNum].classList.add('--close');

      const foodCard = button.parentNode,
        img = foodCard.querySelector('.img'),
        name = foodCard.querySelector('.name'),
        weight = foodCard.querySelector('.weight');

      closePopupFoodCards();

      const mainCont = addButton[btnNum].parentNode,
        selectedFood = mainCont.querySelector('.c-selectedFood');
      selectedFood.classList.add('--open');

      const cardName = selectedFood.querySelector('.name'),
        cardWeight = selectedFood.querySelector('.weight'),
        cardImg = selectedFood.querySelector('.img');

      console.log(name, cardName);
      addNameFood(name, cardName, weight, cardWeight, img, cardImg);

      const checkName = check.querySelector('.name'),
        checkWeight = check.querySelector('.weight');

      addNameFood(name, checkName, weight, checkWeight);
    };
  });
}

function openInfo() {
  const foodCard__wrap = document.querySelectorAll('.c-foodCard__wrap'),
    infoName = foodCardsInfo.querySelector('.name'),
    infoWeight = foodCardsInfo.querySelector('.weight'),
    infoImg = foodCardsInfo.querySelector('.img');

  foodCard__wrap.forEach((button) => {
    button.onclick = function () {
      let parent = button.parentNode,
        name = parent.querySelector('.name'),
        weight = parent.querySelector('.weight'),
        img = parent.querySelector('.img');

      addNameFood(name, infoName, weight, infoWeight, img, infoImg);
      visibleFoodInfo('add');
    };
  });

  let btn = foodCardsInfo.querySelector('.btn');
  btn.onclick = function () {
    check.classList.add('--full');

    addButton[btnNum].classList.add('--close');

    closePopupFoodCards();
    foodCardsInfo.classList.remove('--open');
    const mainCont = addButton[btnNum].parentNode,
      selectedFood = mainCont.querySelector('.c-selectedFood');
    selectedFood.classList.add('--open');

    const cardName = selectedFood.querySelector('.name'),
      cardWeight = selectedFood.querySelector('.weight'),
      cardImg = selectedFood.querySelector('.img');

    addNameFood(infoName, cardName, infoWeight, cardWeight, infoImg, cardImg);

    const checkName = check.querySelector('.name'),
      checkWeight = check.querySelector('.weight');

    addNameFood(cardName, checkName, cardWeight, checkWeight);

    removeCards();
  };

  closeInfo.onclick = function () {
    visibleFoodInfo('remove');
  };
}

function doubleFood(obj, button) {
  const checkName = check.querySelector('.name');
  button.classList[obj]('--open');
  checkName.classList[obj]('--x2');
}

function closePopupFoodCards() {
  activeButton.parentNode.classList.remove('--active');
  popupVisible('remove', foodPopup, blackOut);
  let lastChild = parent.lastElementChild;
  while (lastChild.tagName === 'DIV') {
    parent.removeChild(lastChild);
    lastChild = parent.lastElementChild;
  }
  visibleFoodInfo('remove');
}

function openCheckPopup(obj) {
  document.body.classList[obj]('--no-scroll');
  checkPopup.classList[obj]('--open');
}
