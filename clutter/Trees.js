/*

Trees:  Know about trees; basic tree construction, traversal and manipulation algorithms. Familiarize yourself with binary trees, 
n-ary trees, and trie-trees. Be familiar with at least one type of balanced binary tree. Understand tree traversal algorithms: 
BFS and DFS, and know the difference between inorder, postorder and preorder.

basic tree construction
- Interface
    - Constructor
        - storage
        - root
    - Methods
        - insert(key): add a new key to the tree
        - search(key): searches for the key in the true, returns true if found false if not
        - min/max: returns mix/max value/key in the tree
        - remove(key): remove key from the tree

traversal and manipulation algorithms

Binary trees
    - each node has two children
    - named right/left child
n-ary trees
    - each node has no more than n children
trie-trees
    - efficient reTRIEval data structure
    - can search key in O(M) time, but more storage
    - think word search/predictive text


Understand tree traversal algorithms: 
BFS and DFS, and know the difference between 

preorder traveral
    - runs transform on itself (parent) before running on the child
    - self, left, right, return
    - used to make copies of the tree
inorder traversal
    - Look at items from smallest to largest
    - Left, self, right, return
    - for BSTs in order gives you lets you operate on the values smallest to largest
postorder
    - runs transform greatest to least
    - left, right, self, return
    - useful for tree deletiion

*/
