import { renderModalRecipe } from './render';
import { getRecipesById } from './API';

const modalRecipe = document.querySelector('.backdrop-recipe');
const modalOpenButton = document.querySelector('[data-modal-open-recipe]');
const modalCloseButton = document.querySelector('[data-modal-close-recipe]');

modalOpenButton.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);

// Функція для відкриття модального вікна
async function openModal() {
  try {
    // Отримайте рецепт за айді та відобразіть його
    const recipeId = "6462a8f74c3d0ddd28897fc1";
    const recipeData = await getRecipesById(recipeId);
    const recipeMarkup = renderModalRecipe(recipeData);
    modalRecipe.innerHTML = recipeMarkup;
    modalRecipe.classList.remove('is-hidden');


    window.addEventListener('keydown', closeModalOnEscape);

    document.querySelector('.js-modal-recipe-close').addEventListener('click', closeModal);
  } catch (error) {
    console.error('Error loading recipe:', error);
  }
}

function closeModal() {
  modalRecipe.classList.add('is-hidden');

  window.removeEventListener('keydown', closeModalOnEscape);
}

function closeModalOnEscape(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}