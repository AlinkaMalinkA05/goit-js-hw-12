export function renderGallery(images) {
  const newMarkup = images.map(({
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  }) => `<li>
          <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              width="360"
              height="152"/>
      </a>
      <div class='info-block'>
          <div class="info">
              <h3 class = "head-likes">Likes</h3>
              <p>${likes}</p>
          </div>
          <div class="info">
              <h3 class = "head-views">Views</h3>
              <p>${views}</p>
          </div>
          <div class="info">
              <h3 class = "head-comments">Comments</h3>
              <p>${comments}</p>
          </div>
          <div class="info">
              <h3 class = "head-downloads">Downloads</h3>
              <p>${downloads}</p>
          </div>
      </div>
  </li>`
  )
  .join('');

  gallery.insertAdjacentHTML("beforeend", newMarkup) ;
  lightbox.refresh();
}

export function renderLoader(loaderElement) {
  loaderElement.classList.remove('is-hidden');
}

export function hideLoader(loaderElement) {
  loaderElement.classList.add('is-hidden');
}

export function renderErrorMessage(message) {
  iziToast.error({
    message: message,
    title: 'Error',
    position: 'topRight',
  });
}