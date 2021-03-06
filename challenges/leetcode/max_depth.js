var maxDepth = function(root) {
  return count(root);
};

const count = function(node, counter = 0) {
  if (!node) return counter;
  
  counter++;
  
  const left = count(node.left, counter);
  const right = count(node.right, counter);
  
  if (left > right) {
      return left;
  } else {
      return right;
  }
}