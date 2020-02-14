const calculate = () => {
    const numOne = document.getElementById('numOne').valueAsNumber;
    const numTwo = document.getElementById('numTwo').valueAsNumber;
    const operator = document.getElementByName('operator').value;
    const output = document.getElementById('output');

    console.log(operator)
    if (operator === "+") {
        const result = numOne + numTwo;
        output.innerHTML = result;
    } else if (operator === "-") {
        const result = numOne - numTwo;
        output.innerHTML = result;
    } else if (operator === "/") {
        const result = numOne / numTwo;
        output.innerHTML = result;
    } else if (operator === "*") {
        const result = numOne * numTwo;
        output.innerHTML = result;
    }
    return "Invalid Operator"
}