// Test suit for api

const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('should return status code 200', (done) => {
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const url = 'http://localhost:7865/cart';

  it('should return 200 and correct message for valid cart id (number)', (done) => {
    request.get(`${url}/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 for invalid cart id (not a number)', (done) => {
    request.get(`${url}/abc`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return 404 for missing cart id', (done) => {
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return 404 for cart id with number and letters', (done) => {
    request.get(`${url}/123abc`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
