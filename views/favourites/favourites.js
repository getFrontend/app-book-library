import onChange from "on-change";
import { AbstractView } from "../../common/view";
import { Header } from "../../components/Header/Header";
import { CardList } from "../../components/CardList/CardList";

export class FavouritesView extends AbstractView {
  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.useAppState.bind(this));
    this.setTitle('Список обраних книг');
  }

  destroy() {
    onChange.unsubscribe(this.appState);
  }

  useAppState(path) {
    if (path === 'favourites') {
      this.render();
    }
  }

  render() {
    const favourites = document.createElement('div');

    if (this.appState.favourites.length === 0) {
      favourites.innerHTML = `
        <h1>Список обраних книг:</h1>
        <p>Вибачте, але ви ще не додали жодної книги до обранного.</p>
        <p>Через 7 секунд, ви знову потрапите на головну сторінку, де зможете знайти потрібну книгу.</p>
      `;

      setTimeout(function () {
        window.location.href = "/";
      }, 7000);
    } else {
      favourites.innerHTML = `
          <h1>Список обраних книг:</h1>
      `;
    }

    favourites.append(new CardList(this.appState, { list: this.appState.favourites }).render());
    this.app.innerHTML = '';
    this.app.append(favourites);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}