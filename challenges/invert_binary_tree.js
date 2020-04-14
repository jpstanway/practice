var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  this.invert = function (node = this.root) {
    if (!this.root) return null;

    // base case
    if (!node.left && !node.right) {
      return true;
    }

    // swap left and right children
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    // recursively call over both children
    if (node.left) {
      this.invert(node.left);
    }

    if (node.right) {
      this.invert(node.right);
    }
  };
}
