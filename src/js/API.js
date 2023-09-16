// Імпортувати сюди всі функції запитів
const url = `https://tasty-treats-backend.p.goit.global/api/recipes`

                                                // ЗАПИТ ВСІХ РЕЦЕПТІВ //
function fetchRecipe(limit, page, category, time, area, ingredients) {
    const params = new URLSearchParams({
        limit: limit,
        page: page,
        category: category,
        time: time,
        area: area,
        ingredients: ingredients
   })
    return fetch(`${url}?${params}`)
        .then(resp => {
            if (!resp.ok) {
                console.log("Pizdez")
            }
            return resp.json()
        })
}
export {fetchRecipe}

                                                // ЗАПИТ ВСІХ КРАЇН //
function fetchAreas() {
    return fetch(`https://tasty-treats-backend.p.goit.global/api/areas`)
        .then(resp => {
            if (!resp.ok) {
                console.log(`Err areas`)
            }
            return resp.json()
        })
}
export {fetchAreas}

                                                // ЗАПИТ ВСІХ ІНГРЕДІЄНТІВ //
function fetchIngredients() {
    return fetch(`https://tasty-treats-backend.p.goit.global/api/ingredients`)
        .then(resp => {
            if (!resp.ok) {
                console.log(`Err ingredients`)
            }
            return resp.json()
        })
}
export {fetchIngredients}