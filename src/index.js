
import './sass/main.scss';
import fetchValue from './apiService';
const searchInput = document.querySelector('input[name="query"]');
const gallery = document.querySelector('.gallery');
const btnImg = document.querySelector('.btn-images');
var debounce = require('lodash.debounce');
let valuePage = 1;
const allgallery = gallery.children;

const valueSearch = ({ target }) => {
    if (target.value === "") {
        gallery.innerHTML = '';
        btnImg.classList.add('hidden');
        valuePage = 1;
        return
    }
    valuePage = 1;
    gallery.innerHTML = '';
    btnImg.classList.remove('hidden');
    const total = fetchValue(target.value, 1);
    total.then(response => {
        gallery.insertAdjacentHTML('beforeend', response);
    });
};
const btnImages = () => {
    valuePage += 1;
    let number = allgallery.length;
     const total = fetchValue(searchInput.value, valuePage);
    total.then(response => {
        gallery.insertAdjacentHTML('beforeend', response);
        setTimeout(() => {
            allgallery[number].scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        },1000)
    });
}
btnImg.addEventListener('click', btnImages)
searchInput.addEventListener('input', debounce(valueSearch, 500))