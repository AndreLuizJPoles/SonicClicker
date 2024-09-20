let totalRings = 0;
let currentRings = 0;
let clickValue = 1;

function clickOnBadnik(){
    totalRings+=clickValue;
    currentRings+=clickValue;
    updateRingCount();
}

function updateRingCount(){
    const objRingsCounter = document.getElementById('ringsCounter');
    objRingsCounter.innerHTML = `${currentRings} Rings`;
}