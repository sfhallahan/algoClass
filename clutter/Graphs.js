/*


Graphs:  There are 3 basic ways to represent a graph in memory (objects and pointers, matrix, and adjacency list); 
familiarize yourself with each representation and its pros & cons. You should know the basic graph traversal algorithms: 
breadth-first search and depth-first search. Know their computational complexity, their tradeoffs, and how to implement 
them in real code.

3 Ways to represent

Example graph represented below: (assume undirected in this case)
0--1---2---3
    \ /
     4


1) Objects and Pointers
    - Think linked list
    
    function Vertex(value) {
        this.value = value
        this.edges = []
    }


2) Adjacency Matrix
    - What is it?
        we store a matrix (two-dimensional array) with size NxN, where N is the number of vertices.
    - Using Example
        myAdjMatrix = [ [0, 1, 0, 0, 0],
                        [-1, 0, 1, 0, 1],
                        [0, 0, 0, 1, 1],
                        [0, 0, -1, 0, 0],
                        [0, -1, -1, 0, 0] ]
    - In case of directed graph, we can use 1 for the edge (i,j) and -1 for (j,i) in case the edge is directed from i to j.
    - Pros
        - O(1) time complexity for edge lookup
    - Cons
        - Bad for sparce graphs since they represent edges that aren't there
        - O(V^2) time complexity for search 

3) Adjacency Lists
    - What is it?
        - For each vertex, add to an object or an array, value at that index/key is an array with the edges listed
    - Using Example

            0--1---2---3
                \ /
                 4
        myAdjList = [ [1],
                      [2, 4],
                      [3, 4],
                      [ 2 ],
                      [1, 2] ]

        or with an object

        adjlistAsObject = {
            0: [1],
            1: [2, 4],
            2: [3, 4],
            3: [2],
            4: [1, 2]
        }
    - Pros
        - Faster search O(V + E)
        - Less space for sparse graphs
    - Cons
        - slower than adjacency matrix for 

Graph Traversal Algorithms
    - Bredth first search
        - Computational complexity
            - Adjacency matrix 
                * O(V^2)
            - Adjacency List
                * O(V + E)
                    - V = # of veriticies
                    - E = # of edges
                    - if one dominates (ie high number of edges) it becomes O(E) or O(V)
        - tradeoffs
            - Might want to use it when you are looking for the shortest path
            - Uses more memory than DFS 
        - code implemntation below
    - Depth first search
        - Computational complexity
            - O(V + E)
                - V = # of veriticies
                - E = # of edges
                - if one dominates (ie high number of edges) it becomes O(E) or O(V)
        - tradeoffs
            - takes a long time if the tree is deep and solutions are rare
            - easy to implement using recursion
            - should use if solutions are frequent but deep
        - code implemntation below
*/

// undirected, nodes are represented by unique primitive values
class Graph {
  constructor() {
    this.nodes = {};
  }

  contains(node) {
    return !!this.nodes[node];
  }

  addNode(value) {
    this.nodes[value] = this.nodes[value] || [];
  }

  addEdge(node1, node2) {
    if (!this.contains(node1) || !this.contains(node2)) {
      console.warn("unable to add edge, one of supplied verticies does not exist");
      return;
    }

    this.nodes[node1].push(node2);
    this.nodes[node2].push(node1);
  }

  traverseDepthFirst(node, fn, depth = 0, visited) {
    // need a way to mark as visited so we don't end up in a loop
    // run the function on the current node
    // forEach edge run traverseDepthFirst
    visited = visited || new Set();
    fn(node, depth);
    visited.add(node);

    this.nodes[node].forEach(edge => {
      if (visited.has(edge)) return;
      this.traverseDepthFirst(edge, fn, depth + 1, visited);
    });

    return;
  }

  traverseBredthFirst(node, fn) {
    let myQueue = [node];

    let visitedAndDepth = new Map(); // key is the node, value is the depth
    visitedAndDepth.set(node, 0);

    while (myQueue.length > 0) {
      let currentNode = myQueue.shift();
      fn(currentNode, visitedAndDepth.get(currentNode));
      let neighbors = this.nodes[currentNode].filter(edge => {
        if (!visitedAndDepth.has(edge)) {
          visitedAndDepth.set(edge, visitedAndDepth.get(currentNode) + 1);
          return true;
        }
      });
      myQueue = myQueue.concat(neighbors);
    }
  }
}

let myGraph = new Graph();
myGraph.addNode(1);
myGraph.addNode(2);
myGraph.addNode(3);
myGraph.addNode(4);
myGraph.addNode(5);
myGraph.addNode(6);
myGraph.addNode(7);
myGraph.addEdge(1, 2);
myGraph.addEdge(2, 4);
myGraph.addEdge(4, 5);
myGraph.addEdge(5, 6);
myGraph.addEdge(1, 3);
myGraph.addEdge(3, 4);
myGraph.addEdge(1, 7);

console.log(`
Graph looks like this
    1  -- 7
  /  |
 2   3
 |  /
  4  -- 5 -- 6 
 `);

//myGraph.traverseDepthFirst(1, (node, depth) => console.log(`visiting ${node} at depth ${depth}`));
myGraph.traverseBredthFirst(1, (node, depth) => console.log(`visiting ${node} at depth ${depth}`));
