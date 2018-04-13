/*

Write a function to find the 2nd largest element in a binary search tree. ↴

Here's a sample binary tree node class:

  function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};
*/
/*
      4
  2       6
1   3   5    7 

*/
function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

function findSecondLargestInBST(root) {
  if (!root.left && !root.right)
    throw new Error("Must be at least 2 elements in the BST to find second largest");

  function findParentOfMax(node) {
    if (!!node.right && !node.right.right) {
      console.log(`found parent of the max, parent value is ${node.value}`);
      return node; // its right child is the max
    }
    return findParentOfMax(node.right); // otherwise go right
  }

  function findMax(node) {
    if (!node.right) {
      console.log("no right node, returning max");
      return node.value;
    } else {
      console.log("going right");
      return findMax(node.right);
    }
  }

  // handle edge case, root is the max
  if (!root.right) return findMax(root.left);

  const parentOfMax = findParentOfMax(root);
  if (!parentOfMax.right.left) {
    console.log("Max has no left children, returning parent of Max as second largest");
    return parentOfMax.value;
  }
  return findMax(parentOfMax.right.left);
}

let myTree = new BinaryTreeNode(20);
myTree.insertLeft(10);
myTree.left.insertLeft(5);
myTree.left.insertRight(15);
myTree.insertRight(30);
myTree.right.insertLeft(25);
myTree.right.insertRight(35);
myTree.right.right.insertLeft(32);
findSecondLargestInBST(myTree);
