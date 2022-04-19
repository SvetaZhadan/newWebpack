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

function makeClone(parent, template) {
  let clone = template.content.cloneNode(true);
  parent.appendChild(clone);
}

let dinnerTemplate = document.querySelector('.dinnerTemplate'),
  dinnerContainer = document.querySelector('.c-addButton__additionalGroup');
makeClone(dinnerContainer, dinnerTemplate);

function addDinner() {
  makeClone(dinnerContainer, dinnerTemplate);

  dinners.push({
    order: 1,
    food: [{}, {}, {}],
  });

  let childs = dinnerContainer.querySelectorAll('.wrap');
  for (const [i, child] of childs.entries()) {
    dinners[i].order = i + 1;

    let heading = child.querySelector('.b-controlHeading'),
      name = child.querySelector('.b-controlHeading__name');

    heading.classList.add('--open');
    name.innerHTML = `Обед ${dinners[i].order}`;
  }
  test();

}

function removeDinner(node, index) {
  node.remove();
  dinners = dinners.splice(index);

  let childs = dinnerContainer.querySelectorAll('.wrap');
  for (const [i, child] of childs.entries()) {
    dinners[i].order = i + 1;
    let name = child.querySelector('.b-controlHeading__name');
    name.innerHTML = `Обед ${dinners[i].order}`;

    if (childs.length == 1) {
      let heading = child.querySelector('.b-controlHeading');
      heading.classList.remove('--open');
    }
  }
}

let blackOut = document.querySelector('.blackoutfoodCards');

blackOut.onclick = function () {
  popupVisible('remove', foodPopup, blackOut);
  removeDivs();
  removeCards();
  foodCardsInfo.classList.remove('--open');
  closeInfo.classList.remove('--open');
};

let addDinerBtn = document.querySelector('.addDinerBtn'),
  removeDinnerBtn = document.querySelectorAll('.b-controlHeading__button');

addDinerBtn.onclick = () => {
  addDinner();
  removeDinnerBtn = document.querySelectorAll('.b-controlHeading__button');

  removeDinnerBtn.forEach(
    (elem, i) =>
      (elem.onclick = function () {
        removeDinner(this.parentNode.parentNode, i);
        removeDinnerBtn = document.querySelectorAll('.b-controlHeading__button');
      })
  );
};

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

let foodPopup = document.querySelector('.m-foodCards');
let addButton = document.querySelectorAll('.b-addButton');
let btnNum = 0;
// let selectedFood = document.querySelectorAll('.c-selectedFood');

function test() {
  let btn = document.querySelectorAll('.b-addButton');
  for (let i = 0; i < addButton.length; i++) {
    // console.log(btn.length);
    btn[i].onclick = function () {
      getData(i);
      addFood();
      popupVisible('add', foodPopup, blackOut);
      closeInfo.classList.remove('--open');
      btnNum = i;
      openInfo();
    };
  }
}

test();

function foodHint() {
  let addButton = document.querySelectorAll('.b-addButton');
  for (const btn of addButton) {
    let set = btn.classList.contains('hover') ? 'remove' : 'add';
    addButtonVisible(set, btn);
  }
}

let check = document.querySelector('.c-check__check');
check.onmouseover = () => foodHint();
check.onmouseout = () => foodHint();

function addButtonVisible(obj, elem) {
  elem.classList[obj]('hover');
}

function removeCards() {
  let container = document.querySelector('.m-foodCards__container');
  let set = container.classList.contains('--close') ? 'remove' : 'add';
  remove(set);

  function remove(obj) {
    container.classList[obj]('--close');
  }
}

//-============Закрытие попапа=========================
let closefoodCards = document.querySelector('.closefoodCards');

closefoodCards.onclick = function () {
  popupVisible('remove', foodPopup, blackOut);
  removeDivs();

  removeCards();
  foodCardsInfo.classList.remove('--open');
  closeInfo.classList.remove('--open');

  // foodCardsInfo.classList.remove('--open');
  // closeInfo.classList.remove('--open');
};

//-==============Добавление карточек в попап через шаблон===========================
const template = document.querySelector('.cardTemplate'),
  content = template.content.querySelector('.c-foodCard'),
  parent = document.querySelector('.m-foodCards__container');

let btnCheckPopop = document.querySelector('.needMore'),
  checkPopup = document.querySelector('.c-check-popup');

btnCheckPopop.onclick = function () {
  if (checkPopup.classList.contains('--open')) {
    document.body.classList.remove('--no-scroll');
    checkPopup.classList.remove('--open');
  } else {
    document.body.classList.add('--no-scroll');
    checkPopup.classList.add('--open');
  }
};

function removeDivs() {
  let lastChild = parent.lastElementChild;
  while (lastChild.tagName === 'DIV') {
    parent.removeChild(lastChild);
    lastChild = parent.lastElementChild;
  }
}

//-============Добавление данных из карточки в попапе в карточку на гл странице=========================
function addFood() {
  let cardBtn = document.querySelectorAll('.c-foodCard__btnAdd');
  cardBtn.forEach((button) => {
    button.onclick = function () {
      popupVisible('remove', foodPopup, blackOut);
      removeDivs();

      let foodCard = button.parentNode;
      let img = foodCard.querySelector('.img').src;
      let name = foodCard.querySelector('.name').innerHTML;
      let weight = foodCard.querySelector('.weight').innerHTML;
      let mainCont = addButton[btnNum].parentNode;
      let selectedFood = mainCont.querySelector('.c-selectedFood');

      selectedFood.classList.add('--open');

      let cardName = selectedFood.querySelector('.name');
      let cardWeight = selectedFood.querySelector('.weight');
      let cardImg = selectedFood.querySelector('.img');

      cardImg.src = img;
      cardName.innerHTML = name;
      cardWeight.innerHTML = weight;

      addButton[btnNum].classList.add('--close');

      let check = document.querySelector('.c-check__check');
      check.classList.add('--full');

      let checkName = check.querySelector('.name');
      let checkWeight = check.querySelector('.weight');

      checkName.innerHTML = name;
      checkWeight.innerHTML = weight;
    };
  });
}

//-=============
let closeInfo = foodPopup.querySelector('.b-iconButton');
let foodCardsInfo = document.querySelector('.m-foodCardsInfo');
function openInfo() {
  let foodCard__wrap = document.querySelectorAll('.c-foodCard__wrap');
  let infoName = foodCardsInfo.querySelector('.name');
  let infoWeight = foodCardsInfo.querySelector('.weight');
  let infoImg = foodCardsInfo.querySelector('.img');

  foodCard__wrap.forEach((button) => {
    button.onclick = function () {
      let parent = button.parentNode,
        name = parent.querySelector('.name').innerHTML,
        weight = parent.querySelector('.weight').innerHTML,
        img = parent.querySelector('.img').src;

      infoName.innerHTML = name;
      infoWeight.innerHTML = weight;
      infoImg.src = img;

      foodCardsInfo.classList.add('--open');
      closeInfo.classList.add('--open');
      removeCards();
    };
  });

  let btn = foodCardsInfo.querySelector('.btn');
  btn.onclick = function () {
    popupVisible('remove', foodPopup, blackOut);
    removeDivs();
    foodCardsInfo.classList.remove('--open');
    let mainCont = addButton[btnNum].parentNode;
    let selectedFood = mainCont.querySelector('.c-selectedFood');

    selectedFood.classList.add('--open');

    addButton[btnNum].classList.add('--close');
    let cardName = selectedFood.querySelector('.name');
    let cardWeight = selectedFood.querySelector('.weight');
    let cardImg = selectedFood.querySelector('.img');

    cardImg.src = infoImg.src;
    cardName.innerHTML = infoName.innerHTML;
    cardWeight.innerHTML = infoWeight.innerHTML;

    let check = document.querySelector('.c-check__check');
    check.classList.add('--full');

    let checkName = check.querySelector('.name');
    let checkWeight = check.querySelector('.weight');

    checkName.innerHTML = cardName.innerHTML;
    checkWeight.innerHTML = cardWeight.innerHTML;
    removeCards();
  };

  closeInfo.onclick = function () {
    removeCards();
    foodCardsInfo.classList.remove('--open');
    closeInfo.classList.remove('--open');
  };
}
//-============Удаление карточки с едой на гл странице=======================
let selectedFood__button = document.querySelectorAll('.c-selectedFood__button');

selectedFood__button.forEach((button) => {
  button.onclick = function () {
    let parent = button.parentNode.parentNode.parentNode;
    parent.classList.remove('--open');
    let mainCont = parent.parentNode;
    let btn = mainCont.querySelector('.b-addButton');
    btn.classList.remove('--close');
    let checkName = check.querySelector('.name');
    let checkWeight = check.querySelector('.weight');

    checkName.innerHTML = '';
    checkWeight.innerHTML = '';

    if (check.innerText == '') {
      check.classList.remove('--full');
    }
  };
});

function doubleFood(obj, button) {
  let checkName = check.querySelector('.name');
  button.classList[obj]('--open');
  checkName.classList[obj]('--x2');
}

let sliderBtn = document.querySelectorAll('.b-quantityToggle__slider');
sliderBtn.forEach((button) => {
  button.onclick = function () {
    let set = button.classList.contains('--open') ? 'remove' : 'add';
    doubleFood(set, button);
  };
});
