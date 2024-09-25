import Ability from "./ability.js";

const ability = new Ability('Spin Dash', 'Rolling around in the speed of sound!', '../imgs/spin-dash.png', 20 , 1);

document.addEventListener('DOMContentLoaded', function() {
    const ablGroup = document.getElementById('abilityGroup');
    ability.createHtml(ablGroup);
  });

  