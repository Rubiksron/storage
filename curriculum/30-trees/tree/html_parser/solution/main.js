const parser = require('./parser');

// there's tiny.html, minimal.html and stretch.html
let filePath = '../tiny.html';
if (process.argv.length > 2) {
  filePath = process.argv[2];
}
parser(filePath);
