import{f as u,s as r}from"./dark-theme-69b36294.js";const e={categories:document.querySelector(".fav-categories"),main:document.querySelector(".recipes-fav"),hiddenHead:document.querySelector(".block-fav"),hiddenHero:document.querySelector(".section-fav-hero"),sectionCentered:document.querySelector(".centered")};e.main.addEventListener("click",b);let t=JSON.parse(localStorage.getItem("favorites")),i="";c();function c(){if(t)console.log(t),t.length>0?(e.sectionCentered.classList.remove("centered"),e.hiddenHero.classList.remove("hidden"),e.categories.classList.remove("hidden"),e.hiddenHead.classList.add("hidden"),h()):(e.sectionCentered.classList.add("centered"),e.hiddenHero.classList.add("hidden"),e.categories.classList.add("hidden"),e.hiddenHead.classList.remove("hidden"));else return}function h(a){t.forEach(s=>{i=s,m()})}function m(a){u(i).then(s=>{const{preview:o,tags:d,title:l,description:g,rating:v,category:f,_id:n}=s;e.main.insertAdjacentHTML("beforeend",`<li class="fav-list" data="${n}">
        <button class="add-favorites-btn">
  <svg class="fav-svg-heart active-svg" name="svgHurt" value="${i}" id="check" >
    <use href="${r}#icon-heart" value="${n}"></use>
  </svg></button>
    <a href=" " class="categories-link">
        <img src="${o}" alt="${d}" class="categories-image">
        <div class="image-filter-fav">
        </div>
        <div class="categories-text-fav">
    <h3 class="title-text-fav">${l}</h3>
    <p class="subtitle-text-fav">${g}</p>
        </div>
        <div class="categories-rating-fav">
            <span class="number-rating-fav">${v}</span>
            <svg class="svg-rating-fav" >
                <use href='${r}#svg-rating'></use>
            </svg>
             <button class="categories-btn-fav">See recipe</button>
        </div>
    </a>
</li>`),e.categories.insertAdjacentHTML("beforeend",`<button class="fav-categories-btn" type="button">${f}</button>`),document.querySelectorAll(".fav-categories-btn")})}function b(a){if(a.preventDefault(),a.target.nodeName!=="UL"&&a.target.nodeName==="svg"&&t.includes(a.target.attributes.value.textContent)){const s=t.indexOf(a.target.attributes.value.textContent);console.log(t.indexOf(a.target.attributes.value.textContent)),t.splice(`${s}`,1),localStorage.setItem("favorites",JSON.stringify(t)),t=JSON.parse(localStorage.getItem("favorites")),e.main.innerHTML="",c()}}
