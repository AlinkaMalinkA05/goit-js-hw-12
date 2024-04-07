import{a as S,S as w,i as y}from"./assets/vendor-95dc692e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const P="https://pixabay.com/api/",q="43059548-3adc942b003e7790296d060a7";async function f(e,r=1,i=15){try{return(await S.get(P,{params:{key:q,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:i,page:r}})).data}catch{throw new Error("Error fetching pictures from Pixabay API")}}const E=document.querySelector(".gallery");function m(e){const r=e.map(({webformatURL:i,largeImageURL:o,tags:t,likes:s,views:c,comments:b,downloads:L})=>`<li>
            <div class="lightbox-container">
          <a class="gallery-link"
          href="${o}">
          <img class="gallery-image"
              src="${i}"
              alt="${t}"
              width="360"
              height="152"/>
      </a>
      </div>
      <div class='info-block'>
          <div class="info">
              <h3 class = "head-likes">Likes</h3>
              <p>${s}</p>
          </div>
          <div class="info">
              <h3 class = "head-views">Views</h3>
              <p>${c}</p>
          </div>
          <div class="info">
              <h3 class = "head-comments">Comments</h3>
              <p>${b}</p>
          </div>
          <div class="info">
              <h3 class = "head-downloads">Downloads</h3>
              <p>${L}</p>
          </div>
      </div>
  </li>`).join("");E.insertAdjacentHTML("beforeend",r),new w(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function p(e){e.classList.remove("is-hidden")}function d(e){e.classList.add("is-hidden")}function a(e){y.error({message:e,title:"Error",position:"topRight"})}const g=document.querySelector(".form"),$=document.querySelector(".gallery"),n=document.querySelector(".loader"),u=document.querySelector(".load-more-btn");let l=1,v="";const h=15;g.addEventListener("submit",M);u.addEventListener("click",O);function M(e){e.preventDefault(),$.innerHTML="",l=1;const r=g.elements.searchQuery.value.trim();if(v=r,r===""){y.error({title:"Error",message:"Field can't be empty",position:"topRight"});return}k(r,l,h)}async function O(){l++;try{p(n);const e=await f(v,l,h);d(n),console.log(e.hits),m(e.hits),l*h>=e.totalHits&&(u.style.display="none",e.hits.length===0?a("Sorry, there are no images matching your search query. Please try again!"):a("Sorry, there are no more images to load."))}catch(e){a(e.message),d(n)}}async function k(e,r,i){try{p(n);const o=await f(e,r,i);if(d(n),console.log(o.hits),m(o.hits),o.hits.length===0){a("Sorry, there are no images matching your search query. Please try again!");return}r*i>=o.totalHits?(u.style.display="none",a("Sorry, there are no images matching your search query. Please try again!")):u.style.display="block"}catch(o){a(o.message),d(n)}}
//# sourceMappingURL=commonHelpers.js.map
