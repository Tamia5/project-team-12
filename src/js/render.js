// Ехпорт функцій розмітки для своїх блоків 

// Hero AH

function markup(data) {
    const CardMarkup = data => {
      const { cook, topic } = data;
      return `<div class=“swiper-slide”>
    <div class=“slider-card”>
      <div class=“chief-cook” style=“background-image: url(${cook.imgUrl})“>
      </div>
      <div class=“mini-picture-card”>
        <div class=“mini-picture” style=“background-image: url(${topic.previewWebpUrl})“></div>
        <p class=“dish-name”>
          ${topic.name}
        </p>
        <p class=“country”>
          ${topic.area}
        </p>
      </div>
      <div class=“large-picture” style=“background-image: url(${topic.previewUrl})“>
      </div>
    </div>
  </div>`;
    };
    const newCardMarkup = data.map(CardMarkup).join('');
    sliderContainer.insertAdjacentHTML('beforeend', newCardMarkup);
  }