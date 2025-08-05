import { add } from './modules/add.js';
import { subtract } from './modules/subtract.js';
import { multiply } from './modules/multiply.js';
import { divide } from './modules/divide.js';

// Get DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDiv = document.getElementById('result');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');

// Helper function to get input values
function getNumbers() {
    return {
        num1: Number(num1Input.value),
        num2: Number(num2Input.value)
    };
}

// Add event listeners for each operation
addBtn.addEventListener('click', () => {
    const { num1, num2 } = getNumbers();
    resultDiv.textContent = `${num1} + ${num2} = ${add(num1, num2)}`;
});

subtractBtn.addEventListener('click', () => {
    const { num1, num2 } = getNumbers();
    resultDiv.textContent = `${num1} - ${num2} = ${subtract(num1, num2)}`;
});

multiplyBtn.addEventListener('click', () => {
    const { num1, num2 } = getNumbers();
    resultDiv.textContent = `${num1} × ${num2} = ${multiply(num1, num2)}`;
});

divideBtn.addEventListener('click', () => {
    const { num1, num2 } = getNumbers();
    try {
        resultDiv.textContent = `${num1} ÷ ${num2} = ${divide(num1, num2)}`;
    } catch (error) {
        resultDiv.textContent = error.message;
    }
});
