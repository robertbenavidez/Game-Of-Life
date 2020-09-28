import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import {generateEmptyGrid, simLogic, numRows, numColums} from './helpers'
import { glider } from './presets'
import {GameOfLifeDescription} from './GameOfLifeDescription';


function App() {
 
	const [bufferOne, setBufferOne] = useState(() => {
		return generateEmptyGrid();
	})

	const [bufferTwo, setBufferTwo] = useState(() => {
		return generateEmptyGrid();
	})
	
	const [isDisplaying, setIsDisplaying] = useState(1)

	const [generation, setGeneration] = useState(0);

	const nextGeneration = () => {
		setGeneration(generation + 1);
		if (isDisplaying === 1) {
			setBufferTwo(simLogic(bufferOne));
			setIsDisplaying(2)
		} else {
			setBufferOne(simLogic(bufferTwo));
			setIsDisplaying(1)
		}
	}

	const initialBufferRef = useRef(bufferOne);

  	initialBufferRef.current = bufferOne;
	
	const [speed, setSpeed] = useState(500);
	
	const rateRef = useRef(speed);

	rateRef.current = speed;

	const grid = isDisplaying === 1 ? bufferOne : bufferTwo;

	const [isRunning, setRunning] = useState(false);
	

	useEffect(() => {
		console.log('active buffer', isDisplaying)
		let gameloop = null;
		if (isDisplaying && isRunning) {
		  gameloop = setInterval(
			() => {
			  nextGeneration();
			},
			rateRef.current,
			initialBufferRef.current
		  );
		} else if (!isRunning) {
		  clearInterval(gameloop);
		  return;
		}
		return () => clearInterval(gameloop);
	  }, [isDisplaying, isRunning]);

  return (
    <> 
    <button
      onClick={() => {
        setRunning(!isRunning);
        
      }}
      >
        {isRunning ? 'stop' : 'start'}
      </button>
      
      <button
            onClick={() => {
              if (isRunning) {
                setRunning(!isRunning);
              }
              setBufferOne(generateEmptyGrid());
              setBufferTwo(generateEmptyGrid());
              setGeneration(0);
            }}
          >
            Clear
          </button>
		  <button
            onClick={() => {
              const clearedGrid = [];
              for (let i = 0; i < numRows; i++) {
                clearedGrid.push(
                  Array.from(Array(numRows), () => (Math.random() > 0.7 ? 1 : 0))
                );
              }
              if (isDisplaying === 1) {
                setBufferOne(clearedGrid);
              } else {
                setBufferTwo(clearedGrid);
              }
            }}
          >
            Random
          </button>
		  <button
            onClick={() => {
              setSpeed(1000);
            }}
          >
            Slow Speed
          </button>
		  <button
            onClick={() => {
              setSpeed(500);
            }}
          >
            Normal Speed
          </button>
		  <button
            onClick={() => {
              setSpeed(200);
            }}
          >
            Fast Speed
          </button>
		  <button
            onClick={() => {
              setBufferOne(glider);
            }}
          >
            Glider
          </button>
		<h1 style={{fontSize:'1.5rem'}}>Generation {generation}</h1>
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${numColums}, 20px)`
    }}>
      
      {grid.map((rows, i) =>
      rows.map((col, j) =>(
        <div
        key={`${i}-${j}`}
        onClick={() => {
			if (isRunning) {
			  return;
			}
			const newGrid = Array.from(grid);
			newGrid[i][j] = grid[i][j] ? 0 : 1;
			if (isDisplaying === 1) {
			  setBufferOne(newGrid);
			} else {
			  setBufferTwo(newGrid);
			}
		}}
          style={{
            width: 20,
            height: 20,
            backgroundColor: grid[i][j] ? "purple" : undefined,
            border: "solid 1px black"
          }}
        />
      )))}
    </div>
		  <GameOfLifeDescription />
    </>
  );
}

export default App;

