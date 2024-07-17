import Line from './Line';

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
}
