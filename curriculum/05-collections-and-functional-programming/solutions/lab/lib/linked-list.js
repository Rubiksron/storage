class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  prepend(value) {
    // Make a new node with the value.
    const newNode = new ListNode(value);
    
    // point the new node so it's next node is
    // the current root.
    newNode.next = this.root;

    // overwrite root so it now points to the new node.
    this.root = newNode;
  }

  append(value) {
    if (this.root === null) {
      this.prepend(value);
      return;
    }

    var current = this.root;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(value);
  }

  contains(value) {
    // use two 'not' operators to convert a truthy
    // ListNode object (if found) to simply `true`
    return !!this.find(value);
  }

  // Returns a ListNode object containing the given
  // vaue if the value exists in the list.
  find(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return false;
  }

  size() {
    let total = 0;
    let current = this.root;
    while(current) {
      total++;
      current = current.next;
    }
    return total;
  }
}

module.exports = {ListNode, LinkedList}

