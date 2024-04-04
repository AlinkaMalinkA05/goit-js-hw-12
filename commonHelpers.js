import{a as L,S as w,i as h}from"./assets/vendor-95dc692e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const S="https://pixabay.com/api/",P="43059548-3adc942b003e7790296d060a7";async function f(e,r=1,s=15){try{return(await L.get(S,{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:r}})).data}catch{throw new Error("Error fetching pictures from Pixabay API")}}const q=document.querySelector(".gallery");function p(e){const r=e.map(({webformatURL:s,largeImageURL:i,tags:t,likes:o,views:n,comments:v,downloads:b})=>`<li>
            <div class="lightbox-container">
          <a class="gallery-link"
          href="${i}">
          <img class="gallery-image"
              src="${s}"
              alt="${t}"
              width="360"
              height="152"/>
      </a>
      </div>
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
              <p>${v}</p>
          </div>
          <div class="info">
              <h3 class = "head-downloads">Downloads</h3>
              <p>${b}</p>
          </div>
      </div>
  </li>`).join("");q.insertAdjacentHTML("beforeend",r),new w(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function y(e){e.classList.remove("is-hidden")}function c(e){e.classList.add("is-hidden")}function d(e){h.error({message:e,title:"Error",position:"topRight"})}const m=document.querySelector(".form"),E=document.querySelector(".gallery"),a=document.querySelector(".loader"),u=document.querySelector(".load-more-btn");let l=1,g="";m.addEventListener("submit",$);u.addEventListener("click",O);function $(e){e.preventDefault(),E.innerHTML="",l=1;const r=m.elements.searchQuery.value.trim();if(g=r,r===""){h.error({title:"Error",message:"Field can't be empty",position:"topRight"});return}M(r,l)}async function M(e,r){try{y(a);const s=await f(e,r);if(c(a),console.log(s.hits),p(s.hits),s.hits.length===0){d("Sorry, there are no images matching your search query. Please try again!");return}s.totalHits<=l*15?(c(),u.style.display="none"):u.style.display="block"}catch(s){d(s.message),c(a)}}async function O(){l++;try{y(a);const e=await f(g,l);c(a),console.log(e.hits),p(e.hits),e.hits.length===0&&(d("Sorry, there are no more images to load."),u.style.display="none")}catch(e){d(e.message),c(a)}}
//# sourceMappingURL=commonHelpers.js.map
