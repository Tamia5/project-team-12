function openModal() {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-recipe]"),
    closeModalBtn: document.querySelector("[data-modal-close-recipe]"),
    modal: document.querySelector("[data-modal-recipe]"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
}
document.addEventListener("DOMContentLoaded", openModal);


// function markupRecipe(data) {
//   const ingredients = data.ingredients
//     .map(ingredient => {
//       return `<li class="modal-recipe-list"><span class="modal-recipe-ingr">${ingredient.name}</span>
//       <span class="modal-recipe-measure">${ingredient.measure}</span></li>`;
//     })
//     .join('');

//   const tags = data.tags
//     .map(tag => {
//       return `<li class="modal-recipe-tags-list">#${tag}</li>`;
//     })
//     .join('');

//   return `
//           <h1 class="modal-recipe-title">${data.title}</h1>
//         <iframe
//         class="modal-recipe-video"
//         width="295"
//         height="295"
//         src="${data.youtube}"
//         title="YouTube video player" 
//         frameborder="0" 
//          web-share" allowfullscreen>
//          </iframe>
//         <div class="recipe-rating-time">
//           <p>${data.rating}</p>
//           <p>${data.time}</p>
//         </div>
//         <ul class="modal-recipe-ingredients">${ingredients}</ul>
//         <ul class="modal-recipe-tags">${tags}</ul>
//         <p class="modal-recipe-text">${data.instructions}</p>
//         `;
// }