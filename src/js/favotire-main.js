import { deburr } from "lodash";
import { fetchId } from "./API"
import { renderCategories} from "./render"
const elements = {
    categories: document.querySelector(`.categories-fav`),
    main: document.querySelector(`.recipes-fav`),
    hiddenHead: document.querySelector(`.block-fav`)
}

        // elements.categories.innerHTML = renderCategories(data);
        // const categoriesItem = document.querySelectorAll(`.js-categories-item`)
        // categoriesItem.forEach(el=>{el.classList.add(`js-favotire-categories`)})
        // categoriesItem.forEach(el=>{ el.classList.remove('js-categories-item'); });



let limit = 6;
let page = 1;
let changeCategory = JSON.parse(localStorage.getItem(`favorites`));
let id = ``
checkLocalStorage()

function checkLocalStorage() {
    if (changeCategory) {
        changeCategory.splice(`0`, 1)
        if (changeCategory.length > 0) {
            selectId()
        } else elements.hiddenHead.classList.remove(`is-hidden`)
    } else elements.hiddenHead.classList.remove(`is-hidden`)
}

function selectId(evt) {
    console.log(changeCategory)
    changeCategory.forEach(categori => {
        id = categori
        startRecipe()
    })
}
function startRecipe(evt) {
    fetchId(id)
        .then(data => {
            console.log(data)
            const { preview, tags, title, description, rating } = data
            elements.main.insertAdjacentHTML('beforeend', `<li class="categories-list">
        <button class="add-favorites-btn">
  <svg class="svg-heart" name="svgHurt" value="" id="check" >
    <use href="" value=""></use>
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
                <use href=''></use>
            </svg>
             <button class="categories-btn">See recipe</button>
        </div>
    </a>
</li>`)
        })
    }    
