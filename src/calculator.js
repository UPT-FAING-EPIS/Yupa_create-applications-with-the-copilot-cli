#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+): Adds two numbers together
 * - Subtraction (-): Subtracts the second number from the first
 * - Multiplication (*): Multiplies two numbers together
 * - Division (/): Divides the first number by the second
 * 
 * Usage: node calculator.js <number1> <operation> <number2>
 * Example: node calculator.js 10 + 5
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

function calculate(num1, operation, num2) {
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid numbers provided');
  }

  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
    case 'x':
    case '×':
      return multiply(a, b);
    case '/':
    case '÷':
      return divide(a, b);
    default:
      throw new Error(`Unsupported operation: ${operation}. Supported operations: +, -, *, /`);
  }
}

function main() {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.log('Usage: node calculator.js <number1> <operation> <number2>');
    console.log('Supported operations: +, -, *, /');
    console.log('Example: node calculator.js 10 + 5');
    process.exit(1);
  }

  const [num1, operation, num2] = args;

  try {
    const result = calculate(num1, operation, num2);
    console.log(`${num1} ${operation} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, calculate };
