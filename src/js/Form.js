import Data from './Data';

export default class Form {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.bindToDom();
  }

  bindToDom() {
    this.container.insertAdjacentHTML('beforeend', Form.markup());

    const form = document.querySelector('.form');
    form.addEventListener('submit', Form.onSubmit);
  }

  static onSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const data = new Data();

    data.getCoordinate(form);
  }

  static markup() {
    return `
      <form class="form">
        <div class="form__group">
          <label for="message"></label>
          <input class="form__text" name="message" id="message">
        </div>
      </form>
    `;
  }
}
