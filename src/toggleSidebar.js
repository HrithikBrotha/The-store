import { getElement } from './utils.js';

const togglebtn = getElement('.toggle-nav');
const sidebar = getElement('.sidebar-overlay');
const closebtn = getElement('.sidebar-close');

togglebtn.addEventListener('click', () => {
  sidebar.classList.add('show');
});
closebtn.addEventListener('click', () => {
  sidebar.classList.remove('show');
});
