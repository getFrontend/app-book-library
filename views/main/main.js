import { AbstractView } from "../../common/view";

export class MainView extends AbstractView {
  state = {
    list: [],
    loading: false,
    searchQuery: undefined,
    offset: 0
  }

  constructor(appState) {
    super();
    this.appState = appState;
    this.setTitle('Пошук книг');
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = `Кількість знайденних книг: ${this.appState.favourites.length}`;
    this.app.innerHTML = '';
    this.app.append(main);
  }
}