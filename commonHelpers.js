import{a as v,i as h}from"./assets/vendor-57efd687.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const L="https://pixabay.com/api/",b="43059548-3adc942b003e7790296d060a7";async function p(t,o=1,s=15){try{return(await v.get(L,{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:o}})).data}catch{throw new Error("Error fetching pictures from Pixabay API")}}const w=document.querySelector(".gallery");function c(t){const o=t.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:n,comments:y,downloads:g})=>`<li>
          <a class="gallery-link" href="${i}">
          <img class="gallery-image"
              src="${s}"
              alt="${e}"
              width="360"
              height="152"/>
      </a>
      <div class='info-block'>
          <div class="info">
              <h3 class = "head-likes">Likes</h3>
              <p>${r}</p>
          </div>
          <div class="info">
              <h3 class = "head-views">Views</h3>
              <p>${n}</p>
          </div>
          <div class="info">
              <h3 class = "head-comments">Comments</h3>
              <p>${y}</p>
          </div>
          <div class="info">
              <h3 class = "head-downloads">Downloads</h3>
              <p>${g}</p>
          </div>
      </div>
  </li>`).join("");w.insertAdjacentHTML("beforeend",o)}function S(t){t.classList.remove("is-hidden")}function d(t){t.classList.add("is-hidden")}function u(t){h.error({message:t,title:"Error",position:"topRight"})}const m=document.querySelector(".form"),q=document.querySelector(".gallery"),a=document.querySelector(".loader"),l=document.querySelector(".load-more-btn");let f=1,P;m.addEventListener("submit",E);function E(t){t.preventDefault(),q.innerHTML="",f=1;const o=m.elements.searchQuery.value.trim();if(o===""){h.error({title:"Error",message:"Field can't be empty",position:"topRight"});return}$(o,f)}async function $(t,o){try{S(a);const s=await p(t,1);if(d(a),console.log(s.hits),c(s.hits),s.hits.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}c(s.hits),s.totalHits<=o*15?l.style.display="none":l.style.display="block"}catch{u("Something went wrong"),d(a)}}l.addEventListener("click",M);async function M(){const t=await p(P,1);c(t.hits)}
//# sourceMappingURL=commonHelpers.js.map
