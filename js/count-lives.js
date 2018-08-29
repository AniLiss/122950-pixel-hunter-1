import {INITIAL_GAME} from './initial-data';

export const countLives = (lives) => lives > 0 && lives <= INITIAL_GAME.live ? --lives : -1;
