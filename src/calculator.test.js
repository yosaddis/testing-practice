const Calculator = require('./calculator.js');

describe('Testing the add function of the Calculator class.', () => {
  const calc = new Calculator(1, 1);
  const calc2 = new Calculator(1, -1);
  const calc3 = new Calculator(-1, -1);

  test('Addition of two postive numbers 1 and 1 should return 2.', () => {
    expect(calc.add()).toBe(2);
  });

  test('Addtion of postive and negative numbers 1 and -1 should return 0.', () => {
    expect(calc2.add()).toBe(0);
  });

  test('Addtion of two negative numbers -1 and -1 should return 2.', () => {
    expect(calc3.add()).toBe(-2);
  });
});

describe('Testing the substract fucntion of the calculator class.', () => {
  const calc = new Calculator(1, 1);
  const calc2 = new Calculator(1, -1);
  const calc3 = new Calculator(-1, -1);

  test('Substraction of positive number from positive number. 1 and 1 should return 0.', () => {
    expect(calc.substract()).toBe(0);
  });

  test('Substration of negative number from a positive number. 1 and -1 should return 2.', () => {
    expect(calc2.substract()).toBe(2);
  });

  test('Substration of two negative numbers. -1 and -1 should return 0.', () => {
    expect(calc3.substract()).toBe(0);
  });
});

describe('Testing the multiply function of the calculator class.', () => {
  const calc = new Calculator(1, 1);
  const calc2 = new Calculator(1, -1);
  const calc3 = new Calculator(-1, -1);

  test('Multiplication of two positive numbers 1 and 1 should return 1.', () => {
    expect(calc.multiply()).toBe(1);
  });

  test('Multiplication of positive and negative numbers 1 and -1 should return -1.', () => {
    expect(calc2.multiply()).toBe(-1);
  });

  test('Multiplication of two negative numbers -1 and -1 should return 1.', () => {
    expect(calc3.multiply()).toBe(1);
  });
});

describe('Testing the division fucntion of the calculator class.', () => {
  const calc = new Calculator(1, 1);
  const calc2 = new Calculator(1, -1);
  const calc3 = new Calculator(-1, -1);
  const calc4 = new Calculator(1, 0);

  test('Division of two positive numbers 1 and 1 should return 1.', () => {
    expect(calc.divide()).toBe(1);
  });

  test('Division of positive number with negative 1 and -1 should return -1.', () => {
    expect(calc2.divide()).toBe(-1);
  });

  test('Division of negative with a negative number -1 and -1 should return 1.', () => {
    expect(calc3.divide()).toBe(1);
  });

  test('Division of a number with 0 should return undified.', () => {
    expect(calc4.divide()).not.toBe(undefined);
  });
});