import{a as b,S as L,i as p}from"./assets/vendor-95dc692e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const w="https://pixabay.com/api/",S="43059548-3adc942b003e7790296d060a7";async function f(t,r=1,i=15){try{return(await b.get(w,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:i,page:r}})).data}catch{throw new Error("Error fetching pictures from Pixabay API")}}const P=document.querySelector(".gallery"),q=new L(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function l(t){const r=t.map(({webformatURL:i,largeImageURL:s,tags:e,likes:o,views:n,comments:g,downloads:v})=>`<li>
            <div class="lightbox-container">
          <a class="gallery-link"
          href="${s}">
          <img class="gallery-image"
              src="${i}"
              alt="${e}"
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
              <p>${g}</p>
          </div>
          <div class="info">
              <h3 class = "head-downloads">Downloads</h3>
              <p>${v}</p>
          </div>
      </div>
  </li>`).join("");P.insertAdjacentHTML("beforeend",r),q.refresh()}function E(t){t.classList.remove("is-hidden")}function a(t){t.classList.add("is-hidden")}function u(t){p.error({message:t,title:"Error",position:"topRight"})}const m=document.querySelector(".form"),$=document.querySelector(".gallery"),c=document.querySelector(".loader"),d=document.querySelector(".load-more-btn");let h=1,y="";m.addEventListener("submit",M);function M(t){t.preventDefault(),$.innerHTML="",h=1;const r=m.elements.searchQuery.value.trim();if(y=r,r===""){p.error({title:"Error",message:"Field can't be empty",position:"topRight"});return}x(r,h)}async function x(t,r){try{E(c);const i=await f(t,r);if(a(c),console.log(i.hits),l(i.hits),i.hits.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}l(i.hits),i.totalHits<=page*15?(a(),d.style.display="none"):d.style.display="block"}catch{u("Something went wrong"),a(c)}}d.addEventListener("click",O);async function O(){page++;const t=await f(y,page);l(t.hits)}
//# sourceMappingURL=commonHelpers.js.map
