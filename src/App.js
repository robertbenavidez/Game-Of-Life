import React, { useState } from 'react';
import './App.css';

const numRows = 50;
const numColums = 50;

const generateEmptyGrid = () => {
	const rows = [];
	//iterate to create rows and colums
	for (let i = 0; i < numRows; i++) {
		rows.push(Array.from(Array(numColums), () => 0));
	}
	return rows;
};

function App() {
	const [ grid, setGrid ] = useState(generateEmptyGrid());
	console.log(grid);
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${numColums}, 20px)`
			}}
		>
			{grid.map((rows, i) =>
				rows.map((col, k) => (
					<div
						style={{
							width: 20,
							height: 20,
							backgroundColor: grid[i][k] ? 'pink' : undefined,
							border: 'solid 1px black'
						}}
					/>
				))
			)}
		</div>
	);
}

export default App;
