import { getCategoriesFromAPI } from './API.js';
import { renderCategories } from './render.js';

const categoriesList = document.querySelector('.js-categories');
const allCategoriesButton = document.querySelector('.js-btn-all-categories');


function addClickListenersToCategories(categories) {
  const categoryItems = categoriesList.querySelectorAll('.js-categories-item');

  categoryItems.forEach(item => {
    item.addEventListener('click', () => {
      const category = item.textContent;
      getRecipesByCategory(category);

 
      categoryItems.forEach(categoryItem => {
        categoryItem.classList.remove('active');
      });

   
      item.classList.add('active');

    
      if (allCategoriesButton) {
        allCategoriesButton.classList.remove('active-category');
      }
    });
  });
}


async function loadCategories() {
  const categories = await getCategoriesFromAPI();
    renderCategories(categories, categoriesList); 
    
  if (allCategoriesButton) {
    allCategoriesButton.classList.add('active-category');
  }
}

loadCategories();

