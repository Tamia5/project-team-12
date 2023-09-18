// Ехпорт функцій розмітки для своїх блоків

// Hero AH 
// function markUp(arr) {
//   return arr.map(({ cook:{imgUrl }, topic:{imgWebpUrl, name, area, previewUrl} }) =>
//     ` <div class= "swiper-slide">
//     <div class="slider-card">
//       <div class="chief-cook">
//       <img src="${imgUrl}" width="400" height="500">
//       </div>
//       <div class="mini-picture-card">
//         <div class="mini-picture">
//           <img alt="${name}" width="137px">
//         </div>
//         <p class="dish-name">
//           ${name}
//         </p>
//         <p class="country">
//           ${area}
//         </p>
//       </div>
//       <div class="large-picture">
//         <img src="${imgWebpUrl}" alt="" width="351"">
//       </div>
//     </div>
//   </div>`
//   ).join(` `)
// }
// export {markUp} 
export function markUp(arr) {
  return arr
    .map(
      ({ cook, topic }) => `
                <div class="swiper-slide hero-event">
                        <div class="hero-block-chief">
                            <picture>
                                <source srcset="${cook.imgWebpUrl}" type="image/webp" />
                                <img class="hero-block-chief-img" src="${cook.imgUrl}" alt="${cook.name}" loading="lazy" />
                            </picture>
                        </div>
                        <div class="hero-block-event">
                    
                                <picture>
                                    <source srcset="${topic.previewWebpUrl}" type="image/webp" />
                                    <img class="hero-block-event-img" src="${topic.previewUrl}" alt="${topic.name}" loading="lazy" />
                                </picture>
                                <p class="hero-block-title">${topic.name}</p>
                                <p class="hero-block-text">${topic.area}</p>
                        
                        </div>
                        <div class="hero-block-meal">
                            <picture>
                                <source srcset="${topic.imgWebpUrl}" type="image/webp" />
                                <img class="hero-block-meal-img" src="${topic.imgUrl}" alt="${topic.name}" loading="lazy" />
                            </picture>
                        </div>
                    </div>`
    )
    .join('');
}
// Search-recipes
                // ВІДМАЛЬОВКА КАРТОЧОК \\
import sprite from '/icons.svg'
console.log(sprite)

function createMarkup(arr) {
    return arr.map(({ description, preview, rating, tags, title, }) =>
        `<li class="categories-list">
    <a href=" " class="categories-link">
        <img src="${preview}" alt="${tags}" class="categories-image">
        <div class="image-filter"></div>
        <svg class="categories-svg">
            <use href="${sprite}#icon-heart"></use>
        </svg>
        <div class="categories-text">
    <h3 class="title-text">${title}</h3>
    <p class="subtitle-text">${description}</p>
        </div>
        <div class="categories-rating">
            <span class="number-rating">${rating}</span>
            <svg class="svg-rating" >
                <use href='${sprite}#rating'></use>
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

// ВІДМАЛЬОВКА КАТЕГОРІЙ \\

function renderCategories(categories, categoriesList) {
  if (categoriesList) {
    const markup = categories.map(category => {
      return `<li class="js-categories-item">${category.name}</li>`;
    }).join('');
    categoriesList.innerHTML = markup;
  }
}

export { renderCategories };
