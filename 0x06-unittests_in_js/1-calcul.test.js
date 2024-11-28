// Test suite for 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber('SUM', -1.2, -3.7), -5);
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', 2.6, 3.1), 6);
    });
  });

  describe('SUBTRACT', function () {
    it('should return the difference of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 1.4), 4);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.2, -3.7), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 3.1), 0);
    });
  });

  describe('DIVIDE', function () {
    it('should return the division of rounded numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 1.4), 5);
      assert.strictEqual(calculateNumber('DIVIDE', -7.7, -2.1), 4);
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.2), 3);
    });

    it('should return "Error" when dividing by zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, -0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, -0.5), 'Error');
    });
  });

  describe('Invalid Type', function () {
    it('should throw an error for invalid operation type', function () {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), {
        name: 'Error',
        message: 'Invalid operation type',
      });
      assert.throws(() => calculateNumber('', 1.4, 4.5), {
        name: 'Error',
        message: 'Invalid operation type',
      });
      assert.throws(() => calculateNumber(123, 1.4, 4.5), {
        name: 'Error',
        message: 'Invalid operation type',
      });
    });
  });
});
