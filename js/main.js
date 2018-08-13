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

const arrowsWrapper = document.querySelectorAll(`.arrows__wrap`);
const arrows = document.querySelectorAll(`.arrows__btn`);

let templateIndex = 0;

const showScreenByNum = (num) => {
  main.innerHTML = ``;
  main.appendChild(screens[num].content.cloneNode(true));
};

const switchScreen = (num) => {
  showScreenByNum(num);
  document.addEventListener(`keyup`, (e) => {
    if (e.which === 37 && num !== 0) {
      showScreenByNum(--num);
    } else if (e.which === 39 && num !== screens.length - 1) {
      showScreenByNum(++num);
    }
  });
  arrowsWrapper[0].addEventListener(`click`, (e) => {
    if (e.target === arrows[0] && num !== 0) {
      showScreenByNum(--num);
    } else if (e.target === arrows[1] && num !== screens.length - 1) {
      showScreenByNum(++num);
    }
  });
};

switchScreen(templateIndex);
