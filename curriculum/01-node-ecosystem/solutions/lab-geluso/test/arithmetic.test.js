describe("Arithmetic module", ()=> {
  describe("add", ()=> {
    var mth = require('../lib/arithmetic');
    test("add accepts only numbers", ()=> {
      expect(mth.add(false, 1)).toBe(null);
      expect(mth.add(1, false)).toBe(null);
      expect(mth.add(false, false)).toBe(null);
    });
    test("adds falsey zero values", ()=> {
      expect(mth.add(0, 0)).toBe(0);
      expect(mth.add(1, 0)).toBe(1);
      expect(mth.add(0, 1)).toBe(1);
    });
    test("adds numbers", ()=> {
      expect(mth.add(9, 12)).toBe(21);
    });
  })
  describe("sub", ()=> {
    var mth = require('../lib/arithmetic');
    test("sub accepts only numbers", ()=> {
      expect(mth.sub(false, 1)).toBe(null);
      expect(mth.sub(1, false)).toBe(null);
      expect(mth.sub(false, false)).toBe(null);
    });
    test("sub falsey zero values", ()=> {
      expect(mth.sub(0, 0)).toBe(0);
      expect(mth.sub(1, 0)).toBe(1);
      expect(mth.sub(0, 1)).toBe(-1);
    });
    test("sub numbers", ()=> {
      expect(mth.sub(12, 9)).toBe(3);
    });
    test("subtracts large numbers", ()=> {
      var n1 = 999999 * Math.random();
      var n2 = 999999 * Math.random();
      expect(mth.sub(n1, n2)).toBe(n1 - n2)
    });
  })
})
