describe("fp", ()=> {
  const noop = ()=>{};
  const square = n=> n * n;
  const isEven = n=> n % 2 === 0;
  const sum = (a,b) => a + b;
  let toTen;

  beforeEach(()=> {
    toTen = [1,2,3,4,5,6,7,8,9,10];
  })

  const fp = require('../lib/fp');
  describe("map", ()=> {
    test("works for empty arrays", ()=> {
      const result = fp.map(noop, []);
      expect(result.length).toBe(0);
      expect(result).toEqual([]);
    });
    test("executes func", ()=> {
      const result = fp.map(square, [1,2,3]);
      expect(result).toEqual([1,4,9]);
    });
  });

  describe("filter", ()=> {
    test("filters a full array to empty with falsey noop", ()=> {
      expect(toTen.length).toEqual(10);

      const result = fp.filter(noop, toTen);
      expect(result).toEqual([]);
      expect(result.length).toEqual(0);
    });
    test("can filter to even nums", ()=> {
      expect(toTen.length).toEqual(10);

      const result = fp.filter(isEven, toTen);
      expect(result).toEqual([2,4,6,8,10]);
    });
  });

  describe("reduce", ()=> {
    test("returns initialState on an empty list", ()=> {
      const result = fp.reduce(noop, 42, []);
      expect(result).toEqual(42);
    });

    test("can sum nums [1,2,3,4]", ()=> {
      const result = fp.reduce(sum, 0, [1,2,3,4]);
      expect(result).toEqual(10);
    });
  });

  describe("slice", ()=> {
    test("end parameter is exclusive, not inclusive", ()=> {
      const result = fp.slice(0, 0, toTen);
      expect(result).toEqual([]);
    });
    test("can pick off first element of list", ()=> {
      const result = fp.slice(0, 1, toTen);
      expect(result).toEqual([1]);
    });
    test("can exlude first and last element", ()=> {
      const result = fp.slice(1, toTen.length - 1, toTen);
      expect(result).toEqual([2,3,4,5,6,7,8,9]);
    });
  });
});
