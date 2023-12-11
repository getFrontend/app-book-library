import { DivComponent } from "../../common/divComponent";
import './search.css'

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  search() {
    const value = this.element.querySelector('.search__input').value;
    this.state.searchQuery = value;
  }

  render() {
    this.element.classList.add('search');
    this.element.innerHTML = `
      <div class="search__wrapper">
        <input class="search__input" type="text" placeholder="Введіть назву книги або автора" value="${this.state.searchQuery ?
        this.state.searchQuery : ''}">
        <img class="search__icon" src="../../public/img/search.svg" alt="Іконка пошуку">
      </div>
      <button class="search__btn" aria-label="Пошук">
        <img class="search__btn-img" src="../../public/img/search-white.svg" alt="Іконка пошуку">
      </button>
    `;
    this.element.querySelector('.search__btn').addEventListener('click', this.search.bind(this));
    this.element.querySelector('.search__input').addEventListener('keydown', (event) => {
      if (event.code === 'Enter') {
        this.search();
      }
    })

    return this.element;
  }
}