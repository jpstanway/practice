var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  this.add = function (int) {
    let node = new Node(int);

    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.root;

      while (true) {
        if (int < currentNode.value) {
          // go left
          if (!currentNode.left) {
            currentNode.left = node;
            console.log("added value left", int, this.root);
            return undefined;
          }

          currentNode = currentNode.left;
        } else if (int > currentNode.value) {
          // go right
          if (!currentNode.right) {
            currentNode.right = node;
            console.log("added value right", int, this.root);
            return undefined;
          }

          currentNode = currentNode.right;
        } else if (int === currentNode.value) {
          return null;
        }
      }
    }

    console.log(this.root);
  };
}
