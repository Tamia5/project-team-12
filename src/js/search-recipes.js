import { createMarkup, createForm } from "./render"
import { fetchAreas, fetchIngredients, fetchRecipe } from "./API"


const elements = {
container: document.querySelector(`.categories-container`),
areaSelect: document.querySelector(`[name="selectArea"`),
areaIngredients: document.querySelector(`[name="selectIngredients"]`),
searchForm: document.querySelector(`.search-form`)
}
console.log(elements.searchForm)


fetchAreas()
    .then(data => {   
        elements.areaSelect.insertAdjacentHTML(`beforeend`, createForm(data))
     })
fetchIngredients()
    .then(data => {   
        elements.areaIngredients.insertAdjacentHTML(`beforeend`, createForm(data))
    })
     
// All categories
fetchRecipe(6,1, ``,``,``,``,``)
    .then(data => {
    elements.container.innerHTML = createMarkup(data.results)
})