//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head;
    const vals = [];
    
    while (current !== null) {
        vals.unshift(current.val);
        current = current.next;
    }
    
    current = head;
    let i = 0;
    
    while (current !== null) {
        current.val = vals[i];
        current = current.next;
        i++
    } 
    
    return head;
};