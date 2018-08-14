'use strict';

const screens = [...document.querySelectorAll(`template`)];
const main = document.getElementById(`main`);
const parseHTML = (html) => {
  const t = document.createElement(`template`);
  t.innerHTML = html;
  return t.content.cloneNode(true);
};
const arrowsHtml = parseHTML(`<div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
</div>`);
document.body.appendChild(arrowsHtml);

const arrowsWrapper = document.querySelector(`.arrows__wrap`);
const arrows = document.querySelectorAll(`.arrows__btn`);

let templateIndex = 0;

const initSwitchHandlers = () => {
  document.addEventListener(`keyup`, handleKeyboardArrow);
  arrowsWrapper.addEventListener(`click`, handleClickArrow);
};

const showScreenByNum = (index) => {
  if (templateIndex < 0) {
    return (templateIndex = 0);
  } else if (templateIndex > screens.length - 1) {
    return (templateIndex = screens.length - 1);
  }
  main.innerHTML = ``;
  main.appendChild(screens[index].content.cloneNode(true));
  return (templateIndex = index);
};

const handleKeyboardArrow = (e) => {
  if (e.which === 37) {
    showScreenByNum(--templateIndex);
  } else if (e.which === 39) {
    showScreenByNum(++templateIndex);
  }
};

const handleClickArrow = (e) => {
  if (e.target === arrows[0]) {
    showScreenByNum(--templateIndex);
  } else if (e.target === arrows[1]) {
    showScreenByNum(++templateIndex);
  }
};

showScreenByNum(templateIndex);
initSwitchHandlers();
