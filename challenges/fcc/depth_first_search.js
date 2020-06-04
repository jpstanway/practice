var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  this.inorder = function (root = this.root, array = []) {
    let currentNode = root;
    let arrayOfValues = array;

    if (!currentNode) {
      return null;
    }

    // search the child nodes
    if (currentNode.left) {
      // traverse the left first
      this.inorder(currentNode.left, arrayOfValues);
    }

    // store the value
    arrayOfValues.push(currentNode.value);

    if (currentNode.right) {
      // traverse to the right
      this.inorder(currentNode.right, arrayOfValues);
    }
    console.log(arrayOfValues);
    return arrayOfValues;
  };

  this.preorder = function (root = this.root, array = []) {
    let currentNode = root;
    let arrayOfValues = array;

    if (!currentNode) {
      return null;
    }

    // store the value
    arrayOfValues.push(currentNode.value);

    // search the child nodes
    if (currentNode.left) {
      // traverse the left first
      this.preorder(currentNode.left, arrayOfValues);
    }

    if (currentNode.right) {
      // traverse to the right
      this.preorder(currentNode.right, arrayOfValues);
    }

    return arrayOfValues;
  };

  this.postorder = function (root = this.root, array = []) {
    let currentNode = root;
    let arrayOfValues = array;

    if (!currentNode) {
      return null;
    }

    // search the child nodes
    if (currentNode.left) {
      // traverse the left first
      this.postorder(currentNode.left, arrayOfValues);
    }

    if (currentNode.right) {
      // traverse to the right
      this.postorder(currentNode.right, arrayOfValues);
    }

    // store the value
    arrayOfValues.push(currentNode.value);

    return arrayOfValues;
  };
}
