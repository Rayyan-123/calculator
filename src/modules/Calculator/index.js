import { add } from './operations/add.js';
import { subtract } from './operations/subtract.js';
import { multiply } from './operations/multiply.js';
import { divide } from './operations/divide.js';

export class Calculator {
    constructor() {
        this.initializeUI();
        this.attachEventListeners();
    }

    initializeUI() {
        this.num1Input = document.getElementById('num1');
        this.num2Input = document.getElementById('num2');
        this.resultDiv = document.getElementById('result');
        this.addBtn = document.getElementById('addBtn');
        this.subtractBtn = document.getElementById('subtractBtn');
        this.multiplyBtn = document.getElementById('multiplyBtn');
        this.divideBtn = document.getElementById('divideBtn');
    }

    getNumbers() {
        return {
            num1: Number(this.num1Input.value),
            num2: Number(this.num2Input.value)
        };
    }

    attachEventListeners() {
        this.addBtn.addEventListener('click', () => this.performOperation(add, '+'));
        this.subtractBtn.addEventListener('click', () => this.performOperation(subtract, '-'));
        this.multiplyBtn.addEventListener('click', () => this.performOperation(multiply, '×'));
        this.divideBtn.addEventListener('click', () => this.performOperation(divide, '÷'));
    }

    performOperation(operation, symbol) {
        const { num1, num2 } = this.getNumbers();
        try {
            const result = operation(num1, num2);
            this.displayResult(num1, num2, symbol, result);
        } catch (error) {
            this.displayError(error.message);
        }
    }

    displayResult(num1, num2, symbol, result) {
        this.resultDiv.textContent = `${num1} ${symbol} ${num2} = ${result}`;
    }

    displayError(message) {
        this.resultDiv.textContent = message;
    }
}
