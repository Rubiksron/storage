'use strict';

const fs = require('fs');
const bitmap = require('./bitmap.js');

let readWrite = module.exports = {};

readWrite.read = (filePath, outputPath, transform, callback) => {
  return fs.readFile(filePath, (err, data) => {
    //TODO handle fs.readFile err
    let bitmapHeader = data.slice(0, 13);
    let dibHeader = data.slice(14, 53);
    let colorTable = data.slice(54, 1077);
    let pixelArray = data.slice(1078);
    let image = new bitmap.Constructor(bitmapHeader, dibHeader, colorTable, pixelArray);
    transform(image.colorTable);
    callback(outputPath, data, (val) => val);
  });
};

readWrite.write = (outputPath, buff, callback) => {
  fs.writeFile(outputPath, buff , (err) =>{
    if(err) {
      console.error(err);
    } else {
      if(!callback) callback(true);
    }
  });
};
