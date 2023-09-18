// main.js
import { fetchMasterClass } from './API';
import { markUp } from './render';

import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const wrapper = document.querySelector('.swiper-wrraper-hero');

export async function loadData() {
  try {
    const events = await fetchMasterClass();
    const markUpHero = markUp(events);
    wrapper.innerHTML = markUpHero;

    const heroSwiper = new Swiper('.swiper-hero', {
      slidesPerView: 0.7,
      spaceBetween: 40,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

// Ініціалізація слайдера з окремим файлом та розміткою
const swiperContainer = document.querySelector('.swiper-wrapper');

fetchMasterClass()
  .then(data => {
    if (data.length === 0) {
      return;
    }
    swiperContainer.innerHTML = markUp(data);

    const heroSlider = new Swiper('.swiper-hero', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 0.7,
      spaceBetween: 40,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  })
  .catch(err => {
    console.log(err);
  });
