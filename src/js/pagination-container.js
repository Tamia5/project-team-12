import { changeRecipe } from "./search-recipes"

let  page = 1;
let totalPages = 40;

const paginationContainer = document.querySelector('.js-pagination');

function updatePagination() {
  console.log(page)
  paginationContainer.innerHTML = '';
  const pagesToShow = 3;

  let startPage = Math.max(page - Math.floor(pagesToShow / 2), 1);
  let endPage = startPage + pagesToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - pagesToShow + 1, 1);
  }

  if (page > 1) {
    console.log(page)
    paginationContainer.innerHTML += `<button class="js-first-page"><<</button>`;
    paginationContainer.innerHTML += `<button class="js-previous-page"><</button>`;
  }

  for (let i = startPage; i <= endPage; i++) {
    if (i === page) {
      paginationContainer.innerHTML += `<button class="js-page active" data-page="${i}">${i}</button>`;
    } else {
      paginationContainer.innerHTML += `<button class="js-page" data-page="${i}">${i}</button>`;
    }
  }
  if (page <= totalPages - 3) {
    paginationContainer.innerHTML += `<button class="js-three-dots">...</button>`;
  }
  if (page < totalPages) {
    paginationContainer.innerHTML += `<button class="js-next-page">></button>`;
    paginationContainer.innerHTML += `<button class="js-last-page">>></button>`;
  }
}
export {updatePagination};

paginationContainer.addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('js-first-page')) {
    page = ``;
  } else if (target.classList.contains('js-previous-page')) {
    page = Math.max(page - 1, 1);
  } else if (target.classList.contains('js-next-page')) {
    page = Math.min(page + 1, totalPages);
  } else if (target.classList.contains('js-last-page')) {
    page = totalPages;
  } else if (target.classList.contains('js-page')) {
    page = parseInt(target.getAttribute('data-page'));
  }
   changeRecipe(page);
  
});
