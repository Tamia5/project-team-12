import { createMarkup, createForm } from "./render"
import { fetchAreas, fetchIngredients, fetchRecipe } from "./API"


const container = document.querySelector(`.categories-container`)
const areaSelect = document.querySelector(`[name="selectArea"`)
const areaIngredients = document.querySelector(`[name="selectIngredients"]`)

fetchAreas()
    .then(data => {   
        areaSelect.innerHTML = createForm(data)
     })
fetchIngredients()
    .then(data => {   
        areaIngredients.innerHTML = createForm(data)
    })
     
// All categories
fetchRecipe(6,1, ``,``,``,``,``)
    .then(data => {
    container.innerHTML = createMarkup(data.results)
})