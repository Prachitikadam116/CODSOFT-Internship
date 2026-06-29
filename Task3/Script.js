let historyData = [];

function appendValue(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function backspace(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate(){
    let expression = document.getElementById("display").value;

    try{
        let result = eval(expression);

        historyData.push(`${expression} = ${result}`);

        document.getElementById("display").value = result;
    }
    catch{
        document.getElementById("display").value = "Error";
    }
}

function showHistory(){
    let historyBox = document.getElementById("history");

    historyBox.innerHTML = "<h3>Calculation History</h3>";

    historyData.forEach(item => {
        historyBox.innerHTML += `<p>${item}</p>`;
    });
}

function clearHistory(){
    historyData = [];
    document.getElementById("history").innerHTML =
    "<h3>Calculation History</h3>";
}