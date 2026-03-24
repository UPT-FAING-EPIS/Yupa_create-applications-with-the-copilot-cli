#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+): Adds two numbers together
 * - Subtraction (-): Subtracts the second number from the first
 * - Multiplication (*): Multiplies two numbers together
 * - Division (/): Divides the first number by the second
 * - Modulo (%): Returns the remainder of a divided by b
 * - Power (^ or pow): Returns base raised to the exponent
 * - Square Root (sqrt): Returns the square root of n
 * 
 * Usage: node calculator.js <number1> <operation> <number2>
 * Example: node calculator.js 10 + 5
 * Example: node calculator.js 2 ^ 8
 * Example: node calculator.js sqrt 25
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

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number is not allowed');
  }
  return Math.sqrt(n);
}

function calculate(num1, operation, num2) {
  if (operation === 'sqrt') {
    const n = parseFloat(num1);
    if (isNaN(n)) {
      throw new Error('Invalid number provided');
    }
    return squareRoot(n);
  }

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
    case '%':
      return modulo(a, b);
    case '^':
    case 'pow':
      return power(a, b);
    default:
      throw new Error(`Unsupported operation: ${operation}. Supported operations: +, -, *, /, %, ^, pow, sqrt`);
  }
}

function main() {
  const args = process.argv.slice(2);

  if (args.length < 2 || args.length > 3) {
    console.log('Usage: node calculator.js <number1> <operation> <number2>');
    console.log('       node calculator.js <number> sqrt');
    console.log('Supported operations: +, -, *, /, %, ^, pow, sqrt');
    console.log('Example: node calculator.js 10 + 5');
    console.log('Example: node calculator.js 2 ^ 8');
    console.log('Example: node calculator.js 25 sqrt');
    process.exit(1);
  }

  const [num1, operation, num2] = args;

  try {
    const result = calculate(num1, operation, num2);
    if (operation === 'sqrt') {
      console.log(`sqrt ${num1} = ${result}`);
    } else {
      console.log(`${num1} ${operation} ${num2} = ${result}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };
