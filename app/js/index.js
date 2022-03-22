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

let menuButtonOpen = document.querySelector('.b-menuButton__open'),
        menuButtonClose = document.querySelector('.b-menuButton__close'),
        menuButton=document.querySelector('.b-menuButton'),
        logo=document.querySelector('.logo'),
        logoAlt=document.querySelector('.logo-alt'),
        header=document.querySelector('.m-header'),
        headerMobile=document.querySelector('.m-header-mobile'),
        actionButton=document.querySelector('.m-header__actionButton'),
        headerList=document.querySelector('.m-header__list'),
        listItem=headerList.querySelectorAll('.b-textLink'),
        listItemPhone=actionButton.querySelector('.b-textLink');

menuButtonOpen.onclick = function(){        
        headerMobile.classList.add('--active');
        // headerMobile.style.Height = 100 + 'vh';
        header.style.position="relative"
        header.classList.add('--bg-white')
        header.classList.add('menu-open')
        logo.style.display="none"
        logoAlt.style.display="block"
        menuButtonClose.style.display="block"
        menuButtonOpen.style.display="none"
        // window.scrollTo({
        //         top: 0,
        //     });

        document.body.style.overflow="hidden"
};

menuButtonClose.onclick = function(){
        headerMobile.classList.remove('--active');
        // headerMobile.style.maxHeight = 0;
        header.style.position="fixed"
        header.classList.remove('--bg-white')
        header.classList.remove('menu-open')
        logo.style.display="block"
        logoAlt.style.display="none"
        menuButtonClose.style.display="none"
        menuButtonOpen.style.display="block"
        document.body.style.overflow=""
}

window.onscroll = function() {
let scrolled = window.pageYOffset;

        console.log( 'Позиция скрола: '+scrolled );

        if (scrolled >= 10) {
                header.classList.add('--bg-white') 

                listItemPhone.classList.remove('--white')   
                listItemPhone.classList.add('--black')  
                logo.style.display="none"
                logoAlt.style.display="block"   
                menuButton.classList.remove('--white')
                menuButton.classList.add('--orange')

                for(let i=0; i<=listItem.length; i++){
                        listItem[i].classList.remove('--white')
                        listItem[i].classList.add('--black') 
                }
        }

        if (scrolled < 10){ 
                header.classList.remove('--bg-white') 

                if (header.classList.contains('menu-open')) {
                        console.log("Lf", header.classList.contains('menu-open'));
                        header.classList.add('--bg-white') 
                        logo.style.display="none"
                        logoAlt.style.display="block"   
                        menuButton.classList.remove('--white')
                        menuButton.classList.add('--orange')
                } else {
                        listItemPhone.classList.remove('--black')   
                        listItemPhone.classList.add('--white') 
                        
                        logo.style.display="block"
                        logoAlt.style.display="none"
                        menuButton.classList.add('--white')
                        menuButton.classList.remove('--orange')
                }

                for(let i=0; i<=listItem.length; i++){
                        listItem[i].classList.remove('--black')
                        listItem[i].classList.add('--white') 
                }
        }
};

