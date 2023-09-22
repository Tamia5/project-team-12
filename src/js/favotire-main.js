import _, { deburr } from "lodash";
import { fetchId } from "./API"
import sprite from '/icons.svg'
const elements = {
    categories: document.querySelector(`.fav-categories`),
    main: document.querySelector(`.recipes-fav`),
    hiddenHead: document.querySelector(`.block-fav`),
    hiddenHero: document.querySelector(`.section-fav-hero`),
    sectionCentered: document.querySelector(`.centered`)
}

elements.main.addEventListener(`click`, deleteAddFavorites)
let limit = 6;
let page = 1;
let changeCategory = JSON.parse(localStorage.getItem(`favorites`));
let id = ``
checkLocalStorage()

function checkLocalStorage() {
    if (changeCategory) {
        console.log(changeCategory)
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
    <a href=" " class="categories-link">
        <img src="${preview}" alt="${tags}" class="categories-image">
        <div class="image-filter">
        </div>
        <div class="categories-text">
    <h3 class="title-text">${title}</h3>
    <p class="subtitle-text">${description}</p>
        </div>
        <div class="categories-rating">
            <span class="number-rating">${rating}</span>
            <svg class="svg-rating" >
                <use href='${sprite}#rating'></use>
            </svg>
             <button class="categories-btn">See recipe</button>
        </div>
    </a>
</li>`)
            elements.categories.insertAdjacentHTML('beforeend', `<button class="fav-categories-btn" type="button">${category}</button>`)
            const catBtn = document.querySelectorAll(`.fav-categories-btn`)
            // console.log(catBtn[0].innerHTML)
        })
}    

function deleteAddFavorites(evt) {
    evt.preventDefault()
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