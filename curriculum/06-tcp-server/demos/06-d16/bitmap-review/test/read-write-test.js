'use strict';

const transform = require('../lib/transform.js');
const expect = require('expect');
const fs = require('fs');
const read = require('../lib/read-write.js');

let originalFilePath = `${process.cwd()}/assets/bitmap.bmp`;

describe('testing read write', () => {
  it('should create a file and delete it after success', (done) => {
    read.write('../assets/test-file.bmp', 'beepbopboop', (val) => {
      expect(val).toEqual(true);
    });
    fs.unlink('../assets/test-file.bmp', (err) => {
      if(err) console.err(err);
      done();
      return;
    });
  });
});

describe('testing read write', () => {
  it('should read a file', () => {
    read.read(originalFilePath, '',
    transform.scale, (path, buf, val) => {
      expect(Buffer.isBuffer(buf)).toEqual(true);
    });
  });
});
