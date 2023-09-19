import axios from "axios";
const refs = {
  backdrop: document.querySelector(".order-backdrop"),
  openModalBtn: document.querySelector(".order-btn"),
  closeModalBtn: document.querySelector("[data-order-close]"),
  modal: document.querySelector("[data-order-modal]"),
  formWrapper: document.querySelector(".order-form-wrapper"),
    form: document.querySelector(".order-form"),
    input:document.querySelector(".order-form-input"),
    nameInput: document.querySelector('#user-name'),
    sendBtn: document.querySelector(".order-form-btn"),
    phoneInput: document.querySelector('#tel'),
emailInput: document.querySelector('#email'),
commentInput: document.querySelector('#user-comment'),

};

refs.openModalBtn.addEventListener("click", () => {
    refs.modal.classList.remove("is-hidden");
    refs.backdrop.classList.remove("is-hidden");
});


refs.closeModalBtn.addEventListener("click", () => {
    refs.modal.classList.add("is-hidden");
    refs.backdrop.classList.add("is-hidden");
    refs.form.reset();
});
refs.form.addEventListener('submit', async (e) => {
  e.preventDefault();
        
  const name = refs.nameInput.value;
  const phone = refs.phoneInput.value;
  const email = refs.emailInput.value;
  const comment = refs.commentInput.value;
  // Validation
  //         if (!name.match(/[A-Za-z\s]{3,}/) || !phone.match(/^[0-9]{10}$/) || !email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
  //     alert('Please enter valid data.');
  //     return;
  // }
  
    const data = {
      name,
      phone,
      email,
      comment
  };

  axios.post('https://tasty-treats-backend.p.goit.global/api-docs/orders/add', data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .catch(function (error) {
      if (error.response) {

        console.log(error.response.data);
        console.log(error.response.status);
   
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
  refs.form.reset();
});