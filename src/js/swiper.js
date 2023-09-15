import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';

const sliderContainer = document.querySelector('.events');

function events() {
  fetch(`https://tasty-treats-backend.p.goit.global/api/events`)
    .then(res => res.json())
    .then(res => {
      markup(res);
      const swiper = new Swiper('.swiper', {
        modules: [Pagination, Navigation, Autoplay, Parallax],
        allowSlideNext: true,
        pagination: {
          el: '.slider-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 2500,
        },
        parallax: true,
        speed: 1000,
    
        loop: true,
      });
    }).catch(error => console.error('Error:', error)) 
}
events();

