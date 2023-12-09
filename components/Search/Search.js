import { DivComponent } from "../../common/divComponent";
import './search.css'

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.element.classList.add('search');
    this.element.innerHTML = `
      <div class="search__wrapper">
        <input class="search__input" type="text" placeholder="Знайти книгу або автора" value="${this.state.searchQuery ?
        this.state.searchQuery : ''}">
        <img class="search__icon" src="../../public/img/search.svg" alt="Іконка пошуку">
      </div>
      <button class="search__btn" aria-label="Пошук">
        <img class="search__btn-img" src="../../public/img/search-white.svg" alt="Іконка пошуку">
      </button>
    `;

    return this.element;
  }
}