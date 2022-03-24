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
                opacity:1
         });
}


let header=document.querySelector('.m-header'),
        headerMobile=document.querySelector('.m-headerMenu'),
        logo=document.querySelector('.m-header__logo'),
        burger=document.querySelector('.b-burger');

burger.onclick=function() {
        //onclose
        if(burger.classList.contains('--close')) {
                let scrolled = window.pageYOffset;
                burger.classList.remove('--close') 
                document.body.classList.remove('--no-scroll')
                headerMobile.classList.remove('--active')

                if (scrolled < 10) {
                        header.classList.remove('--bg-white')    
                        logo.classList.add('--white')
                }
        }
        //onopen
        else {
                burger.classList.add('--close') 
                document.body.classList.add('--no-scroll')
                headerMobile.classList.add('--active')
                header.classList.add('--bg-white');
                logo.classList.remove('--white')

                headerMobile.scrollTo({
                        top:0,
                        behavior: "smooth"
                })
        }
};

window.onscroll = function() {
let scrolled = window.pageYOffset;
        // console.log( 'Позиция скрола: '+scrolled );
        if (scrolled >= 10) {
                header.classList.add('--bg-white') 
                logo.classList.remove('--white')
        }

        if (scrolled < 10){ 
                header.classList.remove('--bg-white')
                logo.classList.add('--white')
        }
};