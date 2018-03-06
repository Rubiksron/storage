class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  add(value) {
    if (this.root === null) {
      this.root = new TreeNode(value);
    } else {
      this._add(this.root, value);
    }
  }
  
  _add(node, value) {
    if (value < node.value) {
      if (!node.left) {
        node.left = new TreeNode(value);
      } else {
        this._add(node.left, value);
      }
    } else {
      if (!node.right) {
        node.right = new TreeNode(value);
      } else {
        this._add(node.right, value);
      }
    }
  }
  
  contains(value) {
    return this._contains(this.root, value);
  }
  
  _contains(node, value) {
    if (!node) {
      return false;
    } else if (node.value === value) {
      return true;
    } else if (value < node.value) {
      return this._contains(node.left, value);
    } else {
      return this._contains(node.right, value);
    }
  }

  toString() {
    return this._toString(this.root);
  }

  _toString(node, indentation='') {
    if (!node) {
      return '';
    }
    return indentation + node.value + '\n' +
      this._toString(node.left, indentation + '  ') +
      this._toString(node.right, indentation + '  ');
  }
}

module.exports = BinaryTree;
