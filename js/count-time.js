export const timeCounter = (game, time) => {
  if (typeof time !== `number`) {
    throw new Error(`Level should be a type of number`);
  }
  if (time < 0) {
    throw new Error(`Negative values are not possible`);
  }
  const newGame = Object.assign({}, game, {time});

  return newGame;
};

