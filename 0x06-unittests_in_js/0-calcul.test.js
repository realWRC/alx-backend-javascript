// Test suite for 0-calcul.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return the sum of rounded numbers when both numbers are integers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return the sum when one number has a decimal part less than 0.5', function () {
    assert.strictEqual(calculateNumber(1.2, 3), 4);
  });

  it('should return the sum when one number has a decimal part equal to 0.5', function () {
    assert.strictEqual(calculateNumber(1.5, 3), 5);
  });

  it('should return the sum when both numbers have decimal parts greater than 0.5', function () {
    assert.strictEqual(calculateNumber(1.7, 3.7), 6);
  });

  it('should return the sum when both numbers are negative and have decimal parts', function () {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });

  it('should return the sum when numbers are zero', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return the sum when numbers are large', function () {
    assert.strictEqual(calculateNumber(1000.4, 2000.5), 3001);
  });

  it('should handle edge cases with decimal parts exactly at 0.5', function () {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it('should handle numbers with decimal parts just below 0.5', function () {
    assert.strictEqual(calculateNumber(2.4999, 2.4999), 4);
  });

  it('should handle numbers with decimal parts just above 0.5', function () {
    assert.strictEqual(calculateNumber(2.5001, 2.5001), 6);
  });
});
