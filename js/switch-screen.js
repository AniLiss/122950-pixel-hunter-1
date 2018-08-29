export const switchLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be a type of number`);
  }
  if (level < 0) {
    throw new Error(`Negative values are not possible`);
  }
  const newGame = Object.assign({}, game, {level});

  return newGame;
};
