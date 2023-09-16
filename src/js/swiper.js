import Swiper from 'swiper';
import axios from 'axios';
import { Pagination, Navigation, Autoplay, Parallax } from 'swiper/modules';
import { markup } from './render';
// import 'swiper/swiper-bundle.min.css';



const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 800,

  pagination: {
    el: '.swiper-pagination',
    allowSlideNext: true,
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 1500,
  },

  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});