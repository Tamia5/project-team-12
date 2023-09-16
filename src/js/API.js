// Імпортувати сюди всі функції запитів
const url = `https://tasty-treats-backend.p.goit.global/api/recipes`

                                                // ЗАПИТ ВСІХ РЕЦЕПТІВ //
function fetchRecipe(limit, page, category, time, area, ingredient) {
    const params = new URLSearchParams({
        limit: limit,
        page: page,
        category: category,
        time: time,
        area: area,
        ingredient: ingredient
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


// Hero Swiper  
  function fetchMasterClass() {
    return fetch(`https://tasty-treats-backend.p.goit.global/api/events`)
        .then(resp => {
            if (!resp.ok) {
                console.log("Pizdez")
            }
            return resp.json()
        })
}
export {fetchMasterClass}
