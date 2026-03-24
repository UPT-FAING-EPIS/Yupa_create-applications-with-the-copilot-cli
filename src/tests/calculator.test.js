const { add, subtract, multiply, divide, calculate } = require('../calculator');

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
        expect(() => calculate('5', '%', '2')).toThrow('Unsupported operation');
        expect(() => calculate('5', '^', '2')).toThrow('Unsupported operation');
        expect(() => calculate('5', 'invalid', '2')).toThrow('Unsupported operation');
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
