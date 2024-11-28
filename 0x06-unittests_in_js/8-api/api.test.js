// Test suite for the simple express API

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

  it('should have correct Content-Type header', (done) => {
    request.get(url, (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });

  it('should return 404 for non-existing routes', (done) => {
    request.get(`${url}/non-existing`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
