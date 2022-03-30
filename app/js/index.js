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

// ================================ Code ======================================
const ripples = document.querySelectorAll('.--ripple');
for (const ripple of ripples) {
  new Ripple(ripple, {
    opacity: 1,
  });
}

let header = document.querySelector('.m-header'),
  headerMobile = document.querySelector('.m-headerMenu'),
  logo = document.querySelector('.m-header__logo'),
  burger = document.querySelector('.b-burger'),
  menuItem = headerMobile.querySelectorAll('.b-textLink ');

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
  header.classList[obj]('--bg-white');
}

burger.onclick = function () {
  //onclose
  if (burger.classList.contains('--close')) {
    
    toggleMenu('remove');
    logo.classList.add('--white');
  }
  //onopen
  else {
    toggleMenu('add');
    logo.classList.remove('--white');
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
  console.log('test 1');

closefoodCarts.onclick = function () {
  popupVisible('remove', foodFirstPopup);
};
console.log('test 2');

blackOut.onclick = function () {
  popupVisible('remove', foodFirstPopup);
};
console.log('test 3');

let fitstCourseBtn = document.querySelector('.firstСourse'),
  secondCourseBtn = document.querySelector('.seondСourse'),
  sladCourseBtn = document.querySelector('.saladСourse');

fitstCourseBtn.onclick = function () {
  console.log('test');
  let set;
  set = foodFirstPopup.classList.contains('--open') ? 'remove' : 'add';
  popupVisible(set, foodFirstPopup);
};

function popupVisible(obj, popup) {
  popup.classList[obj]('--open');
  blackOut.classList[obj]('--open');
  document.body.classList[obj]('--no-scroll');
}
