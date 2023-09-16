// Ехпорт функцій розмітки для своїх блоків 

// Hero AH
const sliderContainer = document.querySelector('.events');
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
export {markup}
  
// Search-recipes
function createMarkup(arr) {
    return arr.map(({ description, preview, rating, tags, title, }) =>
        ` <a href=" "><svg class="categories-svg" width="12" height="12">
        <use href=""></use>
    </svg>
    <li class="categories-item">
        <img src="${preview}" alt="${tags}" class="categories-image" width="100" height="100">
    </li>
    <h3 class="categories-title">${title}</h3>
    <p class="categories-text">${description}</p>
    <div class="categories-rating">
        <span class="categories-number">${rating}</span>
        <svg class="categories-svg" width="12" height="12">
            <use href=""></use>
        </svg>
    </div>
    <button class="categories-btn">See recipe</button>
</a>
        `).join('')
}  
export { createMarkup };
  
function createForm(arr) {
    return arr.map(({_id, name }) => `
    <option value="${name}">${name}</option>
    `).join(``)
}
export { createForm }