'use strict';

const face = document.querySelector('.js_face');
const eye = document.querySelector('.js_rigth');

face.addEventListener('click', classEye);

function classEye(event) {
  event.preventDefault();
  eye.classList.toggle('eye__rigth__transform');
  face.classList.toggle('scale');
}
