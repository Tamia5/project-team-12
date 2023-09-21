// Імпортувати сюди всі функції запитів
const url = `https://tasty-treats-backend.p.goit.global/api/recipes`;
const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/categories';

// ЗАПИТ ВСІХ РЕЦЕПТІВ //
function fetchRecipe(limit, page, category, time, area, ingredient) {
  const params = new URLSearchParams({
    limit: limit,
    page: page,
    category: category,
    time: time,
    area: area,
    ingredient: ingredient,
  });
  return fetch(`${url}?${params}`).then(resp => {
    if (!resp.ok) {
      console.log('Pizdez');
    }
    return resp.json();
  });
}
export { fetchRecipe };

// ЗАПИТ ВСІХ КРАЇН //
function fetchAreas() {
  return fetch(`https://tasty-treats-backend.p.goit.global/api/areas`).then(
    resp => {
      if (!resp.ok) {
        console.log(`Err areas`);
      }
      return resp.json();
    }
  );
}
export { fetchAreas };

// ЗАПИТ ВСІХ ІНГРЕДІЄНТІВ //
function fetchIngredients() {
  return fetch(
    `https://tasty-treats-backend.p.goit.global/api/ingredients`
  ).then(resp => {
    if (!resp.ok) {
      console.log(`Err ingredients`);
    }
    return resp.json();
  });
}
export { fetchIngredients };


// Hero Swiper  
function fetchMasterClass() {
  return fetch(`https://tasty-treats-backend.p.goit.global/api/events`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Network response was not ok');
      }
      return resp.json();
    });
}

export { fetchMasterClass };


// ОТРИМАТИ ПОПУЛЯРНІ РЕЦЕПТИ //
function getPopRecipes() {
  return fetch(`${url}/popular`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      throw error;
    });
}
export { getPopRecipes };

// all-categories//

async function getCategoriesFromAPI() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getCategoriesFromAPI };
  

//MODAL RECIPE DETAILS 

async function getRecipesById(id) {
  const GET_RECIPE_BY_ID_URL = `${url}/${id}`;

  try {
    const response = await fetch(GET_RECIPE_BY_ID_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch recipe with ID ${id}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export { getRecipesById }




