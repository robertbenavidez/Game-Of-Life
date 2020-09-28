import React from 'react';

export const GameOfLifeDescription = () => {
	return (
		<div>
			<h3>Game of Life</h3>
			<p>
				The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in
				1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring
				no further input. One interacts with the Game of Life by creating an initial configuration and observing
				how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing
				machine.
			</p>
			<h3>Rules</h3>
			<ul>
				<li>A living cell with less than 2 neighbors will die by underpopulation</li>
				<li>A living cell with more than 3 neighbors will die by overcrowding</li>
				<li>A living cell with 2 or 3 neighbors will sustain life</li>
				<li>An empty cell with exactly 3 neighbors will create life</li>
			</ul>
		</div>
	);
};
