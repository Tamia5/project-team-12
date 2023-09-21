import { fetchRecipes } from "./API"
import { renderCategories, createMarkup} from "./render"
const elements = {
    categories: document.querySelector(`.categories-fav`),
    main: document.querySelector(`.recipes-fav`)
}

        // elements.categories.innerHTML = renderCategories(data);
        // const categoriesItem = document.querySelectorAll(`.js-categories-item`)
        // categoriesItem.forEach(el=>{el.classList.add(`js-favotire-categories`)})
        // categoriesItem.forEach(el=>{ el.classList.remove('js-categories-item'); });



// let limit = 6;
// let page = 1;
// let category = ``;
// let time = ``;
// let area = ``;
// let ingredient = ``;
// let changeCategory = JSON.parse(localStorage.getItem(`favorites`));
// checkMediaQuery()
// function checkMediaQuery() {
//   if (window.innerWidth >= 1200) {
//       limit = 9;
//       startRecipe()
//   } else if (window.innerWidth >= 768) {
//       limit = 8;
//       startRecipe()
//   } else {
//       limit = 6;
//       startRecipe()
//   }
// }
// function startRecipe(evt) {
//     changeCategory.forEach((recipe) => {
//         category = recipe
//         change()
//     })
// }
// function change() {
//     fetchRecipes(category)
//         .then(data => { 
//             console.log(data)
//             const { description, preview, rating, tags, title, _id } = data[0];
//             elements.main.insertAdjacentHTML = `
//             <li class="categories-list">
//         <button class="add-favorites-btn">
//   <svg class="svg-heart" name="svgHurt" value="${_id}" id="check" >
//     <use href="${sprite}#icon-heart" value="${_id}"></use>
//   </svg></button>
//     <a href=" " class="categories-link">
//         <img src="${preview}" alt="${tags}" class="categories-image">
//         <div class="image-filter">
//         </div>
//         <div class="categories-text">
//     <h3 class="title-text">${title}</h3>
//     <p class="subtitle-text">${description}</p>
//         </div>
//         <div class="categories-rating">
//             <span class="number-rating">${rating}</span>
//             <svg class="svg-rating" >
//                 <use href='${sprite}#rating'></use>
//             </svg>
//              <button class="categories-btn">See recipe</button>
//         </div>
//     </a>
// </li>
//             `
//     })
//     .catch(err => console.log(`err`))
}