export default class Line {
  constructor(container) {
    this.container = container;
  }

  init(posts) {
    this.bindToDom(posts);
  }

  bindToDom(posts) {
    this.renderList(posts);
  }

  renderList(posts) {
    posts.forEach((post) => {
      this.container.insertAdjacentHTML('beforeend', Line.markup(post));
    });
  }

  static renderPost(post) {
    const container = document.querySelector('.line__list');

    container.insertAdjacentHTML('beforeend', Line.markup(post));
  }

  static markup(post) {
    return `
      <div class="line__item">
        <div class="line__item-date">
          ${new Date(post.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })}
        </div>
        <div class="line__item-message">${post.message}</div>
        <div class="line__item-coordinate">[${post.coordinate.lat}, ${post.coordinate.long}]</div>
      </div>
    `;
  }
}
