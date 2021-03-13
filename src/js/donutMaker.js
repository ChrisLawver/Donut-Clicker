let donutCount = 0;
let donutCountDisplay = document.getElementById("donut-count");

let autoClickerCount = 0;
let autoClickerDisplay = document.getElementById("auto-clicker-count");

//Tracks amount of clicks and sets the donut count value
let donutClicker = document.getElementById("donut-clicker-button");
donutClicker.addEventListener("click", addDonuts);

function addDonuts(){
    donutCount++;
    console.log(`Donut count: ${donutCount}`);
    donutCountDisplay.innerText = `: ${donutCount}`;
}

//Increments donut count per second based on how manny autoclickers are active
let autoClicker = document.getElementById("auto-clicker-button");
autoClicker.addEventListener("click", addAutoClicker);

function addAutoClicker(){
    setInterval(addDonuts, 1000);
    autoClickerCount++;
    console.log(`Autoclicker count: ${autoClickerCount}`);
    autoClickerDisplay.innerText = `: ${autoClickerCount}`;
}