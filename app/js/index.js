// ================================ Imports ======================================
//scss
import 'bootstrap/dist/css/bootstrap-grid.css';
import '../scss/index.scss';
//js
// import $ from 'jquery'; //Работает
import Swiper from 'swiper'; //Работает
import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui'; //Работает
// import IMask from 'imask';
import Choices from 'choices.js';
// import autoComplete from '@tarekraafat/autocomplete.js';
import validate from 'validate.js';
import ApexCharts from 'apexcharts';
import { scrolly } from 'scrolly';
import tabs from './plugins/tabs';
// import { rippleEffect, Ripple } from 'data-ripple';
import accordion from './plugins/accordion';
import { stringify } from 'postcss';
// js files
import './autoComplete'
import './plugins/ripple'
import './header'
import './constructor'
import './accordeonSection'
import './orderForm'

// ================================ Code ======================================

let checkPopup = document.querySelector('.c-check-popup'),
header = document.querySelector('.m-header'),
logo = document.querySelector('.m-header__logo'),
constructor = document.querySelector('.m-constructor');

window.onscroll = function () {
  let windowScroll = window.scrollY + window.innerHeight,
  constructopOfTop = constructor.offsetTop;
if (windowScroll > constructopOfTop && windowScroll < constructopOfTop + constructor.clientHeight) {
  checkPopup.classList.add('--show');
} else {
  checkPopup.classList.remove('--show');
}

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
}

