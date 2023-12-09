import { DivComponent } from "../../common/divComponent";
import './search.css'

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.element.classList.add('search');
    this.element.innerHTML = `
      
    `;

    return this.element;
  }
}