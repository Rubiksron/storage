'use strict';

const expect = require('chai').expect
const net = require('net')
const Client = require('../model/client.js')

describe('Client module', function () {
  describe('client constructor', function () {
    it('should return a client object with the appropriate values', () => {
      let client = new Client(1)
      expect(client).to.have.all.keys(['socket', 'nickName', 'userName'])
      expect(client.socket).to.be.equal(1)
      expect(typeof client.nickName).to.equal('string')
      expect(typeof client.userName).to.equal('string')
    });
  });
});
