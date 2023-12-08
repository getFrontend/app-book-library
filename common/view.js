export class AbstractView {
  constructor() {
    this.app = document.getElementById('app');
  }

  setTitle(title) {
    document.title = title;
  }

  render() {
    return;
  }

  destroy() {
    return;
  }
}