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
	return <div>Game of Life</div>;
}

export default App;
