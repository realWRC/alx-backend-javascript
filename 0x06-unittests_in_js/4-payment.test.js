// Test suite for 4-payment.js

const sinon = require('sinon');
const { expect } = require('chai');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with "SUM" and the correct arguments and log the correct message', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
