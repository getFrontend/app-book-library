import onChange from "on-change";
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
    this.appState = onChange(this.appState, this.useAppState.bind(this));
    this.setTitle('Пошук книг');
  }

  useAppState(path) {
    if (path === 'favourites') {
      console.log(path);
    }
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = `Кількість знайденних книг: ${this.appState.favourites.length}`;
    this.app.innerHTML = '';
    this.app.append(main);
    this.appState.favourites.push('a');
  }
}