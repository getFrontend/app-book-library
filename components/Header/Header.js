import { DivComponent } from "../../common/divComponent";
import './header.css'

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.element.innerHTML = '';
    this.element.classList.add('header');
    this.element.innerHTML = `
      <div class="logo">
        <img class="logo__img" src="../../public/img/logo.svg" alt="Логотип сайту">
      </div>
      <nav class="nav">
        <a class="nav__item" href="">
          <img src="../../public/img/search.svg" alt="Іконка пошуку">
          Пошук книги
        </a>
        <a class="nav__item" href="">
          <img src="../../public/img/favourites.svg" alt="Іконка додавання до обранного">
          Обране <span class="nav__item_counter">${this.appState.favourites.length}</span>
        </a>
      </nav>
    `;

    return this.element;
  }
}