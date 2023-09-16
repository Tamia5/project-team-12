// Імпортувати сюди всі функції запитів
const url = `https://tasty-treats-backend.p.goit.global/api/recipes`;

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
const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/events';

async function fetchMasterClass() {
  try {
    const response = await axios.get(BASE_URL);

    if (response.status === 404) {
      throw new Error(response.status);
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('error');
  }
}

fetchMasterClass()
  .then(data => {
    createMarkupSwiper(data);
  })
  .catch(error => console.log(error));

function createMarkupSwiper(arrSliders) {
  const swiperWrapperEl = document.querySelector('.swiper-wrapper');
}

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
