import { DivComponent } from "../../common/divComponent";
import './header.css'

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.element.classList.add('header');
    this.element.innerHTML = `
      <div class="logo">
        <a className="logo__link" href="/">
          <img class="logo__img" src="/public/img/logo.svg" alt="Логотип сайту">
        </a>
      </div>
      <nav class="nav">
        <a class="nav__item" href="/">
          <img src="/mg/search.svg" alt="Іконка пошуку">
          Пошук книги
        </a>
        <a class="nav__item" href="#favourites">
          <img src="/img/favourites.svg" alt="Іконка додавання до обранного">
          Обране <span class="nav__item_counter">${this.appState.favourites.length}</span>
        </a>
      </nav>
    `;

    return this.element;
  }
}