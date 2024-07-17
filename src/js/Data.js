import Line from './Line';
import Popup from './components/popup/Popup';

export default class Data {
  constructor() {
    const data = JSON.parse(localStorage.getItem('data'));
    this.data = Array.isArray(data) ? data : [];
  }

  get posts() {
    return this.data;
  }

  savePost(form, coordinate) {
    const { message } = form;

    if (!message.value) return;

    const post = {
      date: Date.now(),
      message: message.value,
      coordinate,
    };

    this.data.push(post);
    localStorage.setItem('data', JSON.stringify(this.data));
    Line.renderPost(post);
    message.value = '';
  }

  getCoordinate(form) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.onCoordinateSuccess.bind(this, form),
        Data.onCoordinateError.bind(this, form),
        { enableHighAccuracy: true },
      );
    }
  }

  onCoordinateSuccess(form, data) {
    const { latitude, longitude } = data.coords;

    this.savePost(form, {
      lat: latitude,
      long: longitude,
    });
  }

  static onCoordinateError(form) {
    const popup = new Popup();
    popup.render(form);
  }
}
