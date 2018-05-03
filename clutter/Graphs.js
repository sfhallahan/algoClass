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
        - 
    - Cons
        - 

3) Adjacency Lists


Graph Traversal Algorithms
    - Bredth first search
        - Computational complexity
        - tradeoffs
        - code implemntation
    - Depth first search
        - Computational complexity
        - tradeoffs
        - code implemntation





*/
