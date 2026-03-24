const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require('../calculator');

describe('Calculator Basic Operations', () => {
  
  describe('Addition', () => {
    test('should add 2 + 3 to equal 5 (from image example)', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive numbers', () => {
      expect(add(10, 5)).toBe(15);
      expect(add(100, 200)).toBe(300);
    });

    test('should add negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
      expect(add(-10, 5)).toBe(-5);
    });

    test('should add decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should add zero', () => {
      expect(add(0, 0)).toBe(0);
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('Subtraction', () => {
    test('should subtract 10 - 4 to equal 6 (from image example)', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract positive numbers', () => {
      expect(subtract(20, 8)).toBe(12);
      expect(subtract(100, 25)).toBe(75);
    });

    test('should subtract negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
      expect(subtract(-10, 5)).toBe(-15);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
      expect(subtract(10.75, 5.25)).toBe(5.5);
    });

    test('should handle zero subtraction', () => {
      expect(subtract(0, 0)).toBe(0);
      expect(subtract(10, 0)).toBe(10);
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should handle negative results', () => {
      expect(subtract(5, 10)).toBe(-5);
    });
  });

  describe('Multiplication', () => {
    test('should multiply 45 * 2 to equal 90 (from image example)', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive numbers', () => {
      expect(multiply(6, 7)).toBe(42);
      expect(multiply(12, 12)).toBe(144);
    });

    test('should multiply negative numbers', () => {
      expect(multiply(-5, 3)).toBe(-15);
      expect(multiply(-4, -5)).toBe(20);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
      expect(multiply(1.5, 1.5)).toBe(2.25);
    });

    test('should multiply by zero', () => {
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(100, 0)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(1, 5)).toBe(5);
      expect(multiply(42, 1)).toBe(42);
    });
  });

  describe('Division', () => {
    test('should divide 20 / 5 to equal 4 (from image example)', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide positive numbers', () => {
      expect(divide(15, 3)).toBe(5);
      expect(divide(100, 10)).toBe(10);
    });

    test('should divide negative numbers', () => {
      expect(divide(-10, 2)).toBe(-5);
      expect(divide(-20, -4)).toBe(5);
    });

    test('should divide decimal numbers', () => {
      expect(divide(7.5, 2.5)).toBe(3);
      expect(divide(10, 4)).toBe(2.5);
    });

    test('should divide by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should handle division resulting in decimals', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
      expect(divide(1, 3)).toBeCloseTo(0.333, 2);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
      expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
      expect(() => divide(-5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('Calculate function', () => {
    describe('Addition operations', () => {
      test('should calculate 2 + 3 = 5 (from image example)', () => {
        expect(calculate('2', '+', '3')).toBe(5);
      });

      test('should handle addition with string inputs', () => {
        expect(calculate('10', '+', '5')).toBe(15);
      });
    });

    describe('Subtraction operations', () => {
      test('should calculate 10 - 4 = 6 (from image example)', () => {
        expect(calculate('10', '-', '4')).toBe(6);
      });

      test('should handle subtraction with string inputs', () => {
        expect(calculate('20', '-', '8')).toBe(12);
      });
    });

    describe('Multiplication operations', () => {
      test('should calculate 45 * 2 = 90 (from image example)', () => {
        expect(calculate('45', '*', '2')).toBe(90);
      });

      test('should handle multiplication with * symbol', () => {
        expect(calculate('6', '*', '7')).toBe(42);
      });

      test('should handle multiplication with x symbol', () => {
        expect(calculate('5', 'x', '3')).toBe(15);
      });

      test('should handle multiplication with × symbol', () => {
        expect(calculate('4', '×', '8')).toBe(32);
      });
    });

    describe('Division operations', () => {
      test('should calculate 20 / 5 = 4 (from image example)', () => {
        expect(calculate('20', '/', '5')).toBe(4);
      });

      test('should handle division with / symbol', () => {
        expect(calculate('15', '/', '3')).toBe(5);
      });

      test('should handle division with ÷ symbol', () => {
        expect(calculate('12', '÷', '4')).toBe(3);
      });
    });

    describe('Edge cases', () => {
      test('should handle decimal string inputs', () => {
        expect(calculate('5.5', '+', '2.5')).toBe(8);
        expect(calculate('10.5', '-', '5.5')).toBe(5);
      });

      test('should handle negative string inputs', () => {
        expect(calculate('-5', '+', '3')).toBe(-2);
        expect(calculate('10', '-', '-5')).toBe(15);
      });

      test('should throw error for invalid numbers', () => {
        expect(() => calculate('abc', '+', '5')).toThrow('Invalid numbers provided');
        expect(() => calculate('10', '+', 'xyz')).toThrow('Invalid numbers provided');
        expect(() => calculate('', '+', '5')).toThrow('Invalid numbers provided');
      });

      test('should throw error for unsupported operations', () => {
        expect(() => calculate('5', 'invalid', '2')).toThrow('Unsupported operation');
        expect(() => calculate('5', '&', '2')).toThrow('Unsupported operation');
      });

      test('should throw error for division by zero via calculate', () => {
        expect(() => calculate('10', '/', '0')).toThrow('Division by zero is not allowed');
      });
    });
  });

  describe('All image examples together', () => {
    test('should pass all operations from calc-basic-operations.png', () => {
      expect(calculate('2', '+', '3')).toBe(5);
      expect(calculate('10', '-', '4')).toBe(6);
      expect(calculate('45', '*', '2')).toBe(90);
      expect(calculate('20', '/', '5')).toBe(4);
    });
  });
});

describe('Calculator Extended Operations', () => {
  
  describe('Modulo', () => {
    test('should calculate 5 % 2 to equal 1 (from image example)', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo of positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
      expect(modulo(15, 4)).toBe(3);
      expect(modulo(20, 6)).toBe(2);
    });

    test('should handle modulo with zero remainder', () => {
      expect(modulo(10, 5)).toBe(0);
      expect(modulo(12, 6)).toBe(0);
      expect(modulo(100, 10)).toBe(0);
    });

    test('should handle modulo with larger divisor', () => {
      expect(modulo(3, 5)).toBe(3);
      expect(modulo(7, 10)).toBe(7);
    });

    test('should handle modulo with negative numbers', () => {
      expect(modulo(-5, 3)).toBe(-2);
      expect(modulo(5, -3)).toBe(2);
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should handle modulo with decimal numbers', () => {
      expect(modulo(5.5, 2)).toBeCloseTo(1.5);
      expect(modulo(10.8, 3)).toBeCloseTo(1.8, 1);
    });

    test('should handle modulo by one', () => {
      expect(modulo(5, 1)).toBe(0);
      expect(modulo(42, 1)).toBe(0);
    });

    test('should throw error when modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
      expect(() => modulo(0, 0)).toThrow('Modulo by zero is not allowed');
      expect(() => modulo(-5, 0)).toThrow('Modulo by zero is not allowed');
    });
  });

  describe('Power', () => {
    test('should calculate 2 ^ 3 to equal 8 (from image example)', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power of positive numbers', () => {
      expect(power(2, 8)).toBe(256);
      expect(power(3, 4)).toBe(81);
      expect(power(5, 3)).toBe(125);
      expect(power(10, 2)).toBe(100);
    });

    test('should handle power with zero exponent', () => {
      expect(power(5, 0)).toBe(1);
      expect(power(100, 0)).toBe(1);
      expect(power(-5, 0)).toBe(1);
    });

    test('should handle power with exponent of one', () => {
      expect(power(5, 1)).toBe(5);
      expect(power(42, 1)).toBe(42);
    });

    test('should handle base of zero', () => {
      expect(power(0, 5)).toBe(0);
      expect(power(0, 10)).toBe(0);
    });

    test('should handle base of one', () => {
      expect(power(1, 5)).toBe(1);
      expect(power(1, 100)).toBe(1);
    });

    test('should handle negative base', () => {
      expect(power(-2, 3)).toBe(-8);
      expect(power(-2, 2)).toBe(4);
      expect(power(-3, 3)).toBe(-27);
    });

    test('should handle negative exponent', () => {
      expect(power(2, -1)).toBe(0.5);
      expect(power(4, -2)).toBe(0.0625);
      expect(power(10, -2)).toBe(0.01);
    });

    test('should handle decimal base', () => {
      expect(power(2.5, 2)).toBe(6.25);
      expect(power(1.5, 3)).toBe(3.375);
    });

    test('should handle decimal exponent', () => {
      expect(power(4, 0.5)).toBe(2);
      expect(power(9, 0.5)).toBe(3);
      expect(power(8, 1/3)).toBeCloseTo(2, 10);
    });

    test('should handle large exponents', () => {
      expect(power(2, 10)).toBe(1024);
      expect(power(3, 5)).toBe(243);
    });
  });

  describe('Square Root', () => {
    test('should calculate sqrt(16) to equal 4 (from image example)', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of perfect squares', () => {
      expect(squareRoot(25)).toBe(5);
      expect(squareRoot(9)).toBe(3);
      expect(squareRoot(4)).toBe(2);
      expect(squareRoot(1)).toBe(1);
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of non-perfect squares', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 2);
      expect(squareRoot(3)).toBeCloseTo(1.732, 2);
      expect(squareRoot(10)).toBeCloseTo(3.162, 2);
    });

    test('should calculate square root of large numbers', () => {
      expect(squareRoot(100)).toBe(10);
      expect(squareRoot(144)).toBe(12);
      expect(squareRoot(10000)).toBe(100);
    });

    test('should calculate square root of decimal numbers', () => {
      expect(squareRoot(6.25)).toBe(2.5);
      expect(squareRoot(2.25)).toBe(1.5);
      expect(squareRoot(0.25)).toBe(0.5);
    });

    test('should handle square root of very small numbers', () => {
      expect(squareRoot(0.01)).toBe(0.1);
      expect(squareRoot(0.0001)).toBe(0.01);
    });

    test('should throw error for square root of negative numbers', () => {
      expect(() => squareRoot(-1)).toThrow('Square root of negative number is not allowed');
      expect(() => squareRoot(-4)).toThrow('Square root of negative number is not allowed');
      expect(() => squareRoot(-9)).toThrow('Square root of negative number is not allowed');
      expect(() => squareRoot(-100)).toThrow('Square root of negative number is not allowed');
    });
  });

  describe('Calculate function with extended operations', () => {
    describe('Modulo operations', () => {
      test('should calculate 5 % 2 = 1 (from image example)', () => {
        expect(calculate('5', '%', '2')).toBe(1);
      });

      test('should handle modulo with string inputs', () => {
        expect(calculate('10', '%', '3')).toBe(1);
        expect(calculate('15', '%', '4')).toBe(3);
      });

      test('should throw error for modulo by zero via calculate', () => {
        expect(() => calculate('10', '%', '0')).toThrow('Modulo by zero is not allowed');
      });
    });

    describe('Power operations with ^ symbol', () => {
      test('should calculate 2 ^ 3 = 8 (from image example)', () => {
        expect(calculate('2', '^', '3')).toBe(8);
      });

      test('should handle power with ^ symbol', () => {
        expect(calculate('2', '^', '8')).toBe(256);
        expect(calculate('3', '^', '4')).toBe(81);
      });

      test('should handle power with pow keyword', () => {
        expect(calculate('2', 'pow', '8')).toBe(256);
        expect(calculate('3', 'pow', '4')).toBe(81);
        expect(calculate('5', 'pow', '3')).toBe(125);
      });

      test('should handle zero exponent', () => {
        expect(calculate('5', '^', '0')).toBe(1);
        expect(calculate('100', 'pow', '0')).toBe(1);
      });

      test('should handle negative exponent', () => {
        expect(calculate('2', '^', '-1')).toBe(0.5);
        expect(calculate('4', 'pow', '-2')).toBe(0.0625);
      });
    });

    describe('Square root operations', () => {
      test('should calculate sqrt(16) = 4 (from image example)', () => {
        expect(calculate('16', 'sqrt')).toBe(4);
      });

      test('should handle square root with string input', () => {
        expect(calculate('25', 'sqrt')).toBe(5);
        expect(calculate('9', 'sqrt')).toBe(3);
        expect(calculate('4', 'sqrt')).toBe(2);
      });

      test('should handle square root of zero', () => {
        expect(calculate('0', 'sqrt')).toBe(0);
      });

      test('should handle square root of decimals', () => {
        expect(calculate('6.25', 'sqrt')).toBe(2.5);
        expect(calculate('2.25', 'sqrt')).toBe(1.5);
      });

      test('should handle square root of non-perfect squares', () => {
        expect(calculate('2', 'sqrt')).toBeCloseTo(1.414, 2);
        expect(calculate('10', 'sqrt')).toBeCloseTo(3.162, 2);
      });

      test('should throw error for square root of negative numbers via calculate', () => {
        expect(() => calculate('-1', 'sqrt')).toThrow('Square root of negative number is not allowed');
        expect(() => calculate('-9', 'sqrt')).toThrow('Square root of negative number is not allowed');
      });

      test('should throw error for invalid number in sqrt', () => {
        expect(() => calculate('abc', 'sqrt')).toThrow('Invalid number provided');
      });
    });

    describe('Edge cases for extended operations', () => {
      test('should handle decimal string inputs for modulo', () => {
        expect(calculate('5.5', '%', '2')).toBeCloseTo(1.5);
      });

      test('should handle negative string inputs for power', () => {
        expect(calculate('-2', '^', '3')).toBe(-8);
        expect(calculate('-2', 'pow', '2')).toBe(4);
      });

      test('should handle large numbers in power', () => {
        expect(calculate('2', '^', '10')).toBe(1024);
        expect(calculate('10', 'pow', '3')).toBe(1000);
      });

      test('should handle very small square roots', () => {
        expect(calculate('0.01', 'sqrt')).toBe(0.1);
      });
    });
  });

  describe('All extended image examples together', () => {
    test('should pass all operations from calc-extended-operations.png', () => {
      expect(calculate('5', '%', '2')).toBe(1);
      expect(calculate('2', '^', '3')).toBe(8);
      expect(calculate('16', 'sqrt')).toBe(4);
    });
  });

  describe('Combined basic and extended operations', () => {
    test('should handle all operations correctly', () => {
      // Basic operations
      expect(calculate('2', '+', '3')).toBe(5);
      expect(calculate('10', '-', '4')).toBe(6);
      expect(calculate('45', '*', '2')).toBe(90);
      expect(calculate('20', '/', '5')).toBe(4);
      
      // Extended operations
      expect(calculate('5', '%', '2')).toBe(1);
      expect(calculate('2', '^', '3')).toBe(8);
      expect(calculate('16', 'sqrt')).toBe(4);
    });
  });
});
