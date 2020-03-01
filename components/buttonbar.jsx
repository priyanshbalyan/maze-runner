import React from 'react';

const ButtonBar = (props) => {
  const { visualizeAlgorithm, reset, generateMaze } = props;
  return (
    <div>
      <button
        onClick={() => visualizeAlgorithm(0)}
        type="button"
      >
        Visualise Dijkstra
      </button>
      <button
        onClick={() => visualizeAlgorithm(1)}
        type="button"
      >
        Visualise BFS
      </button>
      <button
        onClick={() => visualizeAlgorithm(2)}
        type="button"
      >
        Visualise DFS
      </button>
      {/* <button
        onClick={() => visualizeAlgorithm(3)}
        type="button"
      >
        Visualise A*
      </button> */}
      <button
        onClick={() => reset(false)}
        type="button"
      >
        Reset
      </button>
      <button
        onClick={() => reset(true)}
        type="button"
      >
        Reset Walls
      </button>
      <button
        onClick={() => generateMaze()}
        type="button"
      >
        Generate Maze
      </button>
    </div>
  );
};

export default ButtonBar;
