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
// refs.sendBtn.addEventListener("click", formSubmit)
// function formSubmit(){
    refs.form.addEventListener('submit', (e) => {
        e.preventDefault();
        
// const nameInput = refs.form.querySelector('[name="user-name"]');
//   const telInput = refs.form.querySelector('[name="tel"]');
//   const emailInput = refs.form.querySelector('[name="email"]');
//   const commentInput = refs.form.querySelector('[name="user-comment"]');

  const name = refs.nameInput.value;
  const tel = refs.phoneInput.value;
  const email = refs.emailInput.value;
  const comment = refs.commentInput.value;
  
//     const data = {
//     name,
//     tel,
//     email,
//     comment,
//   };
        let data;
         
    fetch("https://tasty-treats-backend.p.goit.global/api-docs/orders/add", {
    method: "POST",
        headers: {
        "accept": "application/json",
            // ; charset=UTF-8
      "Content-Type": "application/json",
        },
    body: JSON.stringify( data = {
    name,
    tel,
    email,
    comment,
  }),
    }).then(response => {
         if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then((responseData) => {
      console.log('Data sent successfully:', responseData);
    }).catch((error) => {

  console.error('There was a problem with the fetch operation:', TypeError);
//   console.log('Response from server:', response);
    });
        // Validation
            if (!name.match(/[A-Za-z\s]{3,}/) || !tel.match(/^[0-9]{10}$/) || !email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
        alert('Please enter valid data.');
        return;
    }
});

    refs.form.reset();