
const screen=document.querySelector(".screen")

const keys=document.querySelector(".keys")
var displayScreen="0";

updateDisplay(displayScreen)

function updateDisplay(val){
    screen.value=val;
}

keys.addEventListener("click",function(e){
   
    var element=e.target;

    if (!element.matches("button")) return;

    if (element.classList.contains("operator")){
        console.log(element.value)
        return;
    }
    if (element.classList.contains("decimal")){
        displayScreen =displayScreen + "."
        updateDisplay(displayScreen)
        console.log("decimal",element.value)
        return;
    }

    if (element.classList.contains("clear")){
        displayScreen ="0"
        updateDisplay(displayScreen)
        console.log("clear",element.value)
        return;
    }
    
    if (element.classList.contains("equal")){
    
        console.log("equal",element.value)
        return;
    }
   
    displayScreen= displayScreen === "0" ? element.value : displayScreen+element.value;
    updateDisplay(displayScreen);
});

