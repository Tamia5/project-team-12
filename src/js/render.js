//Hiro swiper 
export function markUp(arr) {
  return arr
    .map(
      ({ cook, topic }) => `
                <div class=" hero-event swiper-slide">
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
function renderCategories(arr) {
    return arr.map(({ _id, name }) => `
    <li class="js-categories-item" value="${_id}">${name}</li>
    `).join(``)
}
export { renderCategories }


//MODAL RECIPE DETAILS
function renderModalRecipe(recipeItem) {
  const { _id, title, rating, instructions, time, thumb, youtube } = recipeItem;
  
  let videoHTML = '';
  if (youtube) {
    const youtubeId = youtube.replace('https://www.youtube.com/watch?v=', '');
    videoHTML = `
      <div class="modal-recipe-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeId}" frameborder="0" allowfullscreen></iframe>
      </div>
    `;
  }


  const imgFrame = `<img class="modal-recipe-img" src="${thumb}" alt="${title}" width="295" height="295">`;

  const ratingHTML = `<meter class="modal-recipe-rating" min="0" max="5" value="${rating}">${rating}</meter>`;

  return `
    <div class="modal-recipe">
      <button class="js-modal-recipe-close modal-recipe-close-btn" type="button">
        <svg class="modal-recipe-svg" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.626 5.045a1.68 1.68 0 0 0-.583.59.864.864 0 0 0 .001.737c.056.112.985 1.07 2.809 2.898L10.579 12l-2.726 2.73c-1.824 1.828-2.753 2.786-2.809 2.898-.176.352-.085.733.255 1.073.34.34.721.431 1.073.255.112-.056 1.07-.985 2.898-2.809L12 13.421l2.73 2.726c1.828 1.824 2.786 2.753 2.898 2.809.352.176.733.085 1.073-.255.34-.34.431-.721.255-1.073-.056-.112-.985-1.07-2.809-2.898L13.421 12l2.726-2.73c1.824-1.828 2.753-2.786 2.809-2.898.176-.352.085-.733-.255-1.073-.34-.34-.721-.431-1.073-.255-.112.056-1.07.985-2.898 2.809L12 10.579 9.27 7.853C7.442 6.029 6.484 5.1 6.372 5.044a.884.884 0 0 0-.746.001" fill-rule="evenodd""/>
        </svg>
      </button>
      ${videoHTML || imgFrame} 
      <h2 class="modal-recipe-title">${title}</h2>
      <div class="modal-recipe-info-rating">
        ${ratingHTML}
        <div class="modal-recipe-stars" data-rating="${rating}" id="modal-recipe-rating-${_id}"></div>
        <p class="modal-recipe-time">${time} min</p>
      </div>
      <p class="modal-recipe-text">${instructions}</p>
    </div>
  `;
}

export { renderModalRecipe }

