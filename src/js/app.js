import Page from './Page';
import Form from './Form';
import Line from './Line';
import Data from './Data';

const pageContainer = document.querySelector('body');
const page = new Page(pageContainer);

page.init();

const formContainer = document.querySelector('.line__form');
const form = new Form(formContainer);

form.init();

const lineContainer = document.querySelector('.line__list');
const line = new Line(lineContainer);

const data = new Data();
const { posts } = data;

line.init(posts);
