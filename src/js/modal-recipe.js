const backdropRec = document.querySelector('.backdrop-recipe');
const modal = document.querySelector('[data-modal-recipe]');
const closeSeeBtn = document.querySelector('[data-modal-close]');
const nameRecipe = document.querySelector('#name-recipe');
const instructEl = document.querySelector('.instructions');
const ratingEl = document.querySelector('.rating');
const timeEl = document.querySelector('.modal-time');
const starRatingEl = document.querySelectorAll('.icon-star');
const mediaEl = document.querySelector('#media');
const tagsEl = document.querySelector('.tags');
const ingrEl = document.querySelector('.ingredients');
// const cardBlockEl = document.querySelector('.recipes-block');
const modalRecipeWithId = document.querySelector('.modal_recipe');


// Close modal
function closeModal() {
  modal.classList.add('visually-hidden');
  document.removeEventListener('keydown', keyDown);
  backdropRec.removeEventListener('click', closeBackdrop);
    document.body.style.overflow = '';
     console.log("Close modal");
}

closeSeeBtn.addEventListener('click', closeModal);


function closeBackdrop(e) {
  if (e.target === modal) {
    closeModal();
  }
}


function keyDown(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

// Data
async function loadRecipesById(id) {
  try {
    const resp = await fetch(`${BASE_URL}/${id}`);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return await resp.json();
  } catch (error) {
    console.error(error);
  }
}

async function getRecipeCard(id) {
  try {
    const recipe = await loadRecipesById(id);
    mediaEl.innerHTML = getMedia(recipe.youtube, recipe.thumb, recipe.title);
    nameRecipe.textContent = recipe.title;
    ratingEl.textContent = Math.round(recipe.rating);
    timeEl.textContent = `${recipe.time} min`;
    ingrEl.innerHTML = getIngredients(recipe.ingredients);
    tagsEl.innerHTML = getTags(recipe.tags);
    instructEl.textContent = recipe.instructions;
    modalRecipeWithId.setAttribute('id', recipe._id);
    goldStars(recipe);
  } catch (error) {
    console.error(error);
  }
}

// Video/photo
function getMedia(youtube, image, alt) {
  if (!youtube) {
    return `<img class="image" src="${image}" alt="${alt}" width="295" height="295">`;
  } else {
    return `<iframe
      id="video-recipe"
      src="${youtube.replace('watch?v=', 'embed/')}"
      width="100%"
      height="100%"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>`;
  }
}

// Tags
function getTags(tags) {
  if (!tags) {
    return '';
  }
  return tags.map(tag => `<li class="recipe-tag">#${tag}</li>`).join('');
}

//Ingredients
function getIngredients(ingredients) {
  return ingredients.map(
    ingredient => `<li class="recipe-ing">
      <p class="recipe-ing-name">${ingredient.name}</p>
      <span class="recipe-ing-measure">${ingredient.measure}</span>
    </li>`
  ).join('');
}

// Rating
function goldStars(recipe) {
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(recipe.rating)) {
      starRatingEl[i].classList.add('icon-star-fill');
    } else {
      starRatingEl[i].classList.remove('icon-star-fill');
    }
  }
}


const seeRecipeButton = document.querySelectorAll('.see-recipe-btn');

function openModal(e) {
  const targetArticle = e.target.closest('article');
  if (targetArticle) {
    const recipeId = targetArticle.getAttribute("id");
    getRecipeCard(recipeId);
    modal.classList.remove('visually-hidden');
    document.addEventListener('keydown', keyDown);
    backdropRec.addEventListener('click', closeBackdrop);
    document.body.style.overflow = 'hidden';
  }
}

seeRecipeButton.forEach(button => {
  button.addEventListener('click', openModal);
});