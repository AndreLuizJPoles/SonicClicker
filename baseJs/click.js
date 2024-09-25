let totalRings = 0;
let currentRings = 0;
let clickValue = 1;
let tailsValue = 0;

setInterval(() => {
    currentRings += tailsValue;
    totalRings += tailsValue;
    updateRingCount();
    if(totalRings >= 1000){
        const tails = document.getElementById('tails');
        tails.style.display = 'flex';
    }
},1000);

function clickOnBadnik(){
    totalRings+=clickValue;
    currentRings+=clickValue;
    updateRingCount();
}

function updateRingCount(){
    const objRingsCounter = document.getElementById('ringsCounter');
    objRingsCounter.innerHTML = `${currentRings} Rings`;
}