const refs = {
  backdrop: document.querySelector(".rating-backdrop"),
  openModalBtn: document.querySelector(".rating-open-btn"),
  closeModalBtn: document.querySelector("[data-rating-close]"),
  modal: document.querySelector("[data-rating-modal]"),
  form: document.querySelector(".rating-form"),
  ratingCheckboxes: document.querySelectorAll('.rating input[type="checkbox"]'),
  ratingLabels: document.querySelectorAll('.rating label'),
  ratingValue: document.querySelector('.rating-value'),
};
refs.ratingValue.textContent = "0.0";

refs.openModalBtn.addEventListener("click", () => {
  refs.modal.classList.remove("is-hidden");
  refs.backdrop.classList.remove("is-hidden");
    refs.ratingLabels.forEach((label) => label.classList.remove('filled'));
  refs.ratingValue.textContent = "0.0";
});

refs.closeModalBtn.addEventListener("click", () => {
  refs.modal.classList.add("is-hidden");
    refs.backdrop.classList.add("is-hidden");
    
  refs.form.reset();
  refs.ratingCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
  });
    refs.ratingLabels.forEach((label) => label.classList.remove('filled'));
    updateRatingValue("0.0");
});

refs.ratingCheckboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    let selectedCount = 0;

    refs.ratingCheckboxes.forEach((cb, i) => {
      if (i <= index) {
        cb.checked = true;
        refs.ratingLabels[i].classList.add('filled');
        selectedCount++;
      } else {
        cb.checked = false;
        refs.ratingLabels[i].classList.remove('filled');
      }
    });

    updateRatingValue(selectedCount);
  });
});

function updateRatingValue(selectedCount) {
  const averageRating = selectedCount;
  refs.ratingValue.textContent = averageRating.toFixed(1);
}

