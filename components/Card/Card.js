import { DivComponent } from "../../common/divComponent";
import './card.css'

const IMG_URL = 'https://covers.openlibrary.org/b/olid';

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  #addToFavourites() {
    this.appState.favourites.push(this.cardState);
  }

  #deleteFormFavourites() {
    this.appState.favourites = this.appState.favourites.filter(
      i => i.key !== this.cardState.key
    )
  }

  render() {
    this.element.classList.add('card');
    const existInFavourites = this.appState.favourites.find(i => i.key === this.cardState.key);

    this.element.innerHTML = `
      <div class="card__image">
        <img src="${IMG_URL}/${this.cardState.cover_edition_key}-M.jpg" alt="Обкладинка книги">
      </div>
      <div class="card__info">
        <div class="card__tag">
          ${this.cardState.subject ? this.cardState.subject[0] : 'жанр не вказано'}
        </div>
        <div class="card__name">
          ${this.cardState.title}
        </div>
        <div class="card__author">
          ${this.cardState.author_name ? this.cardState.author_name[0] : 'автор не вказаний'}
        </div>
        <button class="card__btn ${existInFavourites ? 'card__btn_add' : ''}">
          ${existInFavourites
        ? '<img src="../../public/img/favourites.svg" alt="Книжку вже додано в обране">'
        : '<img src="../../public/img/favourites-white.svg" alt="Додати в обране">'
      }
        </button>
      </div>
    `;

    if (existInFavourites) {
      this.element.querySelector('.card__btn').addEventListener('click', this.#deleteFormFavourites.bind(this));
    } else {
      this.element.querySelector('.card__btn').addEventListener('click', this.#addToFavourites.bind(this));
    }

    return this.element;
  }
}