// Ехпорт функцій розмітки для своїх блоків

// Hero AH 
function markUp(arr) {
  return arr.map(({ cook:{imgUrl }, topic:{imgWebpUrl, name, area, previewUrl} }) =>
    ` <div class= "swiper-slide">
    <div class="slider-card">
      <div class="chief-cook">
      <img src="${imgUrl}" width="400" height="500">
      </div>
      <div class="mini-picture-card">
        <div class="mini-picture">
          <img alt="${name}" width="400" height="500">
        </div>
        <p class="dish-name">
          ${name}
        </p>
        <p class="country">
          ${area}
        </p>
      </div>
      <div class="large-picture">
        <img src="${imgWebpUrl}" alt="" width="400" height="500">
      </div>
    </div>
  </div>`
  ).join(` `)
}
export {markUp} 
// Search-recipes
                // ВІДМАЛЬОВКА КАРТОЧОК \\
function createMarkup(arr) {
    return arr.map(({ description, preview, rating, tags, title, }) =>
        `<li class="categories-list">
    <a href=" " class="categories-link">
        <img src="${preview}" alt="${tags}" class="categories-image">
        <div class="image-filter"></div>
        <svg class="categories-svg">
            <use href="./icons.svg#icon-heart"></use>
        </svg>

        <div class="categories-text">
    <h3 class="title-text">${title}</h3>
    <p class="subtitle-text">${description}</p>
        </div>
        <div class="categories-rating">
            <span class="number-rating">${rating}</span>
            <svg class="svg-rating" >
                <use href="./icons.svg#icon-stars"></use>
            </svg>
             <button class="categories-btn">See recipe</button>
        </div>
       
    </a>
</li>`).join('')

}  
export { createMarkup };
  
          // ВІДМАЛЬОВКА КРАЇН \\
function createArea(arr) {
    return arr.map(({ name }) => `
    <option value="${name}">${name}</option>
    `).join(``)
}
export { createArea }
          // ВІДМАЛЬОВКА ІНГРИДІЄНТІВ \\
function createIng(arr) {
    return arr.map(({_id, name }) => `
    <option value="${_id}">${name}</option>
    `).join(``)
}
export { createIng }