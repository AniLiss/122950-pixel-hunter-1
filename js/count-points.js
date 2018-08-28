const POINTS_MAP = {
  rightAnswer: 100,
  fastAnswer: 50,
  slowAnswer: -50,
  extraLife: 50
};

const ANSWERS_MAP = {
  slowAnswer: 20,
  quickAnswer: 10
};

export const countPoints = (answers, lives) => {

  let gamePoints = 0;

  if (answers.length < 10) {
    return -1;
  }

  answers.forEach((answer) => {
    if (answer.time > ANSWERS_MAP.quickAnswer && answer.time <= ANSWERS_MAP.slowAnswer) {
      gamePoints += POINTS_MAP.fastAnswer;
    }

    if (answer.answer === true) {
      gamePoints += POINTS_MAP.rightAnswer;
    }

    if (answer.time > ANSWERS_MAP.slowAnswer) {
      gamePoints += POINTS_MAP.slowAnswer;
    }

  });

  gamePoints += lives * POINTS_MAP.extraLife;

  return gamePoints;
};
