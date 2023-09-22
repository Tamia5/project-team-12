import{f as g}from"./dark-theme-6946a6fe.js";const t={categories:document.querySelector(".categories-fav"),main:document.querySelector(".recipes-fav"),hiddenHead:document.querySelector(".block-fav")};let e=JSON.parse(localStorage.getItem("favorites")),a="";d();function d(){e?(e.splice("0",1),e.length>0?v():t.hiddenHead.classList.remove("is-hidden")):t.hiddenHead.classList.remove("is-hidden")}function v(i){console.log(e),e.forEach(s=>{a=s,u()})}function u(i){g(a).then(s=>{console.log(s);const{preview:c,tags:l,title:o,description:r,rating:n}=s;t.main.insertAdjacentHTML("beforeend",`<li class="categories-list">
        <button class="add-favorites-btn">
  <svg class="svg-heart" name="svgHurt" value="" id="check" >
    <use href="" value=""></use>
  </svg></button>
    <a href=" " class="categories-link">
        <img src="${c}" alt="${l}" class="categories-image">
        <div class="image-filter">
        </div>
        <div class="categories-text">
    <h3 class="title-text">${o}</h3>
    <p class="subtitle-text">${r}</p>
        </div>
        <div class="categories-rating">
            <span class="number-rating">${n}</span>
            <svg class="svg-rating" >
                <use href=''></use>
            </svg>
             <button class="categories-btn">See recipe</button>
        </div>
    </a>
</li>`)})}
