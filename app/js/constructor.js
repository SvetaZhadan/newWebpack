import { popupVisible } from './functions';

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

let temp = document.getElementsByTagName("template")[1];
let clon = temp.content.cloneNode(true);
document.querySelector('.c-addButton__additionalGroup').appendChild(clon);
let addDinerBtn=document.querySelector('.addDinerBtn');

addDinerBtn.onclick=function(){
  
  let temp = document.getElementsByTagName("template")[1];
  let clon = temp.content.cloneNode(true);
  
  document.querySelector('.c-addButton__additionalGroup').appendChild(clon);
  for (let i = 0; i <= 5; i++) {    

    let heading=document.querySelectorAll('.b-controlHeading');
    let name=document.querySelectorAll('.b-controlHeading__name');
    heading[i].classList.add('--open')
    name[i].innerHTML="Обед "+i
  }
}

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
  while (lastChild.tagName === 'DIV') {
    parent.removeChild(lastChild);
    lastChild = parent.lastElementChild;
  }
}

closefoodCards.onclick = function () {
  popupVisible('remove', foodFirstPopup);
  removeDivs();

  for (let i = 0; i < 3; i++) {    
    let selFoodParent=selectedFood[i].parentNode;
      selFoodParent.classList.remove('--active')
  }
};

blackOut.onclick = function () {
  popupVisible('remove', foodFirstPopup);
  removeDivs();
};

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

let addButton = document.querySelectorAll('.b-addButton');
let selectedFood=document.querySelectorAll('.c-selectedFood')  
let btnNum=0;
for (let i = 0; i < 3; i++) {
  let Parent=addButton[i].parentNode;
  
  addButton[i].onclick=function(){
    showCards(i);
    addFood();
    popupVisible('add', foodFirstPopup);
    let selFoodParent=selectedFood[i].parentNode;
    // console.log('test '+[i]);
    selFoodParent.classList.add('--active')
    btnNum=i;
  }
}

//--------------------------//
function addFood() {
  let cardBtn = document.querySelectorAll('.c-foodCard__btnAdd');
  cardBtn.forEach((button) => {
    button.onclick = function () {
      
      popupVisible('remove', foodFirstPopup);
      removeDivs();

      let foodCard=button.parentNode
      let img=foodCard.querySelector('.img')
      let name=foodCard.querySelector('.name').innerHTML
      let weight=foodCard.querySelector('.weight').innerHTML   
      let mainCont=addButton[btnNum].parentNode
      let selectedFood=mainCont.querySelector('.c-selectedFood')

      selectedFood.classList.add('--open')

      let cardName=selectedFood.querySelector('.name')
      let cardWeight=selectedFood.querySelector('.weight')
      let cardImg=selectedFood.querySelector('.img')

      cardImg.src=img.src;
      cardName.innerHTML=name;
      cardWeight.innerHTML=weight;
      addButton[btnNum].classList.add('--close')
      
      let check=document.querySelector('.c-check__check')
      check.classList.add('--full')

      let checkName=check.querySelector('.name')
      let checkWeight=check.querySelector('.weight')

      checkName.innerHTML=name;
      checkWeight.innerHTML=weight;
    }
  });
}

let selectedFood__button=document.querySelectorAll('.c-selectedFood__button')

selectedFood__button.forEach((button) => {

button.onclick=function(){
  console.log('test');
  let parent=button.parentNode.parentNode.parentNode
  parent.classList.remove('--open')
  let mainCont=parent.parentNode
  let btn=mainCont.querySelector('.b-addButton')
  btn.classList.remove('--close')
}
})
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

//---------------------------------------------//

