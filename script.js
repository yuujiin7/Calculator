// This function clear all the values
function clearScreen() {
 document.getElementById("result").value = "";
}

// This function display values
function display(value) {
 document.getElementById("result").value += value;
}
// This function evaluates the expression and return result
function calculate(value) {
    var p = document.getElementById("result").value;
    const usingSplit = p.split('△');
    baseValue = usingSplit[0];
    heightValue = usingSplit[1];
    // calculate the area
    const areaValue = (baseValue * heightValue) / 2;
    document.getElementById("result").value =areaValue;
}

function cToF(value) 
{
    var x = document.getElementById("result").value;
    var cTemp = x;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
    document.getElementById("result").value = message;
}

function fToC(value) 
{
    var x = document.getElementById("result").value;
    var fTemp = x;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
    document.getElementById("result").value = message;
} 
function square(value)
{
    var x = document.getElementById("result").value;
    var sqRoot = Math.sqrt(x);
    document.getElementById("result").value = sqRoot;
}

