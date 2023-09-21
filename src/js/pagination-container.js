import { startRecipe } from "./search-recipes"

let currentPage = 1;
let totalPages = 40;

const paginationContainer = document.querySelector('.js-pagination');

function updatePagination() {
  paginationContainer.innerHTML = '';
  const pagesToShow = 3;

  let startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
  let endPage = startPage + pagesToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - pagesToShow + 1, 1);
  }

  if (currentPage > 1) {
    paginationContainer.innerHTML += `<button class="js-first-page"><<</button>`;
    paginationContainer.innerHTML += `<button class="js-previous-page"><</button>`;
  }

  for (let i = startPage; i <= endPage; i++) {
    if (i === currentPage) {
      paginationContainer.innerHTML += `<button class="js-page active" data-page="${i}">${i}</button>`;
    } else {
      paginationContainer.innerHTML += `<button class="js-page" data-page="${i}">${i}</button>`;
    }
  }
  if (currentPage <= totalPages - 3) {
    paginationContainer.innerHTML += `<button class="js-three-dots">...</button>`;
  }
  if (currentPage < totalPages) {
    paginationContainer.innerHTML += `<button class="js-next-page">></button>`;
    paginationContainer.innerHTML += `<button class="js-last-page">>></button>`;
  }
}
export {updatePagination};
paginationContainer.addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('js-first-page')) {
    currentPage = 1;
  } else if (target.classList.contains('js-previous-page')) {
    currentPage = Math.max(currentPage - 1, 1);
  } else if (target.classList.contains('js-next-page')) {
    currentPage = Math.min(currentPage + 1, totalPages);
  } else if (target.classList.contains('js-last-page')) {
    currentPage = totalPages;
  } else if (target.classList.contains('js-page')) {
    currentPage = parseInt(target.getAttribute('data-page'));
  }
   startRecipe(currentPage);
  
});
