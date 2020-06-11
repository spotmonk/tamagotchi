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

function randomNumberRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default { printToDom, printNumbers, randomNumberRange };
