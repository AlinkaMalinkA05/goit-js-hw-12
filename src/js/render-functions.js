import { getPicture } from "./pixaby-api";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";


const form = document.querySelector(".form");
const input = document.querySelector(".search-input")
const gallery = document.querySelector(".gallery")
const loader = document.querySelector(".loader")

form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
    event.preventDefault();
    gallery.innerHTML = '';
    const findValue = form.elements.searchQuery.value.trim();
    getPicture(findValue).then(data => {
        if (data.hits.length === 0) return iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            title: "Error",
            position: "topRight"
        });
        markup(data.hits);
    });
    if (findValue === "") {
        iziToast.error({
            title: 'Error',
            message: 'Field can`t be empty ',
            position: "topRight"
        });
        loader.classList.add('is-hidden');
    return;
  }
  loader.classList.remove('is-hidden');
    
    getPicture(findValue)
        .then((data) => console.log(data))
        .catch(error => {
    iziToast.error({
        title: 'Error',
        message: `${error.message || 'Something went wrong'}`,
        backgroundColor: '#EF4040',
        messageColor: '#fff',
        titleColor: '#fff',
        progressBarColor: '#B51B1B',
        position: 'topRight',
    });
        })
    .finally(() => {
    loader.classList.add('is-hidden');
    });
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
function markup(arr) {
    const newMarkup = arr.map(({
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

gallery.innerHTML = newMarkup;
lightbox.refresh();
}
