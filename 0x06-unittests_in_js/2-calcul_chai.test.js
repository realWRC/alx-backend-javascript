// Test suite for 2-calcul_chai.js using chai

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of rounded numbers', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 2.6, 3.1)).to.equal(6);
    });
  });

  describe('SUBTRACT', function () {
    it('should return the difference of rounded numbers', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 4.5, 1.4)).to.equal(4);
      expect(calculateNumber('SUBTRACT', -1.2, -3.7)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 2.6, 3.1)).to.equal(0);
    });
  });

  describe('DIVIDE', function () {
    it('should return the division of rounded numbers', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 4.5, 1.4)).to.equal(5);
      expect(calculateNumber('DIVIDE', -7.7, -2.1)).to.equal(4);
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 5.5, 2.2)).to.equal(3);
    });

    it('should return "Error" when dividing by zero', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, -0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, -0.5)).to.equal('Error');
    });
  });

  describe('Invalid Type', function () {
    it('should throw an error for invalid operation type', function () {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw(
        'Invalid operation type'
      );
      expect(() => calculateNumber('', 1.4, 4.5)).to.throw('Invalid operation type');
      expect(() => calculateNumber(123, 1.4, 4.5)).to.throw('Invalid operation type');
    });
  });
});
