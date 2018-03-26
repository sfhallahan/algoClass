/*
Version 1:
Given the size of a grid (X rows and Y columns), write a function that returns the number of possible paths one can take starting at the top left of the grid and ending at the bottom right, assuming you can only move to the right and down.
*/

// version 1
function countPaths(x, y) {
	// 2, 3
	let pathCount = 0;
	if (x === 1 && y === 1) {
		return 1;
	}
	if (x > 1) {
		pathCount = pathCount + countPaths(x - 1, y); // 1
	}
	if (y > 1) {
		pathCount = pathCount + countPaths(y - 1, x);
		2, 2;
	}
	return pathCount;
}

countPaths(2, 3);

/*
Version 2:
Now, imagine that the you can move up, down, left, or right but cannot visit a spot that has already been visited. 
How many unique paths can the you take?
Hint: it may be useful to create a grid class and use it to keep track of the state as the you traverses the grid. 
What useful methods can you put on your grid class? Can you write an implementation that only uses a single grid?
*/

class Grid {
	constructor(rowCount, columnCount) {
		this.rowCount = rowCount;
		this.columnCount = columnCount;
		this.visited = this.populateGrid(rowCount, columnCount);
	}

	populateGrid(rowCount, columnCount) {
		let visited = [];
		for (let i = 0; i < rowCount; i++) {
			visited.push([]);
			for (let j = 0; j < rowCount; j++) {
				visited[i].push(false);
			}
		}
		return visited;
	}

	hasBeenVisited(x, y) {
		console.log(`already visited ${x}, ${y}? ${this.visited[x][y]}`);
		return this.visited[x][y];
	}

	toggleVisited(x, y) {
		console.log(`visited ${x}, ${y}`);
		this.visited[x][y] = !this.visited[x][y];
	}
}

const myGrid = new Grid(3, 3);

function countPaths2(rowCount, columnCount) {
	const myGrid = new Grid(rowCount, columnCount);
	let pathCount = 0;

	function recurse(grid, x, y) {
		if (x === rowCount - 1 && y === columnCount - 1) {
			return pathCount++;
		}
		if (x < 0 || y < 0 || x >= rowCount || y >= columnCount) {
			return;
		}
		if (grid.hasBeenVisited(x, y)) return;
		grid.toggleVisited(x, y);
		recurse(grid, x + 1, y);
		recurse(grid, x - 1, y);
		recurse(grid, x, y + 1);
		recurse(grid, x, y - 1);
		grid.toggleVisited(x, y);
	}
	recurse(myGrid, 0, 0);
	return pathCount;
}

countPaths2(4, 5);
