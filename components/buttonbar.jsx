import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonBar = (props) => {
  const { visualizeAlgorithm, reset, generateMaze } = props;
  return (
    <div style={{display: '-webkit-inline-box'}}>
      <div style={{marginInlineEnd:'10px'}}>
      <Button variant="contained" color="primary"
        onClick={() => visualizeAlgorithm(0)}
        type="button"
      >
        Visualise Dijkstra
      </Button>
      </div>
      <div style={{marginInlineEnd:'10px'}}>
      <Button variant="contained" color="primary"
        onClick={() => visualizeAlgorithm(1)}
        type="button"
      >
        Visualise BFS
      </Button>
      </div>
      <div style={{marginInlineEnd:'10px'}}>
      <Button variant="contained" color="primary"
        onClick={() => visualizeAlgorithm(2)}
        type="button"
      >
        Visualise DFS
      </Button>
      </div>
      {/* <button
        onClick={() => visualizeAlgorithm(3)}
        type="button"
      >
        Visualise A*
      </button> */}
      <div style={{marginInlineEnd:'10px'}}>
      <Button variant="contained" color="secondary" 
        onClick={() => reset(false)}
        type="button"
      >
        Reset
      </Button>
      </div>
      <div style={{marginInlineEnd:'10px'}}>
      <Button variant="contained" color="secondary"
        onClick={() => reset(true)}
        type="button"
      >
        Reset Walls
      </Button>
      </div>
      <div style={{marginInlineEnd:'10px'}}> 
      <Button variant="contained" 
        onClick={() => generateMaze()}
        type="button"
      >
        Generate Maze
      </Button>
      </div>
    </div>
  );
};

export default ButtonBar;
