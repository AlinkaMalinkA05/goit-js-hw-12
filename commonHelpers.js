import{a as y,i as f}from"./assets/vendor-57efd687.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const g="https://pixabay.com/api/",v="43059548-3adc942b003e7790296d060a7";async function b(r,t=1,s=15){try{return(await y.get(g,{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:t}})).data}catch{throw new Error("Error fetching pictures from Pixabay API")}}function w(r){const t=r.map(({webformatURL:s,largeImageURL:i,tags:e,likes:o,views:n,comments:p,downloads:m})=>`<li>
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
              <p>${o}</p>
          </div>
          <div class="info">
              <h3 class = "head-views">Views</h3>
              <p>${n}</p>
          </div>
          <div class="info">
              <h3 class = "head-comments">Comments</h3>
              <p>${p}</p>
          </div>
          <div class="info">
              <h3 class = "head-downloads">Downloads</h3>
              <p>${m}</p>
          </div>
      </div>
  </li>`).join("");gallery.insertAdjacentHTML("beforeend",t)}function L(r){r.classList.remove("is-hidden")}function c(r){r.classList.add("is-hidden")}function l(r){f.error({message:r,title:"Error",position:"topRight"})}const h=document.querySelector(".form"),P=document.querySelector(".gallery"),a=document.querySelector(".loader"),d=document.querySelector(".load-more-btn");let u=1;h.addEventListener("submit",S);function S(r){r.preventDefault(),P.innerHTML="",u=1;const t=h.elements.searchQuery.value.trim();if(t===""){f.error({title:"Error",message:"Field can't be empty ",position:"topRight"});return}$(t,u)}async function $(r,t){try{L(a);const s=await b(r,t);if(c(a),s.hits.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}w(s.hits),s.totalHits<=t*15?d.style.display="none":d.style.display="block"}catch{l("Something went wrong"),c(a)}}
//# sourceMappingURL=commonHelpers.js.map
