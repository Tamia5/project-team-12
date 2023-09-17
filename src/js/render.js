// Ехпорт функцій розмітки для своїх блоків

// Hero AH 
function markUp(arr) {
  return arr.map(({ cook:{imgUrl }, topic:{imgWebpUrl, name, area, previewUrl} }) =>
    ` <div class= "swiper-slide">
    <div class="slider-card">
      <div class="chief-cook">
      </div>
      <div class="mini-picture-card">
        <div class="mini-picture">
          <img src="${imgUrl}" alt="${name}" width="200" height="200">
        </div>
        <p class="dish-name">
          ${name}
        </p>
        <p class="country">
          ${area}
        </p>
      </div>
      <div class="large-picture">
        <img src="${imgWebpUrl}" alt="" width="100" height="100">
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