import Ability from "./ability.js";

let currentRings = 0;
let totalRings = 0;

const ability = new Ability('Spin Dash', 'Rolling around in the speed of sound!', '../imgs/spin-dash.png', 20, 1);

document.addEventListener('DOMContentLoaded', function () {
  const ablGroup = document.getElementById('abilityGroup');
  ability.createHtml(ablGroup);
});

function updateRingCount() {
  const objRingsCounter = document.getElementById('ringsCounter');
  objRingsCounter.innerHTML = `${currentRings} Rings`;
}

const badnik = document.getElementById('badnik');

badnik.addEventListener('click', function () {
  let aux = ability.produce();
  totalRings += aux;
  currentRings += aux;
  updateRingCount();
});

/*setInterval(() => {
  currentRings += tailsValue;
  totalRings += tailsValue;
  updateRingCount();
  if(totalRings >= 1000){
      const tails = document.getElementById('tails');
      tails.style.display = 'flex';
  }
},1000);*/