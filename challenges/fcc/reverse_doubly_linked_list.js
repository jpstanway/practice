var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;

  this.reverse = function () {
    if (!this.head) return null;

    let currentNode = this.tail;
    let newHead = new Node(this.tail.data, null);

    this.head = newHead;

    while (currentNode.prev) {
      newHead.next = new Node(currentNode.prev.data, newHead);
      newHead = newHead.next;
      currentNode = currentNode.prev;
    }

    this.tail = newHead;

    return this.head;
  };
};
