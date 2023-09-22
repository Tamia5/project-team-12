import{f,s as r}from"./dark-theme-abd40ee7.js";const e={categories:document.querySelector(".fav-categories"),main:document.querySelector(".recipes-fav"),hiddenHead:document.querySelector(".block-fav"),hiddenHero:document.querySelector(".section-fav-hero"),sectionCentered:document.querySelector(".centered")};e.main.addEventListener("click",b);let t=JSON.parse(localStorage.getItem("favorites")),i="";c();function c(){if(t)t.length>0?(e.sectionCentered.classList.remove("centered"),e.hiddenHero.classList.remove("hidden"),e.categories.classList.remove("hidden"),e.hiddenHead.classList.add("hidden"),h()):(e.sectionCentered.classList.add("centered"),e.hiddenHero.classList.add("hidden"),e.categories.classList.add("hidden"),e.hiddenHead.classList.remove("hidden"));else return}function h(s){t.forEach(a=>{i=a,m()})}function m(s){f(i).then(a=>{const{preview:o,tags:d,title:l,description:g,rating:v,category:u,_id:n}=a;e.main.insertAdjacentHTML("beforeend",`<li class="fav-list" data="${n}">
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
        <div class="categories-rating">
            <span class="number-rating">${v}</span>
            <svg class="svg-rating" >
                <use href='${r}#rating'></use>
            </svg>
             <button class="categories-btn-fav">See recipe</button>
        </div>
    </a>
</li>`),e.categories.insertAdjacentHTML("beforeend",`<button class="fav-categories-btn" type="button">${u}</button>`),document.querySelectorAll(".fav-categories-btn")})}function b(s){if(s.preventDefault(),s.target.nodeName!=="UL"&&s.target.nodeName==="svg"&&t.includes(s.target.attributes.value.textContent)){const a=t.indexOf(s.target.attributes.value.textContent);console.log(t.indexOf(s.target.attributes.value.textContent)),t.splice(`${a}`,1),localStorage.setItem("favorites",JSON.stringify(t)),t=JSON.parse(localStorage.getItem("favorites")),e.main.innerHTML="",c()}}
