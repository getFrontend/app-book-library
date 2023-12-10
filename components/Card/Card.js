import { DivComponent } from "../../common/divComponent";
import './card.css'

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  render() {
    this.element.classList.add('card');
    this.element.innerHTML = `
      
    `;

    return this.element;
  }
}