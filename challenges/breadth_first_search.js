var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  this.levelOrder = function (queue = [this.root], values = []) {
    // empty tree condition
    if (!this.root) return null;

    // base case
    if (!queue.length) return values;

    // process the next item in the queue (dequeue)
    let currentNode = queue.shift();
    values.push(currentNode.value);

    // check for children nodes
    // and push to queue if applicable
    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    // keep recursing
    return this.levelOrder(queue, values);
  };

  this.reverseLevelOrder = function (queue = [this.root], values = []) {
    // empty tree condition
    if (!this.root) return null;

    // base case
    if (!queue.length) return values;

    // process the next item in the queue (dequeue)
    let currentNode = queue.shift();
    values.push(currentNode.value);

    // check for children nodes (reverse)
    // and push to queue if applicable
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    // keep recursing
    return this.reverseLevelOrder(queue, values);
  };
}
