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

    const cards = document.createElement('div');
    cards.classList.add('card-list');
    this.element.append(cards);

    for (const card of this.parentState.list) {
      cards.append(new Card(this.appState, card).render());
    }

    return this.element;
  }
}