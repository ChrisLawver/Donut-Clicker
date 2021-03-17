let donutCount = 0;
let donutCountDisplay = document.getElementById("donut-count");
let donutsPerClick = document.getElementById("donuts-per-click");

let autoClickerCount = 0;
let autoClickerDisplay = document.getElementById("auto-clicker-count");

let autoClickerCost = 100;
let autoClickerCostDisplay = document.getElementById("buy-auto-clicker");
autoClickerCostDisplay.innerText = `(${autoClickerCost} donuts)`;

let donutMultiplierCount = 0;
let donutMultiplierDisplay = document.getElementById("donut-multiplier-count");

let donutMultiplierCost = 10;
let donutMultiplierCostDisplay = document.getElementById("buy-donut-multiplier");
donutMultiplierCostDisplay.innerText = `(${donutMultiplierCost} donuts)`;

let donutMultiplier = 1;
donutsPerClick.innerText = `(${donutMultiplier.toFixed(2)} donuts per click)`;
let counter; 

//Disables buttons if the user can't afford to buy auotoclicker or donut multiplier
let autoClickerButton = document.getElementById("auto-clicker-button");
autoClickerButton.addEventListener("click", addAutoClicker);

let donutMultiplierButton = document.getElementById("donut-multiplier-button");
donutMultiplierButton.addEventListener("click", addDonutMultiplier);

let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", reset);

function toggleButtons(){
    if(donutCount < autoClickerCost){
        autoClickerButton.disabled = true;
    }
    else{
        autoClickerButton.disabled = false;
    }
    
    if(donutCount < donutMultiplierCost){
        donutMultiplierButton.disabled = true;
    }
    else{
        donutMultiplierButton.disabled = false;
    }

    if(donutCount === 0 && autoClickerCount === 0 && donutMultiplierCount === 0){
        resetButton.disabled = true;
    }
    else{
        resetButton.disabled = false;
    }
}

toggleButtons()

//Tracks amount of clicks and sets/displays the donut count value
let donutClicker = document.getElementById("donut-clicker-button");
donutClicker.addEventListener("click", addDonuts);

function addDonuts() {
    donutCount = (donutCount + donutMultiplier);
    donutCountDisplay.innerText = `: ${donutCount.toFixed(2)}`;
    console.log(`Donut count: ${donutCount}`);
    toggleButtons();
}

//Subtracts amount of donuts based on the number that as passed in
function subtractDonuts(number) {
    donutCount -= number;
    donutCountDisplay.innerText = `: ${donutCount.toFixed(2)}`;
    console.log(`Donut count: ${donutCount}`);
    toggleButtons();
}

//Increments donut count per second based on how manny autoclickers are active
function addAutoClicker() {
    if (donutCount >= autoClickerCost) {
        autoClickerCount++;
        counter = setInterval(addDonuts, 1000);   


        subtractDonuts(Math.floor(autoClickerCost));
        autoClickerCost += (autoClickerCost * .1);

        console.log(`Autoclicker count: ${autoClickerCount}`);
        autoClickerDisplay.innerText = `: ${autoClickerCount}`;
        autoClickerCostDisplay.innerText = `(${Math.floor(autoClickerCost)} donuts)`;
    }
}

//Adds donut multipliers
function addDonutMultiplier() {
    if (donutCount >= donutMultiplierCost) {
        donutMultiplierCount++;
        donutMultiplierDisplay.innerText = `: ${donutMultiplierCount}`;
        console.log(`Donut Multiplier count: ${donutMultiplierCount}`);

        subtractDonuts(Math.floor(donutMultiplierCost));
        donutMultiplierCost += (donutMultiplierCost * .1);
        donutMultiplierCostDisplay.innerText = `(${Math.floor(donutMultiplierCost)} donuts)`;
        

        donutMultiplier = Math.pow(1.2, donutMultiplierCount);
        donutsPerClick.innerText = `(${donutMultiplier.toFixed(2)} donuts per click)`;
        console.log(`Donut Multiplier: ${donutMultiplier}`);
    }
}

//resets the game
function reset(){
    donutCount = 0;
    donutCountDisplay.innerText = `: ${donutCount.toFixed(2)}`;

    for(i = 0; i <= 10000; i++)
    {
        clearInterval(i);
    }

    autoClickerCount = 0;
    autoClickerDisplay.innerText = `: ${autoClickerCount}`;
    autoClickerCost = 100;
    autoClickerCostDisplay.innerText = `(${Math.floor(autoClickerCost)} donuts)`;

    donutMultiplierCount = 0;
    donutMultiplierDisplay.innerText = `: ${donutMultiplierCount}`;
    donutMultiplier = 1;
    donutMultiplierCost = 10;
    donutMultiplierCostDisplay.innerText = `(${Math.floor(donutMultiplierCost)} donuts)`;
    donutsPerClick.innerText = `(${donutMultiplier.toFixed(2)} donuts per click)`;

    toggleButtons();
}