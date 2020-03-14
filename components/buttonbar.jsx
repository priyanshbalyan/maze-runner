import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonBar = (props) => {
  const { visualizeAlgorithm, reset, generateMaze } = props;
  return (
    <div>
      <Button variant="contained" color="primary"
        onClick={() => visualizeAlgorithm(0)}
        type="button"
      >
        Visualise Dijkstra
      </Button>
      <Button variant="contained" color="primary"
        onClick={() => visualizeAlgorithm(1)}
        type="button"
      >
        Visualise BFS
      </Button>
      <Button variant="contained" color="primary"
        onClick={() => visualizeAlgorithm(2)}
        type="button"
      >
        Visualise DFS
      </Button>
      {/* <button
        onClick={() => visualizeAlgorithm(3)}
        type="button"
      >
        Visualise A*
      </button> */}
      <Button variant="contained" color="secondary" 
        onClick={() => reset(false)}
        type="button"
      >
        Reset
      </Button>
      <Button variant="contained" color="secondary"
        onClick={() => reset(true)}
        type="button"
      >
        Reset Walls
      </Button>
      <Button variant="contained" 
        onClick={() => generateMaze()}
        type="button"
      >
        Generate Maze
      </Button>
    </div>
  );
};

export default ButtonBar;
