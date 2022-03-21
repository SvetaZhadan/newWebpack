// ================================ Imports ======================================
//scss
import 'bootstrap/dist/css/bootstrap-grid.css';
import '../scss/index.scss';
//js
import $ from 'jquery'; //Работает
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
                opacity:1
         });
}

// $(function() {
//   let header = $(".o-navTop"),
//   textLink= $(".b-textLink"),
//   logo=$(".m-nav__logo"),
//   altLogo=$(".m-nav__logo-alt");
//   $(window).scroll(function() {    
//       let scroll = $(window).scrollTop();
  
//       if (scroll >= 10) {
//           header.removeClass('o-navTop').addClass("o-navTop-alt");
        //   textLink.removeClass('--white').addClass('--black');
//           logo.hide();
//           altLogo.show();
//       } else {
//           header.removeClass("o-navTop-alt").addClass('o-navTop');
        //   textLink.removeClass('--black').addClass('--white');
//           logo.show();
//           altLogo.hide();
//       }
//   });
// });


let menuButton = $('.b-menuButton');
menuButton.click(function(){
$('.m-header-mobile').toggle();
// $('.b-textLink').removeClass('--white');
// $('.b-textLink').addClass('--black');
});

