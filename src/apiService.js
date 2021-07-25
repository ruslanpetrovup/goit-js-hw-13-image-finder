import './index';
import cardsImages from './cards-images.hbs';
export default async function fetchValue(searchValue, numberPage) {
    const markup = []
    const fetRespons = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchValue}&page=${numberPage}&per_page=12&key=22641251-454133ad8981e71bbc25a7aae`)
    const response = await fetRespons.json();
        response.hits.forEach(element => {
        markup.push(cardsImages(element));
        });
    return markup.join('')
}