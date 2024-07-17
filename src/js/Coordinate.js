import Popup from './components/popup/Popup';
import Data from './Data';

export default class Coordinate {
  constructor() {
    if (!navigator.geolocation) {
      throw new Error('Нет модуля геолокации.');
    }
  }

  getCoordinate(form) {
    navigator.geolocation.getCurrentPosition(
      Coordinate.onCoordinateSuccess.bind(this, form),
      Coordinate.onCoordinateError.bind(this, form),
      { enableHighAccuracy: true },
    );
  }

  static onCoordinateSuccess(form, data) {
    const { latitude, longitude } = data.coords;
    const localData = new Data();

    localData.savePost(form, {
      lat: latitude,
      long: longitude,
    });
  }

  static onCoordinateError(form) {
    const popup = new Popup();
    popup.render(form);
  }
}
