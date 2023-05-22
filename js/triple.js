/*
1. addEventListener to the button
2. Get the value of input field
3. Get the result field

*/


// Step-1
document.getElementById('btn-triple').addEventListener('click', function () {
    // Step-2
    const inputField = document.getElementById('input-field');
    const previousInputString = inputField.value;
    const previousInput = parseFloat(previousInputString);


    if (isNaN(previousInput)) {
        alert('Please enter a number');
        return;
    }

    // Step-3
    const resultField = document.getElementById('result');
    const currentResult = previousInput * 3;
    resultField.innerText = currentResult;
})