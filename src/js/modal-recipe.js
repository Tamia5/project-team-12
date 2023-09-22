import { renderModalRecipe } from './render';
import {  fetchId } from './API';
export{ openModal} 

const modalRecipe = document.querySelector('.backdrop-recipe');
const modalCloseButton = document.querySelector('[data-modal-close-recipe]');
// modalCloseButton.addEventListener('click', closeModal);

function openModal(id) {
    console.log(id)
fetchId(id)
    .then(data => {
        modalRecipe.innerHTML = renderModalRecipe(data)
        modalRecipe.classList.remove('is-hidden');
         window.addEventListener('keydown', closeModalOnEscape);

    document.querySelector('.js-modal-recipe-close').addEventListener('click', closeModal);
    })
    .catch(err => {
            console.error('Error loading recipe:', error);
        })
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