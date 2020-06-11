import stats from './data/stats';

const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHTML = textToPrint;
};

const printNumbers = () => {
  const numbers = stats.getStats();
  printToDom('#eatnum', numbers[0].eat);
  printToDom('#playnum', numbers[0].fun);
  printToDom('#fightnum', numbers[0].strength);
  printToDom('#sleepnum', numbers[0].energy);
};

const randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const checkProgress = () => {
  const numbers = stats.getStats();
  let num = 0;
  switch (true) {
    case (numbers[0].eat === 100):
      num += 2;
      break;
    case (numbers[0].eat === 0):
      num += 0;
      break;
    default:
      num += 1;
  }
  switch (true) {
    case (numbers[0].fun === 100):
      num += 2;
      break;
    case (numbers[0].fun === 0):
      num += 0;
      break;
    default:
      num += 1;
  }
  switch (true) {
    case (numbers[0].strength === 100):
      num += 2;
      break;
    case (numbers[0].strength === 0):
      num += 0;
      break;
    default:
      num += 1;
  }
  switch (true) {
    case (numbers[0].energy === 100):
      num += 2;
      break;
    case (numbers[0].energy === 0):
      num += 0;
      break;
    default:
      num += 1;
  }
  document.querySelector('#total').value = num;
};

export default {
  printToDom,
  printNumbers,
  randomNumberRange,
  checkProgress,
};
