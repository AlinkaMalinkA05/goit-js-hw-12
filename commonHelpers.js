import{a as g,i as v,S as b}from"./assets/vendor-95dc692e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const L="https://pixabay.com/api/",w="43059548-3adc942b003e7790296d060a7";async function S(t,r=1,i=15){try{return(await g.get(L,{params:{key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:i,page:r}})).data}catch{throw new Error("Error fetching pictures from Pixabay API")}}function P(t){const r=t.map(({webformatURL:i,largeImageURL:s,tags:e,likes:o,views:n,comments:m,downloads:y})=>`<li>
          <a class="gallery-link" href="${s}">
          <img class="gallery-image"
              src="${i}"
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
              <p>${m}</p>
          </div>
          <div class="info">
              <h3 class = "head-downloads">Downloads</h3>
              <p>${y}</p>
          </div>
      </div>
  </li>`).join("");gallery.insertAdjacentHTML("beforeend",r),lightbox.refresh()}function $(t){t.classList.remove("is-hidden")}function d(t){t.classList.add("is-hidden")}function u(t){iziToast.error({message:t,title:"Error",position:"topRight"})}const f=document.querySelector(".form");document.querySelector(".search-input");const q=document.querySelector(".gallery"),c=document.querySelector(".loader"),l=document.querySelector(".load-more-btn");let a=1,h="";f.addEventListener("submit",E);function E(t){t.preventDefault(),q.innerHTML="",a=1;const r=f.elements.searchQuery.value.trim();if(h=r,r===""){v.error({title:"Error",message:"Field can't be empty",position:"topRight"});return}p(r,a)}async function p(t,r){try{$(c);const i=await S(t,r);if(d(c),i.hits.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}P(i.hits),i.totalHits<=r*15?l.style.display="none":l.style.display="block"}catch{u("Something went wrong"),d(c)}}l.addEventListener("click",M);function M(){a++,p(h,a)}new b(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
