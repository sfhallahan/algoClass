/*
Delete a node from a singly-linked list, ↴ given only a variable pointing to that node.

The input could, for example, be the variable b below:

  function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);
*/

function LinkedListNode(value) {
	this.value = value;
	this.next = null;
}

var a = new LinkedListNode("A");
var b = new LinkedListNode("B");
var c = new LinkedListNode("C");

a.next = b;
b.next = c;

deleteNode(b);

function deleteNode(nodeToDelete) {
	if (!nodeToDelete.next) throw new Error(`can't delete the last node`);
	const nodeAfterDelete = nodeToDelete.next();
	nodeToDelete.value = nodeAfterDelete.value;
	nodeToDelete.next = nodeAfterDelete.next;
}

/*
imperfect solution, 
- can't delete the last node this way
- any pointers to the old node will still exist
- any pointers to the next node will still exist but now be pointiung to the wrong node
*/
