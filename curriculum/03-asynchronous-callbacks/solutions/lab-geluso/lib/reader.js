/*
In the lib/ directory create a reader.js module that exports a single function.
The reader module should take an array of three file paths and resolve a mapped
array of strings loaded from each file using an error-first callback. The
string data should be in the same order as the file path data (mapped). If an
error occurs it should immediately reject the error using the callback and stop
execution.

The reader module should have the function signature (paths, callback) =>
undefined

On a failure the reader module should invoke the callback with an error
callback(error)

On success the reader module should invoke the callback with null as the first
parameter, and the result as the second parameter callback(null, result)
*/

const fs = require('fs');

function read(paths, cb) {
  let numFinished = 0;
  let result = [];

  function handleDone(err, data, i) {
    if (err) {
      cb(err);
      return;
    }
    console.log("FILE", i, "finished");

    result[i] = data.toString('utf-8');
    numFinished++;
    if (numFinished === paths.length) {
      cb(null, result);
    }
  }

  paths.forEach((filepath, i) => {
    fs.readFile(filepath, (err, data) => {handleDone(err, data, i)});
  });
}

module.exports = read;

