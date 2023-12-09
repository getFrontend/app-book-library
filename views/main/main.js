import onChange from "on-change";
import { AbstractView } from "../../common/view";
import { Header } from "../../components/Header/Header";
import { Search } from "../../components/Search/Search";

const URL = 'https://openlibrary.org/search.json';

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
    this.state = onChange(this.state, this.useState.bind(this));
    this.setTitle('Пошук книг');
  }

  async loadList(q, offset) {
    const res = await fetch(`${URL}?q=${q}&offset=${offset}`);
    return res.json();
  }

  async useState(path) {
    if (path === 'searchQuery') {
      this.state.loading = true;
      const data = await this.loadList(this.state.searchQuer, this.state.offset);
      this.state.loading = false;
      this.state.list = data.docs;
    }
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