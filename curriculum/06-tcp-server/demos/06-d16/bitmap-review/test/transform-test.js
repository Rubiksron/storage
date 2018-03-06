'use strict';

const transform = require('../lib/transform.js');
const expect = require('expect');
const fs = require('fs');

let resultFilePathScale = `${process.cwd()}/assets/test-scale-sample.bmp`;
let originalFilePath = `${process.cwd()}/assets/bitmap.bmp`;
let resultFilePathGreyscale = `${process.cwd()}/assets/test-greyscale-sample.bmp`;
let resultFilePathInvert = `${process.cwd()}/assets/test-invert-sample.bmp`;

describe('testing scale ', () => {
  it('should scale the colorTable and return true', (done) => {
    fs.readFile(originalFilePath, (err, originalFileData) => {
      fs.readFile(resultFilePathScale, (err, data) => {
        let resultColorTable = data.slice(54, 1077);
        let originalColorTable = originalFileData.slice(54, 1077);
        transform.scale(originalColorTable);
        expect(resultColorTable).toEqual(originalColorTable);
        done();
      });
    });
  });
});

describe('testing greyscale ', () => {
  it('should  greyscale the colorTable and return true', (done) => {
    fs.readFile(originalFilePath, (err, originalFileData) => {
      fs.readFile(resultFilePathGreyscale, (err, data) => {
        let resultColorTable = data.slice(54, 1077);
        let originalColorTable = originalFileData.slice(54, 1077);
        transform.greyScale(originalColorTable);
        expect(resultColorTable).toEqual(originalColorTable);
        done();
      });
    });
  });
});

describe('testing invert ', () => {
  it('should invert the colrTable and return true', (done) => {
    fs.readFile(originalFilePath, (err, originalFileData) => {
      fs.readFile(resultFilePathInvert, (err, data) => {
        let resultColorTable = data.slice(54, 1077);
        let originalColorTable = originalFileData.slice(54, 1077);
        transform.invert(originalColorTable);
        expect(resultColorTable).toEqual(originalColorTable);
        done();
      });
    });
  });
});
