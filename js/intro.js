import {parseHTML, showScreenByNum} from './utils';
import {greeting} from './greeting';

export const intro = parseHTML(`<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`);

const asterisk = intro.querySelector(`.intro__asterisk`);
asterisk.addEventListener(`click`, () => {
  showScreenByNum(greeting);
});

