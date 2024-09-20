let totalRings = 0;
let currentRings = 0;
let clickValue = 1;
let tailsValue = 0;

setInterval(() => {
    currentRings += tailsValue;
    totalRings += tailsValue;
    updateRingCount();
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

function spinDashUpgrade(){
    if(currentRings >= 100){
        currentRings-=100;
        clickValue++;
        updateRingCount();
    }
}

function tailsUpgrade(){
    if(currentRings >= 500){
        currentRings-=500;
        tailsValue++;
        updateRingCount();
    }
}