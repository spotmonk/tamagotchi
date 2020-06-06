import utils from './helpers/utils';
import './bones.scss';

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
  const imgstring = '<img src="src/img/monster.png">';
  utils.printToDom('#pet', imgstring);

  const sliderstring = '<input type="range" id="total" class="totalSlider" min="0" max="10" disabled="true">';
  utils.printToDom('#progress', sliderstring);
  document.querySelector('#total').value = 3;
  utils.printNumbers();
};


export default { setBones };
