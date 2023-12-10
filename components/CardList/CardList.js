import { DivComponent } from "../../common/divComponent";
import { Card } from "../Card/Card";
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
      <h1>Знайдено книг: ${this.parentState.numFound}</h1>
    `;

    for (const card of this.parentState.list) {
      this.element.append(new Card(this.appState, card).render());
    }

    return this.element;
  }
}