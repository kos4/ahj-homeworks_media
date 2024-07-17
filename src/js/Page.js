export default class Page {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.container.insertAdjacentHTML('beforeend', Page.markup());
  }

  static markup() {
    return `
      <section class="line">
        <div class="container">
          <div class="line__list"></div>
          <div class="line__form"></div>
        </div>
      </section>
    `;
  }
}
