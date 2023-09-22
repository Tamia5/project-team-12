import{l as L,f as b,s as n,o as r}from"./dark-theme-8f3a6585.js";const e={categories:document.querySelector(".fav-categories"),main:document.querySelector(".recipes-fav"),hiddenHead:document.querySelector(".block-fav"),hiddenHero:document.querySelector(".section-fav-hero"),sectionCentered:document.querySelector(".fav-hero")};e.main.addEventListener("click",S);window.addEventListener("resize",L.debounce(c,300));let s=JSON.parse(localStorage.getItem("favorites")),d="";c();function c(){window.innerWidth>=768?(e.sectionCentered.classList.remove("centered"),e.categories.classList.add("hidden"),e.hiddenHero.classList.remove("hidden"),o()):(e.sectionCentered.classList.add("centered"),e.hiddenHero.classList.add("hidden"),e.categories.classList.add("hidden"),p())}function p(){if(s)s.length>0?(e.sectionCentered.classList.remove("centered"),e.hiddenHero.classList.remove("hidden"),e.categories.classList.remove("hidden"),e.hiddenHead.classList.add("hidden"),l()):(e.sectionCentered.classList.add("centered"),e.hiddenHero.classList.add("hidden"),e.categories.classList.add("hidden"),e.hiddenHead.classList.remove("hidden"));else return}function o(){if(s)s.length>0?(e.sectionCentered.classList.remove("centered"),e.hiddenHero.classList.remove("hidden"),e.categories.classList.remove("hidden"),e.hiddenHead.classList.add("hidden"),l()):(e.sectionCentered.classList.remove("centered"),e.hiddenHero.classList.remove("hidden"),e.categories.classList.add("hidden"),e.hiddenHead.classList.remove("hidden"));else return}function l(t){s.forEach(a=>{d=a,H()})}function H(t){b(d).then(a=>{const{preview:g,tags:v,title:f,description:u,rating:h,category:m,_id:i}=a;e.main.insertAdjacentHTML("beforeend",`<li class="fav-list" data="${i}">
        <button class="add-favorites-btn">
  <svg class="fav-svg-heart active-svg" name="svgHurt" value="${d}" id="check" >
    <use href="${n}#icon-heart" value="${i}"></use>
  </svg></button>
   
        <img src="${g}" alt="${v}" class="categories-image">
        <div class="image-filter-fav" data-id="${i}">
        </div>
        <div class="categories-text-fav" ">
    <h3 class="title-text-fav">${f}</h3>
    <p class="subtitle-text-fav">${u}</p>
        </div>
        <div class="categories-rating">
            <span class="number-rating">${h}</span>
            <svg class="svg-rating" >
                <use href='${n}#rating'></use>
            </svg>
             <button class="categories-btn-fav" data-id="${i}">See recipe</button>
        </div>

</li>`),e.categories.insertAdjacentHTML("beforeend",`<button class="fav-categories-btn" type="button">${m}</button>`),document.querySelectorAll(".fav-categories-btn")})}function S(t){if(t.preventDefault(),t.target.classList.value==="image-filter-fav"&&r(t.target.dataset.id),t.target.classList.value==="categories-btn-fav"&&r(t.target.dataset.id),t.target.nodeName!=="UL"&&t.target.nodeName==="svg"&&s.includes(t.target.attributes.value.textContent)){const a=s.indexOf(t.target.attributes.value.textContent);console.log(s.indexOf(t.target.attributes.value.textContent)),s.splice(`${a}`,1),localStorage.setItem("favorites",JSON.stringify(s)),s=JSON.parse(localStorage.getItem("favorites")),e.main.innerHTML="",o()}}
