function loadReport(element){
    alert("Loading weather report for " + element.innerText);
}

function changeCursor(element){
    element.style.cursor = "pointer";
}

function deleteMessage(){ 
    document.querySelector(".cookie").remove();
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

// USED CODING DOJO SOLUTION FOR HELP ON THIS FUNCTION

function changeMetric(element){
    for (let i = 1; i < 9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "celsius") {
            tempSpan.innerText = f2c(tempVal) + "°";
        }
        else {
            tempSpan.innerText = c2f(tempVal) + "°";
        }
    }
}