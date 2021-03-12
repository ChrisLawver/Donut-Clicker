let donutCount = 0;

let donutClicker = document.getElementById("donut-clicker-button");
donutClicker.addEventListener("click", addDonuts);

function addDonuts(){
    donutCount++;
    console.log(donutCount);
    donutCountDisplay.innerText = `: ${donutCount}`;
}
