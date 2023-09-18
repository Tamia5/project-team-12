import { getCategoriesFromAPI } from './API.js';
import { renderCategories } from './render.js';

const categoriesList = document.querySelector('.js-categories')
getCategoriesFromAPI()
  .then(data => {
    categoriesList.innerHTML = renderCategories(data)
  })
  .catch(err => console.log(`Err categor`))


