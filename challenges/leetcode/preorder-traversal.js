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