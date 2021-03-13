let donutCount = 0;
let donutCountDisplay = document.getElementById("donut-count");

let autoClickerCount = 0;
let autoClickerDisplay = document.getElementById("auto-clicker-count");

let autoClickerCost = 100;
let autoClickerCostDisplay = document.getElementById("buy-auto-clicker");
autoClickerCostDisplay.innerText = `(${autoClickerCost} donuts)`;

//Tracks amount of clicks and sets/displays the donut count value
let donutClicker = document.getElementById("donut-clicker-button");
donutClicker.addEventListener("click", addDonuts);

function addDonuts(){
    donutCount++;
    console.log(`Donut count: ${donutCount}`);
    donutCountDisplay.innerText = `: ${donutCount}`;
}

//Subtracts amount of donuts based on the number that as passed in
function subtractDonuts(number){
    donutCount -= number;
    console.log(`Donut count: ${donutCount}`);
    donutCountDisplay.innerText = `: ${donutCount}`;
}

//Increments donut count per second based on how manny autoclickers are active
let autoClicker = document.getElementById("auto-clicker-button");
autoClicker.addEventListener("click", addAutoClicker);

function addAutoClicker(){
    if(donutCount >= autoClickerCost){
        setInterval(addDonuts, 1000);
        autoClickerCount++;

        subtractDonuts(Math.floor(autoClickerCost));
        autoClickerCost += (autoClickerCost * .1);

        console.log(`Autoclicker count: ${autoClickerCount}`);
        autoClickerDisplay.innerText = `: ${autoClickerCount}`;
        autoClickerCostDisplay.innerText = `(${Math.floor(autoClickerCost)} donuts)`;
    }
}