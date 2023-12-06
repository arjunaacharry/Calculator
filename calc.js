var screen = document.getElementById('screen');
var resultCalculated = false;

function btnClick(value) {
    if (resultCalculated) {
        clearScreen();
        resultCalculated = false;
    }
    screen.value += value;
}
function clearScreen(){
    screen.value = "";
}

function findResult() {
    var result = eval(screen.value);
    screen.value = result;
    resultCalculated = true;
}   