import { getPopRecipes } from './API';

const popRecipes = document.querySelector('.popular-recipes-list');

async function renderPopRecipes() {
  try {
    const data = await getPopRecipes();
    createList(data);
  } catch (error) {
    console.error('Error while rendering popular recipes:', error);
  }
}

function createList(data) {
  const markup = data
    .map(({ title, description, preview, _id }) => {
      return `
      <li class="popular-recipes-item data-id="${_id}"">
      <img class="popular-recipes-image" src="${preview}" alt="${title}" />
      <div data-id="${_id}">
      <p class="popular-recipes-item-title">${title}</p>
      <p class="popular-recipes-item-description">${description}</p>
      </div>
    </li>`;
    })
    .join('');

  popRecipes.insertAdjacentHTML('beforeend', markup);
}

renderPopRecipes();
