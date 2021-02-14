var hasCycle = function(head) {
  if (!head || !head.next) return false;
  
  let found = false;
  let turtle = head;
  let hare = head.next;
  
  while (turtle && hare && turtle.next && hare.next && hare.next.next) {
      turtle = turtle.next;
      hare = hare.next.next;
      
      if (turtle.val === hare.val) {
          found = true;
          break;
      }
  }
  
  return found;
};