'use strict';

const Bitmap = module.exports = {};

Bitmap.Constructor = function(fileHeader, dibHeader, colorTable, pixelArray) {
  this.fileHeader =  fileHeader;
  this.dibHeader = dibHeader;
  this.colorTable = colorTable;
  this.pixelArray = pixelArray;
};
