class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }

  substract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }
}

module.exports = Calculator;

// const calc = new Calculator(2,3);
// console.log(calc.substract());
// console.log(calc.add());
// console.log(calc.multiply());
// console.log(calc.divide());