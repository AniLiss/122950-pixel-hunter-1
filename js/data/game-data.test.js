import {assert} from 'chai';
import {countPoints} from '../count-points';
import {countLives} from '../count-lives';
import {switchLevel} from '../switch-screen';
import {timeCounter} from '../count-time';
import {INITIAL_GAME} from '../initial-data';

const TEST_ANSWERS = {
  answer1: [{answer: true, time: 30}, {answer: false, time: 10}],
  answer2: [{answer: true, time: 11}, {answer: true, time: 12}, {answer: true, time: 13}, {answer: true, time: 14},
    {answer: true, time: 15}, {answer: true, time: 16}, {answer: true, time: 17}, {answer: true, time: 18},
    {answer: true, time: 19}, {answer: true, time: 20}],
  answer3: [{answer: true, time: 11}, {answer: true, time: 12}, {answer: true, time: 13}, {answer: true, time: 14},
    {answer: true, time: 15}, {answer: true, time: 30}, {answer: true, time: 17}, {answer: true, time: 18},
    {answer: true, time: 19}, {answer: true, time: 20}],
  lives2: 2,
  lives3: 3
};

const MAX_LIVES = 3;

describe(`Check points`, () => {
  it(`should return -1 when not all questions are answered`, () => {
    assert.equal(countPoints(TEST_ANSWERS.answer1, MAX_LIVES), -1);
  });

  it(`should return 10500 if (answers = 10) (lives = 3) && (10 < answerTime < 20)`, () => {
    assert.equal(countPoints(TEST_ANSWERS.answer2, MAX_LIVES), 1650);
  });

  it(`should subtract 50 points if an answer was slow`, () => {
    assert.equal(countPoints(TEST_ANSWERS.answer3, MAX_LIVES), 1550);
  });
});

describe(`Check lives`, () => {
  it(`Game is over`, () => {
    assert.equal(countLives(0), -1);
  });

  it(`Game is going`, () => {
    assert.equal(countLives(2), 1);
  });
});

describe(`Check switch level`, () => {
  it(`Level is switched`, () => {
    assert.equal(switchLevel(INITIAL_GAME, 2).level, 2);
  });

  it(`Negative values are not possible`, () => {
    assert.throws(() => switchLevel(INITIAL_GAME, -1).level, /Negative values are not possible/);
  });

  it(`Level should be a type of number`, () => {
    assert.throws(() => switchLevel(INITIAL_GAME, []).level, /Level should be a type of number/);
  });
});

describe(`Check switch level`, () => {
  it(`Time is changed`, () => {
    assert.equal(timeCounter(INITIAL_GAME, 15).time, 15);
  });

  it(`Negative values are not possible`, () => {
    assert.throws(() => timeCounter(INITIAL_GAME, -1).time, /Negative values are not possible/);
  });

  it(`Level should be a type of number`, () => {
    assert.throws(() => timeCounter(INITIAL_GAME, []).time, /Level should be a type of number/);
  });
});
