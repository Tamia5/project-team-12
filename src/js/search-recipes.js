import { createMarkup, createArea, createIng } from "./render"
import { fetchAreas, fetchIngredients, fetchRecipe } from "./API"
import lodash from 'lodash'

const dobounce = lodash.debounce
// добавила перемінні для пагінаціі
const paginationContainer = document.querySelector('.js-pagination');

let currentPage = 1;
let totalPages = 1;


const elements = {
    container: document.querySelector(`.categories-container`),
    areaSelect: document.querySelector(`[name="selectArea"`),
    areaIngredients: document.querySelector(`[name="selectIngredients"]`),
    searchForm: document.querySelector(`.search-form`),
    homeBtn: document.querySelector(`.desk-h`)
}

                                        // Відмальовка країн та інгредієнтів \\
fetchAreas()
    .then(data => {   
        elements.areaSelect.insertAdjacentHTML(`beforeend`, createArea(data))
    })
fetchIngredients()
    .then(data => {   
        elements.areaIngredients.insertAdjacentHTML(`beforeend`, createIng(data))
    })
                                        // Відмальовка рецептів \\
elements.homeBtn.addEventListener(`click`, resetRecipes)
elements.searchForm.search.addEventListener('input', dobounce(trimSearch, 500))
elements.searchForm.addEventListener(`change`, changeRecipe);
elements.searchForm.btnReset.addEventListener(`click`, resetRecipes)

let limit = 6;
let page = 1;
let category = ``;
let time = ``;
let area = ``;
let ingredient = ``;

startRecipe()

function startRecipe(evt) {
fetchRecipe(limit, page, category, time, area, ingredient)
    .then(data => { 
        // данні для пагінація 
        totalPages = data.totalPages;
        currentPage = data.currentPage;

        elements.container.innerHTML = createMarkup(data.results)
        // визов функціі для пагінаціі
        updatePagination();
    })
    .catch(err => console.log(`err`))
}

function trimSearch(evt) {
    evt.preventDefault();
    category = elements.searchForm.search.value.trim();
    changeRecipe()
}

function changeRecipe(evt) {
    time = elements.searchForm.selectTime.value
    area = elements.searchForm.selectArea.value;
    ingredient = elements.searchForm.selectIngredients.value;
 fetchRecipe(limit, page, category, time, area, ingredient)
     .then(data => { 
         console.log(data)
             elements.container.innerHTML = createMarkup(data.results)
         
        
         
    })
    .catch(err => console.log(`err`))
}
function resetRecipes(evt) {
    evt.preventDefault();
    elements.searchForm.search.value = ``;
    elements.searchForm.selectTime.value = ``;
    elements.searchForm.selectArea.value = ``;
    elements.searchForm.selectIngredients.value = ``;
    page = 1;
    category = ``;
    time = ``;
    area = ``;
    ingredient = ``;
    startRecipe()
}   


// пагінація



function updatePagination() {
  paginationContainer.innerHTML = '';

  const pagesToShow = 3;

  let startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
  let endPage = startPage + pagesToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - pagesToShow + 1, 1);
  }

  if (currentPage > 1) {
    paginationContainer.innerHTML += `<button class="js-first-page"><<</button>`;
    paginationContainer.innerHTML += `<button class="js-previous-page"><</button>`;
  }

  for (let i = startPage; i <= endPage; i++) {
    if (i === currentPage) {
      paginationContainer.innerHTML += `<button class="js-page active" data-page="${i}">${i}</button>`;
    } else {
      paginationContainer.innerHTML += `<button class="js-page" data-page="${i}">${i}</button>`;
    }
  }
  if (currentPage <= totalPages - 3) {
    paginationContainer.innerHTML += `<p class="js-three-dots">...</button>`;
  }
  if (currentPage < totalPages) {
    paginationContainer.innerHTML += `<button class="js-next-page">></button>`;
    paginationContainer.innerHTML += `<button class="js-last-page">>></button>`;
  }
}

paginationContainer.addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('js-first-page')) {
    currentPage = 1;
  } else if (target.classList.contains('js-previous-page')) {
    currentPage = Math.max(currentPage - 1, 1);
  } else if (target.classList.contains('js-next-page')) {
    currentPage = Math.min(currentPage + 1, totalPages);
  } else if (target.classList.contains('js-last-page')) {
    currentPage = totalPages;
  } else if (target.classList.contains('js-page')) {
    currentPage = parseInt(target.getAttribute('data-page'));
    }
    
  startRecipe(currentPage);
});


// startRecipe(currentPage);