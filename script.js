function loadReport(element){
    alert("Loading weather report for " + element.innerText);
}

function changeCursor(element){
    element.style.cursor = "pointer";
}

function deleteMessage(){ 
    document.querySelector(".cookie").remove();
}

function changeMetric(element){
    var temperaturesArr = document.getElementsByClassName("temperature");
    for (let i = 0; i < temperaturesArr.length; i++) {
        var tempVal = parseInt(temperaturesArr[i].innerText);
        if(element.value == "celsius") {
            temperaturesArr[i].innerText = Math.round((tempVal - 32) * 5 / 9) + "°";
        }
        else {
            temperaturesArr[i].innerText = Math.round((9 / 5) * tempVal + 32) + "°";
        }
    }
}