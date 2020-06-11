import stats from '../../helpers/data/stats';
import utils from '../../helpers/utils';


const buttonclick = (e) => {
  e.preventDefault();
  const emoji = e.target.innerText;
  switch (emoji) {
    case '🥗':
      stats.updateStat('eat', 10);
      stats.updateStat('energy', utils.randomNumberRange(-15, -1));
      stats.updateStat('fun', utils.randomNumberRange(-15, -1));
      utils.printNumbers();
      break;
    case '🍦':
      stats.updateStat('eat', -3);
      stats.updateStat('strength', utils.randomNumberRange(-15, -1));
      utils.printNumbers();
      break;
    case '⚽️':
      stats.updateStat('fun', 50);
      utils.printNumbers();
      break;
    case '🎱':
      stats.updateStat('fun', 2);
      utils.printNumbers();
      break;
    case '🏃💨':
      stats.updateStat('strength', 1);
      stats.updateStat('energy', utils.randomNumberRange(1, 15));
      stats.updateStat('fun', utils.randomNumberRange(-15, -1));
      utils.printNumbers();
      break;
    case '⚔️':
      stats.updateStat('strength', -10);
      stats.updateStat('energy', utils.randomNumberRange(-15, -1));
      stats.updateStat('eat', utils.randomNumberRange(-15, -1));
      stats.updateStat('fun', utils.randomNumberRange(-15, -1));
      utils.printNumbers();
      break;
    case '😴':
      stats.updateStat('energy', 50);
      utils.printNumbers();
      break;
    case '🛌':
      stats.updateStat('energy', 60);
      utils.printNumbers();
      break;
    default:
  }
};

export default { buttonclick };
