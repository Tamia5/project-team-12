import { createMarkup, createArea, createIng } from "./render"
import { fetchAreas, fetchIngredients, fetchRecipe } from "./API"

import lodash, { remove } from 'lodash'

import {updatePagination} from "./pagination-container"

const dobounce = lodash.debounce

// добавила глобальні переменні для погінаціі
let currentPage = 1;
let totalPages = 40;

const elements = {
    container: document.querySelector(`.categories-container`),
    areaSelect: document.querySelector(`[name="selectArea"`),
    areaIngredients: document.querySelector(`[name="selectIngredients"]`),
    searchForm: document.querySelector(`.search-form`),
    homeBtn: document.querySelector(`.desk-h`),
    searchBtn: document.querySelector(`.btn-form`),
    categoriesList: document.querySelector('.js-categories'),
    allCategoriesButton: document.querySelector('.js-btn-all-categories')
    
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
elements.homeBtn.addEventListener(`click`, resetRecipes);
elements.searchForm.search.addEventListener('input', dobounce(trimSearch, 500));
elements.searchForm.addEventListener(`change`, changeRecipe);
elements.searchBtn.addEventListener(`click`, resetRecipes);
elements.categoriesList.addEventListener("click", selectName);
elements.allCategoriesButton.addEventListener(`click`, resetCategories)
elements.container.addEventListener(`click`, selectAddFavorites)
window.addEventListener('resize', dobounce(checkMediaQuery, 300));


let limit = 6;
let page = 1;
let category = ``;
let time = ``;
let area = ``;
let ingredient = ``;
let fovariteAdd = ``;

checkMediaQuery()
function checkMediaQuery() {
  if (window.innerWidth >= 1200) {
      limit = 9;
      startRecipe()
  } else if (window.innerWidth >= 768) {
      limit = 8;
      startRecipe()
  } else {
      limit = 6;
      startRecipe()
  }
}
function selectName(evt) {
    if (evt.target.textContent === category) {
        return
    } else if (evt.target.nodeName != "UL") {
        category = evt.target.outerText
        changeClass();
        evt.target.classList.add(`active`)
        changeRecipe();
  }
}
function changeClass() {
    const li = document.querySelectorAll(`.js-categories li`)
    li.forEach(el=>{ el.classList.remove('active'); });
}
function resetCategories(evt) {
    category = ``;
    changeClass()
    changeRecipe()
}

function startRecipe(evt) {
fetchRecipe(limit, page, category, time, area, ingredient)
    .then(data => { 
        elements.container.innerHTML = createMarkup(data.results);
        fovariteAdd = document.querySelectorAll(`.add-favorites-btn`);
    return data;
})

    .then(data => {
      // присвоїла данні для погінаціі
      totalPages = data.totalPages;
      currentPage = data.page;
      elements.container.innerHTML = createMarkup(data.results);
      // визов функціі для пагінаціі
      updatePagination();

    })
    .catch(err => console.log(`err`))
}

// єкспртнула в фаіл agination
export { startRecipe };

function trimSearch(evt) {
    evt.preventDefault();
    category = elements.searchForm.search.value.trim();
    changeRecipe()
}

function changeRecipe(evt) {
    // evt.preventDefault();
    time = elements.searchForm.selectTime.value
    area = elements.searchForm.selectArea.value;
    ingredient = elements.searchForm.selectIngredients.value;
 fetchRecipe(limit, page, category, time, area, ingredient)
     .then(data => { 
         elements.container.innerHTML = createMarkup(data.results)
         fovariteAdd = document.querySelectorAll(`.categories-svg`)
        
         
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


                                        // Favorites Add\\
localStorage.clear()
let parseFavotites = JSON.parse(localStorage.getItem(`favorites`));

function selectAddFavorites(evt) {
    evt.preventDefault();
    if (parseFavotites === null) {
        parseFavotites = [""]
        parseFavotites.splice(`0`,1)
            if (evt.target.nodeName === "UL") {
            return
        } else if (evt.target.nodeName === "svg"){
            evt.target.classList.add('active-svg')
                parseFavotites.push(evt.target.attributes.value.textContent)
                localStorage.setItem(`favorites`, JSON.stringify(parseFavotites))

        }
    } else {
        if (evt.target.nodeName === "UL") {
        return
            } else if (evt.target.nodeName === "svg"){
                        if (parseFavotites.includes(evt.target.attributes.value.textContent)) {
                        const index = parseFavotites.indexOf(evt.target.attributes.value.textContent)
                        parseFavotites.splice(`${index}`, 1)
                        evt.target.classList.remove('active-svg')
                        localStorage.setItem(`favorites`, JSON.stringify(parseFavotites))
                            } else {
                                evt.target.classList.add('active-svg')
                                parseFavotites.push(evt.target.attributes.value.textContent)
                                    localStorage.setItem(`favorites`, JSON.stringify(parseFavotites))
    }
    }
    }
    
}


elements.searchForm.selectArea.classList.add('option-style');
elements.searchForm.selectIngredients.classList.add('option-style');
elements.searchForm.selectTime.classList.add('option-style');

