const {LinkedList, ListNode} = require('../lib/linked-list');

describe("LinkedList", ()=> {
  let emptyList, l1, l2, l3, l5;

  beforeEach(()=> {
    emptyList = new LinkedList();

    l1 = new LinkedList();
    l1.prepend(1);

    l2 = new LinkedList();
    l2.prepend(1);
    l2.prepend(2);

    l3 = new LinkedList();
    l3.prepend(1);
    l3.prepend(2);
    l3.prepend(3);

    l5 = new LinkedList();
    l5.prepend(1);
    l5.prepend(2);
    l5.prepend(3);
    l5.prepend(4);
    l5.prepend(5);
  });

  test("size", ()=> {
    expect(emptyList.size()).toBe(0);
    expect(l1.size()).toBe(1);
    expect(l2.size()).toBe(2);
    expect(l3.size()).toBe(3);
    expect(l5.size()).toBe(5);
  });

  test("isEmpty", ()=> {
    expect(emptyList.isEmpty()).toBe(true);
    expect(l1.isEmpty()).toBe(false);
    expect(l2.isEmpty()).toBe(false);
    expect(l3.isEmpty()).toBe(false);
    expect(l5.isEmpty()).toBe(false);
  });

  test("prepend", ()=> {
    let ll = new LinkedList();

    expect(ll.size()).toBe(0);

    ll.prepend(1);
    expect(ll.size()).toBe(1);

    ll.prepend(1);
    expect(ll.size()).toBe(2);

    ll.prepend(1);
    expect(ll.size()).toBe(3);
  });

  describe("append", ()=> {
    test("empty list", ()=> {
      let ll = new LinkedList();
      expect(ll.size()).toBe(0);

      ll.append(1);
      expect(ll.size()).toBe(1);
    });

    test("one-item list", ()=> {
      let ll = new LinkedList();
      ll.append(1);
      ll.append(2);
      expect(ll.size()).toBe(2);

      ll.append(3);
      expect(ll.size()).toBe(3);
    });
  });

  test("find", ()=> {
    expect(emptyList.find(99)).toBe(false);

    expect(l1.find(99)).toBe(false);
    var result = l1.find(1);
    expect(typeof result).toBe('object');
    expect(result instanceof ListNode).toBe(true);

    result = l5.find(5);
    expect(typeof result).toBe('object');
    expect(result instanceof ListNode).toBe(true);
  });

  test("contains", ()=> {
    expect(emptyList.contains(99)).toBe(false);

    expect(l1.contains(99)).toBe(false);
    expect(l1.contains(1)).toBe(true);

    result = l5.contains(5);
    expect(l5.contains(5)).toBe(true);
  });

  test("toggle to see Travis pass or fail", ()=> {
    // false for passing test
    // change to true to get test to intentionally fail
    expect(emptyList.contains(99)).toBe(false);
  });
});
