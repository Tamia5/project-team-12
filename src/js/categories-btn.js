
import { getCategoriesFromAPI } from './API.js';
import { renderCategories } from './render.js';


const categoriesList = document.querySelector('.js-categories');
const allCategoriesButton = document.querySelector('.js-btn-all-categories');
const categoriesContainer = document.querySelector('.js-categories-container');

async function loadCategories() {
  const categories = await getCategoriesFromAPI();
    renderCategories(categories, categoriesList); 
    
  if (allCategoriesButton) {
    allCategoriesButton.classList.add('active-btn');
  }
}

loadCategories();

categoriesList.addEventListener('click', onSelectedCategories);



allCategoriesButton.addEventListener('click', removeAllActiveClasses);

function onSelectedCategories(evt) {
  const isSelectedCategoryEl = evt.target.classList.contains('js-categories-item');
  if (!isSelectedCategoryEl) {
    return;
  }
  const selectedCategoryEl = evt.target.closest('.js-categories-item');
  selectedCategoryEl.classList.add('active');
  allCategoriesButton.classList.remove('active-btn');

  removeActiveClassFromCategory(selectedCategoryEl);
}

function removeActiveClassFromCategory(clickedCategory) {
  const categoryElements = document.querySelectorAll('.js-categories-item');
  categoryElements.forEach(categoryEl => {
    if (categoryEl !== clickedCategory) {
      categoryEl.classList.remove('active');
    }
  });
}

function removeAllActiveClasses() {
  const categoryElements = document.querySelectorAll('.js-categories-item');
  categoryElements.forEach(categoryEl => {
    categoryEl.classList.remove('active');
  });
  allCategoriesButton.classList.add('active-btn');
}



categoriesContainer.addEventListener('click', onSelectedCategories);





