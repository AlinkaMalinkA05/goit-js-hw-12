import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPicture } from './js/pixaby-api';
import { renderGallery, renderErrorMessage, renderLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');


let currentPage = 1;
let currentQuery = '';
let query

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  currentPage = 1;
  const findValue = form.elements.searchQuery.value.trim();
  currentQuery = findValue;
  if (findValue === '') {
    iziToast.error({
      title: 'Error',
      message: "Field can't be empty",
      position: 'topRight',
    });
    return;
  }
  handleSearch(findValue, currentPage);
}

async function handleSearch(query, currentPage) {
  try {
      renderLoader(loader);
      const data = await getPicture(query, currentPage);
      hideLoader(loader);
      console.log(data.hits);
      renderGallery(data.hits)

      if (data.hits.length === 0) {
          renderErrorMessage('Sorry, there are no images matching your search query. Please try again!');
          return;
      }
      renderGallery(data.hits);
    if (data.totalHits <= page * 15) {
      hideLoader();
          loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'block';
      }
  } catch (error) {
      renderErrorMessage('Something went wrong');
      hideLoader(loader);
  }
}

loadMoreBtn.addEventListener("click", onLoadMoreClick)
async function onLoadMoreClick() {
  page++
  const data = await getPicture(currentQuery, page);
  renderGallery(data.hits)
  
}