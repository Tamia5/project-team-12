import Swiper from 'swiper';
import { fetchMasterClass } from './API';
import { markUp } from './render';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const wrapper = document.querySelector(`.swiper-wrapper`)

fetchMasterClass()
  .then(data => {
    wrapper.innerHTML = markUp(data)
  })
  .catch(err => console.log(`Err SWIPER`))

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