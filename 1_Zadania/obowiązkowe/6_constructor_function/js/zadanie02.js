function Calculator() {
    this.historyOperations = [];
}

Calculator.prototype.add = function(num1, num2) {
    const result = num1 + num2;
    const log = `Suma ${num1} oraz ${num2} wynosi ${result}`;
    this.historyOperations.push(log);
    return result;
}

Calculator.prototype.multiply = function(num1, num2) {
    const result = num1 * num2;
    const log = `Pomnozenie ${num1} oraz ${num2} wynosi ${result}`;
    this.historyOperations.push(log);
    return result;
}

Calculator.prototype.substract = function(num1, num2) {
    const result = num1 - num2;
    const log = `Odejmowanie ${num1} od ${num2} wynosi ${result}`;
    this.historyOperations.push(log);
    return result;
}

Calculator.prototype.divide = function(num1, num2) {
    if(num2 === 0) {
        this.historyOperations.push('Nie dziel przez zero!');
        return;
    }  
    const result = num1 / num2;
    const log = `Dzielenie ${num1} przez ${num2} wynosi ${result}`;
    this.historyOperations.push(log);
    return result;
}

Calculator.prototype.printOperations = function() {
    this.historyOperations.forEach(el => console.log(el));
}

Calculator.prototype.clearOperations = function() {
    this.historyOperations = [];
    this.historyOperations.length = 0;
};

const calc = new Calculator();
calc.divide(7,0);
calc.multiply(2,4);
calc.add(3,7);
calc.divide(8,2);
calc.substract(11,7);
calc.printOperations();
calc.clearOperations();
