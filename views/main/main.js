import onChange from "on-change";
import { AbstractView } from "../../common/view";
import { Header } from "../../components/Header/Header";
import { Search } from "../../components/Search/Search";

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
    // main.innerHTML = `Кількість знайденних книг: ${this.appState.favourites.length}`;
    main.append(new Search(this.state).render());
    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader();
    // this.appState.favourites.push('a');
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}