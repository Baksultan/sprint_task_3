const selectElement = document.querySelector('select');

let inputValue;

const input = document.querySelector('input');

input.addEventListener('input', function() {
    inputValue = input.value;
    updateValues();
});

selectElement.addEventListener('change', (event) => {
    updateValues();
});

function updateValues() {
    let selectedOption = selectElement.value;
    if (selectedOption == "value1") {
        document.getElementById("kzt").value = "-";
        document.getElementById("usd").value = (inputValue/431).toFixed(2);
        document.getElementById("eur").value = (inputValue/509).toFixed(2);
    } else if (selectedOption == "value2") {
        document.getElementById("kzt").value = (inputValue*429).toFixed(2);
        document.getElementById("usd").value = "-";
        document.getElementById("eur").value = ((inputValue*429)/509).toFixed(2);
    } else if (selectedOption == "value3") {
        document.getElementById("kzt").value = (inputValue*507).toFixed(2);
        document.getElementById("usd").value = ((inputValue*507)/431).toFixed(2);
        document.getElementById("eur").value = "-";
    }
}





