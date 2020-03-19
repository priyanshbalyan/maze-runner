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
      <button
        onClick={() => visualizeAlgorithm(3)}
        type="button"
      >
        Visualise A*
      </button>
      <button
        className='red'
        onClick={() => reset(false)}
        type="button"
      >
        Reset
      </button>
      <button
        className='red'
        onClick={() => reset(true)}
        type="button"
      >
        Reset Walls
      </button>
      <button
        className='green'
        onClick={() => generateMaze()}
        type="button"
      >
        Generate Maze
      </button>
      <style jsx>
        {`
          button {
            padding:10px;
            border-radius:2px;
            border:2px solid #222;
            background-color:transparent;
            color:#222;
            font-size:14px;
            cursor:pointer;
            margin:0 10px;
            transition:.1s;
          }

          button:hover {
            background-color:#222;
            color:#eee;
          }

          button.red {
            border-color:#a33;
            color:#a33;
          }

          button.red:hover {
            background-color:#a33;
            color:#fff;
          }

          button.green {
            border-color:#3a3;
            color:#3a3;
          }

          button.green:hover {
            background-color:#3a3;
            color:#fff;
          }

          `}
      </style>
    </div>
  );
};

export default ButtonBar;
