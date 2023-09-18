import { functions } from 'lodash';
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



categoriesContainer.addEventListener('click', onSelectedCategories);


// categoriesContainer.addEventListener('click', onButtonCLick);

// let lastClickedButton = null;
// function onButtonCLick(event) {
//   const button = event.target;

//   if (button.nodeName !== 'BUTTON') {
//     return;
//   }

//   if (lastClickedButton) {
//     lastClickedButton.classList.remove('active');
//   }

//   if (button === allCategoriesButton) {
//     removeActiveClassFromAllButtons();
//   } else {
//     allCategoriesButton.classList.remove('active');
//   }

//   if (button.classList.contains('js-categories-item')) {
//     button.classList.add('active');
//   }

//   lastClickedButton = button;
// }

// function removeActiveClassFromAllButtons() {
//   const buttons = categoriesList.querySelectorAll('button');

//   buttons.forEach(button => {
//     button.classList.remove('active');
//   });
// }

// categoriesList.addEventListener('click', event => {
//   if (!event.target.classList.contains('js-categories-item')) {
//     event.stopPropagation();
//   }
// });




