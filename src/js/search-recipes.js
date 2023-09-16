import { createMarkup, createArea, createIng } from "./render"
import { fetchAreas, fetchIngredients, fetchRecipe } from "./API"
import lodash from 'lodash'

const dobounce = lodash.debounce

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
    elements.container.innerHTML = createMarkup(data.results)
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

