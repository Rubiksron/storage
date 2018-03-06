// 'name' should be a string
// Should return the input name, concatenated with "hello ":
// eg. ("hello susan").
// Should return null if the input is not a string
function greet(name) {
  if (!name || typeof name !== 'string') {
    return null;
  }
  return "hello " + name;
}

module.exports = greet;
