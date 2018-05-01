/*
Hooray! It's opposite day. Linked lists go the opposite way today.

Write a function for reversing a linked list. ↴ Do it in-place. ↴

Your function will have one input: the head of the list.

Your function should return the new head of the list.

Here's a sample linked list node class:

  function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

*/

function LinkedListNode(value) {
	this.value = value;
	this.next = null;
}

const a = new LinkedListNode("a");
const b = new LinkedListNode("b");
const c = new LinkedListNode("c");
a.next = b;
b.next = c;

function reverseLinkedList(head) {
	// check head.next, else throw error
	if (!head || !head.next) throw new Error("linked list must be atleast 2 values");

	let prevNode = head;
	let currentNode = head.next;
	head.next = null;
	let tempNext;

	let endOfList = false;

	while (!endOfList) {
		if (currentNode.next) {
			tempNext = currentNode.next;
			currentNode.next = prevNode;
			prevNode = currentNode;
			currentNode = tempNext;
		} else {
			currentNode.next = prevNode;
			endOfList = true;
		}
	}
	return currentNode;
}

function traverseLL(node) {
	console.log(node);
	while (node.nextre) {
		node = node.next;
		console.log(node);
	}
}

// a <- b -> c
