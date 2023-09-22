import _, { debounce, deburr } from "lodash";
import { fetchId } from "./API"
import sprite from '/icons.svg'
import { openModal } from "./modal-recipe";

const elements = {
    categories: document.querySelector(`.fav-categories`),
    main: document.querySelector(`.recipes-fav`),
    hiddenHead: document.querySelector(`.block-fav`),
    hiddenHero: document.querySelector(`.section-fav-hero`),
    sectionCentered: document.querySelector(`.fav-hero`)
}

elements.main.addEventListener(`click`, deleteAddFavorites)
window.addEventListener('resize', debounce(checkMediaQuery, 300));

let limit = 6;
let page = 1;
let changeCategory = JSON.parse(localStorage.getItem(`favorites`));
let id = ``

checkMediaQuery()
function checkMediaQuery() {
 if (window.innerWidth >= 768) {
     limit = 8;
     elements.sectionCentered.classList.remove(`centered`)
     elements.categories.classList.add(`hidden`)
     elements.hiddenHero.classList.remove(`hidden`)
      checkLocalStorage()
  } else {
     limit = 6;
     elements.sectionCentered.classList.add(`centered`)
            elements.hiddenHero.classList.add(`hidden`)
            elements.categories.classList.add(`hidden`)
     checkLocalStorageMobile()
     
  }
}

function checkLocalStorageMobile() {
    if (changeCategory) {
        if (changeCategory.length > 0) {
            elements.sectionCentered.classList.remove(`centered`)
            elements.hiddenHero.classList.remove(`hidden`)
            elements.categories.classList.remove(`hidden`)
            elements.hiddenHead.classList.add(`hidden`)
            selectId()
        } else {
            elements.sectionCentered.classList.add(`centered`)
            elements.hiddenHero.classList.add(`hidden`)
            elements.categories.classList.add(`hidden`)
            elements.hiddenHead.classList.remove(`hidden`)
        }
    } else return
}

function checkLocalStorage() {
    if (changeCategory) {
        if (changeCategory.length > 0) {
             elements.sectionCentered.classList.remove(`centered`)
            elements.hiddenHero.classList.remove(`hidden`)
            elements.categories.classList.remove(`hidden`)
            elements.hiddenHead.classList.add(`hidden`)
            selectId()
        } else {
             elements.sectionCentered.classList.remove(`centered`)
            elements.hiddenHero.classList.remove(`hidden`)
            elements.categories.classList.add(`hidden`)  
            elements.hiddenHead.classList.remove(`hidden`)
        }
    } else return
}

function selectId(evt) {
    changeCategory.forEach(categori => {
        id = categori
        startRecipe()
    })
}
function startRecipe(evt) {
    fetchId(id)
        .then(data => {
            const { preview, tags, title, description, rating, category, _id } = data
            elements.main.insertAdjacentHTML('beforeend', `<li class="fav-list" data="${_id}">
        <button class="add-favorites-btn">
  <svg class="fav-svg-heart active-svg" name="svgHurt" value="${id}" id="check" >
    <use href="${sprite}#icon-heart" value="${_id}"></use>
  </svg></button>
   
        <img src="${preview}" alt="${tags}" class="categories-image">
        <div class="image-filter-fav" data-id="${_id}">
        </div>
        <div class="categories-text-fav" ">
    <h3 class="title-text-fav">${title}</h3>
    <p class="subtitle-text-fav">${description}</p>
        </div>
        <div class="categories-rating">
            <span class="number-rating">${rating}</span>
            <svg class="svg-rating" >
                <use href='${sprite}#rating'></use>
            </svg>
             <button class="categories-btn-fav" data-id="${_id}">See recipe</button>
        </div>

</li>`)
            elements.categories.insertAdjacentHTML('beforeend', `<button class="fav-categories-btn" type="button">${category}</button>`)
            const catBtn = document.querySelectorAll(`.fav-categories-btn`)
            // console.log(catBtn[0].innerHTML)
        })
}    

function deleteAddFavorites(evt) {
    evt.preventDefault()
    if (evt.target.classList.value === `image-filter-fav`) {
    openModal(evt.target.dataset.id)
  }
  if (evt.target.classList.value === `categories-btn-fav`) {
    openModal(evt.target.dataset.id)
  }
    if (evt.target.nodeName === "UL") {
        return
    } else if (evt.target.nodeName === "svg") {
        if (changeCategory.includes(evt.target.attributes.value.textContent)) {
            const index = changeCategory.indexOf(evt.target.attributes.value.textContent)
            console.log(changeCategory.indexOf(evt.target.attributes.value.textContent))
            changeCategory.splice(`${index}`, 1)
            localStorage.setItem(`favorites`, JSON.stringify(changeCategory))
            changeCategory = JSON.parse(localStorage.getItem(`favorites`));
            elements.main.innerHTML = ``
            checkLocalStorage()
        }
    }   
}