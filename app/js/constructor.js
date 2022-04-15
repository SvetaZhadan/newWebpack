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
  for (let i = 0; i < 3; i++) {
    let selFoodParent = selectedFood[i].parentNode;
    selFoodParent.classList.remove('--active');
  }
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
let selectedFood = document.querySelectorAll('.c-selectedFood');

for (let i = 0; i < addButton.length; i++) {
  addButton[i].onclick = function () {
    getData(i);
    addFood();
    popupVisible('add', foodPopup, blackOut);
    let selFoodParent = selectedFood[i].parentNode;
    selFoodParent.classList.add('--active');
    btnNum = i;

    openInfo()
  };
}

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

//-============Закрытие попапа=========================
let closefoodCards = document.querySelector('.closefoodCards');

closefoodCards.onclick = function () {
  popupVisible('remove', foodPopup, blackOut);
  removeDivs();

  for (let i = 0; i < 3; i++) {
    let selFoodParent = selectedFood[i].parentNode;
    selFoodParent.classList.remove('--active');

    let foodCardsInfo=document.querySelector('.m-foodCardsInfo');
    foodCardsInfo.classList.remove('--open')
  }
};

//-==============Добавление карточек в попап через шаблон===========================
const template = document.querySelector('.cardTemplate'),
  content = template.content.querySelector('.c-foodCard'),
  parent = document.querySelector('.m-foodCards__container');

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
function openInfo(){
  let foodCard__wrap=document.querySelectorAll('.c-foodCard__wrap');
  let foodCardsInfo=document.querySelector('.m-foodCardsInfo');
  let infoName=foodCardsInfo.querySelector('.name')
  let infoWeight=foodCardsInfo.querySelector('.weight')
  let infoImg=foodCardsInfo.querySelector('.img')

  for (let i = 0; i < foodCard__wrap.length; i++) {
    foodCard__wrap[i].onclick=function(){
      let parent=foodCard__wrap[i].parentNode,
      name=parent.querySelector('.name').innerHTML,
      weight=parent.querySelector('.weight').innerHTML,
      img=parent.querySelector('.img').src

      infoName.innerHTML=name
      infoWeight.innerHTML=weight
      infoImg.src = img;

      foodCardsInfo.classList.add('--open')
    }
  }

  let btn=foodCardsInfo.querySelector('.btn');
  btn.onclick=function(){
    popupVisible('remove',foodPopup, blackOut)
    removeDivs()
    foodCardsInfo.classList.remove('--open')
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
  }
  
  let closeOpenInfo=foodCardsInfo.querySelector('.b-iconButton')
  closeOpenInfo.onclick=function(){
    foodCardsInfo.classList.remove('--open')
  }
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
  };
});