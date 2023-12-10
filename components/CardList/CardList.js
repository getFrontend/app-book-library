import { DivComponent } from "../../common/divComponent";
import './card-list.css'

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    if (this.parentState.loading) {
      this.element.innerHTML = `
        <div class="loading">
          Зачекайте, триває завантаження данних...
        </div>
      `;
      return this.element;
    }
    this.element.classList.add('card-list');
    this.element.innerHTML = `
      <h1>Знайдено книг: ${this.parentState.list.length}</h1>
    `;

    return this.element;
  }
}