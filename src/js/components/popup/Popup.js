import './css/style.css';
import Data from '../../Data';
import validCoordinate from '../../functions';

export default class Popup {
  constructor() {
    this.container = document.querySelector('body');
  }

  render(form) {
    const markup = Popup.markup();
    Popup.remove();

    this.container.insertAdjacentHTML('beforeend', markup);

    const close = document.querySelector('.form__btn-close');
    close.addEventListener('click', Popup.close);

    const formCoordinate = document.querySelector('.formCoordinate');
    formCoordinate.addEventListener('submit', Popup.onSubmit.bind(this, form));
  }

  static onSubmit(form, e) {
    e.preventDefault();

    const formCoordinate = e.target;

    const coordinate = validCoordinate(formCoordinate.coordinate.value);

    if (!coordinate) {
      formCoordinate.coordinate.style.border = '1px solid red';
    } else {
      formCoordinate.coordinate.style.border = '1px solid green';
      Popup.remove();
      const data = new Data();

      data.savePost(form, coordinate);
    }
  }

  static close() {
    Popup.remove();
  }

  static remove() {
    const items = document.querySelectorAll('.popup');

    if (items.length) {
      items.forEach((item) => {
        item.parentNode.removeChild(item);
      });
    }
  }

  static markup() {
    return `
      <div class="popup">
        <div class="popup__window">
          <div class="popup__title">Что то пошло не так</div>
          <div class="popup__body">
            <p>К сожалению, нам не удалось определить ваше местоположение, пожалуйста, дайте разрешение на использование геолокации, либо введите координаты в ручную.</p>
            <form class="form formCoordinate">
              <div class="form__group">
                <label for="coordinate"></label>
                <input class="form__text" name="coordinate" id="coordinate">
              </div>
              <div class="form__group form__buttons">
                <button class="form__btn form__btn-close" type="button">Отмена</button>
                <button class="form__btn">Ок</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}
