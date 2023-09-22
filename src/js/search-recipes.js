import { createMarkup, createArea, createIng } from "./render"
import { fetchAreas, fetchIngredients, fetchRecipe } from "./API"
import lodash, { functionsIn, remove, update } from 'lodash'
import { openModal } from "./modal-recipe"


const dobounce = lodash.debounce

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
let totalPages = ``;


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
        page = 1;
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
    page = 1;
    changeRecipe()
}

function startRecipe(evt) {
fetchRecipe(limit, page, category, time, area, ingredient)
    .then(data => { 
        elements.container.innerHTML = createMarkup(data.results);
      fovariteAdd = document.querySelectorAll(`.add-favorites-btn`);
        totalPages = data.totalPages;

        updatePagination()

})
}


function trimSearch(evt) {
    evt.preventDefault();
    category = elements.searchForm.search.value.trim();
    page = 1;
    changeRecipe()
}

function changeRecipe() {
    // evt.preventDefault();
    time = elements.searchForm.selectTime.value
    area = elements.searchForm.selectArea.value;
    ingredient = elements.searchForm.selectIngredients.value;
 fetchRecipe(limit, page, category, time, area, ingredient)
     .then(data => { 
         totalPages = data.totalPages;
          updatePagination()
         elements.container.innerHTML = createMarkup(data.results)
         fovariteAdd = document.querySelectorAll(`.categories-svg`)
     })
     
    .catch(err => console.log(`err`))
}
function resetRecipes(evt) {
  evt.preventDefault();
  resetCategories()
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
  
  if (evt.target.classList.value === `image-filter`) {
    openModal(evt.target.dataset.id)
  }

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



// Update Pagination \\

const paginationContainer = document.querySelector('.js-pagination');

function updatePagination() {
  paginationContainer.innerHTML = '';
    if (totalPages != null) {
      const pagesToShow = 3;

  let startPage = Math.max(page - Math.floor(pagesToShow / 2), 1);
  let endPage = startPage + pagesToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - pagesToShow + 1, 1);
  }

  if (page > 1) {
    paginationContainer.innerHTML += `<button class="js-first-page"><<</button>`;
    paginationContainer.innerHTML += `<button class="js-previous-page"><</button>`;
  }

  for (let i = startPage; i <= endPage; i++) {
    if (i === page) {
      paginationContainer.innerHTML += `<button class="js-page active" data-page="${i}">${i}</button>`;
    } else {
      paginationContainer.innerHTML += `<button class="js-page" data-page="${i}">${i}</button>`;
    }
  }
  if (page <= totalPages - 3) {
    paginationContainer.innerHTML += `<button class="js-three-dots">...</button>`;
  }
  if (page < totalPages) {
    paginationContainer.innerHTML += `<button class="js-next-page">></button>`;
    paginationContainer.innerHTML += `<button class="js-last-page">>></button>`;
  }
    } else {
        console.log(`Nema storinok`)
  }
}

paginationContainer.addEventListener('click', event => {
  const target = event.target;
  if (target.classList.contains('js-first-page')) {
    page = 1;
  } else if (target.classList.contains('js-previous-page')) {
    page = Math.max(page - 1, 1);
  } else if (target.classList.contains('js-next-page')) {
    page = Math.min(page + 1, totalPages);
  } else if (target.classList.contains('js-last-page')) {
    page = totalPages;
  } else if (target.classList.contains('js-page')) {
    page = parseInt(target.getAttribute('data-page'));
    }
    updatePagination()
  changeRecipe()
});

// Open modal \\
function getLinkId(evt) {
  console.log(evt.target)
}