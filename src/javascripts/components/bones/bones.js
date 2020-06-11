import utils from '../../helpers/utils';
import './bones.scss';
import monster from '../../../assets/monster.png';
import stats from '../../helpers/data/stats';
import buttonfunc from '../buttonfunc/buttonfunc';

const popButtons = () => {
  const buttons = document.querySelectorAll('.btn');
  const buttonText = stats.getButtons();
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].innerHTML = buttonText[i];
  }
  buttons.forEach((button) => button.addEventListener('click', buttonfunc.buttonclick));
};

const setBones = () => {
  const nodes = document.querySelector('#app').childNodes;
  for (let i = 2; i < nodes.length - 2; i += 1) {
    if (nodes[i].nodeType === 1) {
      let domString = '';
      const nodeid = nodes[i].id;
      domString += `<h1 class="title">${nodeid}</h1>`;
      domString += `<div class="num" id="${nodeid}num"></div>`;
      domString += `<div class="buttonsDiv"><button class="btn btn1" id="${nodeid}btn1">Btn1</button><button class="btn btn2" id="${nodeid}btn2">Btn2</button></div>`;
      utils.printToDom(`#${nodeid}`, domString);
    }
  }
  const imgstring = `<img src=${monster}>`;
  utils.printToDom('#pet', imgstring);

  const sliderstring = '<input type="range" id="total" class="totalSlider" min="0" max="10" disabled="true">';
  utils.printToDom('#progress', sliderstring);
  document.querySelector('#total').value = 3;
  utils.printNumbers();
  popButtons();
};


export default { setBones };
