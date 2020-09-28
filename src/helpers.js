export const numRows = 25;
export const numColums = 25;
const operations = [ [ 0, 1 ], [ 0, -1 ], [ 1, 0 ], [ 1, 1 ], [ 1, -1 ], [ -1, 0 ], [ -1, 1 ], [ -1, -1 ] ];

// Empty Grid Function
export const generateEmptyGrid = () => {
	const emptyGrid = [];
	//iterate to create rows and colums
	for (let i = 0; i < numRows; i++) {
		emptyGrid.push(Array.from(Array(numColums), () => 0));
	}
	return emptyGrid;
};

// Simulation Logic
export const simLogic = (buffer) => {
	let newGrid = generateEmptyGrid();
	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < numColums; j++) {
			let neighbors = 0;
			operations.forEach(([ x, y ]) => {
				const newI = i + x;
				const newJ = j + y;
				if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numColums) {
					neighbors += buffer[newI][newJ];
				}
			});
			if (neighbors < 2 || neighbors > 3) {
				newGrid[i][j] = 0;
			} else if (buffer[i][j] === 1 && (neighbors === 2 || neighbors === 3)) {
				newGrid[i][j] = 1;
			} else if (buffer[i][j] === 0 && neighbors === 3) {
				newGrid[i][j] = 1;
			}
		}
	}
	return newGrid;
};
