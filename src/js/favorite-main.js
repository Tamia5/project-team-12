import { createFavoriteCategoryButtons, seeRecipeButton } from './render.js';

const favoriteCategoriesContainer = document.querySelector('.js-favorite-categories');
const LOCALSTORAGE_KEY = "favorite-recipe";

function saveRecipeToLocalStorage(recipeData) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(recipeData);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function getFavoriteRecipes() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}

function updateCategoryButtons() {
  const uniqueCategories = [...new Set(getFavoriteRecipes().flatMap((recipe) => recipe.category))];

  favoriteCategoriesContainer.innerHTML = '';

  createFavoriteCategoryButtons(uniqueCategories);
  favoriteCategoriesContainer.innerHTML += categoryButtons.join('');
}


seeRecipeButton.addEventListener('click', () => {
  const params = new URLSearchParams({
    limit: limit,
    page: page,
    category: category,
    time: time,
    area: area,
    ingredient: ingredient,
  });
  fetchRecipe(limit, page, category, time, area, ingredient)
    .then((recipeData) => {
     
      saveRecipeToLocalStorage(recipeData);

      updateCategoryButtons();
    })
    .catch((error) => {
      console.error('Помилка отримання даних рецепту:', error);
    });
});

updateCategoryButtons();