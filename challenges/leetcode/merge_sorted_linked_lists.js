
 // Definition for singly-linked list.
 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var mergeTwoLists = function(l1, l2) {
 if (!l1 && !l2) return null;
 
 let i = 0;
 let j = 0;
 let head;
 let node;
 
 
 if (l1 !== null && !l2) {
     head = new ListNode(l1.val, null);
     l1 = l1.next;
 }
 
 if (l2 !== null && !l1) {
     head = new ListNode(l2.val, null);
     l2 = l2.next;
 }
 
 if (l1 !== null && l2 !== null) {
     if (l1.val <= l2.val) {
         head = new ListNode(l1.val, null);
         l1 = l1.next;
     } else {
         head = new ListNode(l2.val, null);
         l2 = l2.next;
     }    
 }
 
 node = head;
 
 while (l1 !== null && l2 !== null) {
     if (l1.val <= l2.val) {
         node.next = new ListNode(l1.val, null);
         l1 = l1.next;
     } else {
         node.next = l2;
         l2 = l2.next;
     }
     node = node.next;
 }
 
 while (l1 !== null) {
     node.next = l1;
     l1 = l1.next;
     node = node.next;
 }
 
 while (l2 !== null) {
     node.next = l2;
     l2 = l2.next;
     node = node.next;
 }
 
 return head;
};