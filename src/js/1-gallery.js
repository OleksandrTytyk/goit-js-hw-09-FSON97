import { images } from '../helpers/images';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryRef = document.querySelector('.gallery');

const createMarkup = images.map(img => {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${img.original}">
    <img class="gallery-image" src="${img.preview}" alt="${img.description}" width="340px"/>
  </a>
</li>`;
}).join('');

galleryRef.innerHTML = createMarkup;

console.log("createMarkup ~ createMarkup:", createMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250'

});

lightbox()
