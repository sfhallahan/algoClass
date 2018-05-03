/*
Write a function to check that a binary tree ↴ is a valid binary search tree. ↴

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

function checkValidBST(node, max, min) {
  // if you change directions there is a boundry, set the boundry if you change directions

  if (!node.right && !node.left) return true;

  let leftValid = true;
  let rightValid = true;

  if (!!node.right) {
    if (node.right.value < node.value || (!!max && node.right.value > max)) return false;
    console.log(`node with value ${node.value} right looks good`);
    rightValid = checkValidBST(node.right, max, node.value);
  }

  if (!!node.left) {
    if (node.left.value > node.value || (!!min && node.left.value < min)) return false;
    console.log(`node with value ${node.value} left looks good`);

    leftValid = checkValidBST(node.left, node.value, min);
  }

  return leftValid && rightValid;
}

let myTree = new BinaryTreeNode(20);
myTree.insertLeft(10);
myTree.left.insertLeft(5);
myTree.left.insertRight(15);
myTree.insertRight(30);
myTree.right.insertLeft(25);
myTree.right.insertRight(35);
checkValidBST(myTree);
/*    
        4
    2       6
  1   3   5    7 


  */
