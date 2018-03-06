describe("Greeting function", ()=> {
  var greet = require('../lib/greet');
  test("prepends 'hello '", ()=> {
    expect(greet('steve')).toBe('hello steve');
  });
  test("returns null for null", ()=> {
    expect(greet(null)).toBe(null);
  });
  test("returns null for non-string input", ()=> {
    expect(greet(1)).toBe(null);
    expect(greet(true)).toBe(null);
    expect(greet([])).toBe(null);
    expect(greet({})).toBe(null);
  });
})
