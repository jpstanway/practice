/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root, vals = []) {
  let node = root;
  let values = vals;

  if (!node?.val) return values;
  
  values.push(node.val);
  preorderTraversal(node.left, values);
  preorderTraversal(node.right, values);
  
  return values;
};

var inorderTraversal = function(root, vals = []) {
  let node = root;
  let values = vals;

  if (!node?.val) return values;
  
  inorderTraversal(node.left, values);
  values.push(node.val);
  inorderTraversal(node.right, values);
  
  return values;
};

var postorderTraversal = function(root, vals = []) {
  let node = root;
  let values = vals;

  if (!node?.val) return values;
  
  postorderTraversal(node.left, values);
  postorderTraversal(node.right, values);
  values.push(node.val);
  
  return values;
};

var levelOrderTraversal = function(root, queue = [], vals = []) {
  const values = vals;
  const nextQueue = [];

  if (root) queue.push(root);
  if (!queue.length) return values;
  
  const level = queue.map((item) => item.val);

  values.push(level);
  
  for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      if (node.left) {
          nextQueue.push(node.left);
      }
      if (node.right) {
          nextQueue.push(node.right);
      }
  }
  
  return levelOrderTraversal(null, nextQueue, values);
};