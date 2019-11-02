/* eslint-disable no-nested-ternary */
import React from 'react';

const Node = (props) => {
  const {
    node, onMouseDown, onMouseEnter, onMouseUp,
  } = props;
  const extraClassName = node.isFinish
    ? 'finish' : node.isStart
      ? 'start' : node.isWall
        ? 'wall' : node.isVisited
          ? 'visited' : '';

  return (
    <div
      className={`node ${extraClassName}`}
      id={`node-${node.row}-${node.col}`}
      onMouseDown={() => onMouseDown(node.row, node.col)}
      onMouseEnter={() => onMouseEnter(node.row, node.col)}
      onMouseUp={() => onMouseUp()}
      role="button"
      tabIndex={0}
    >
      <style jsx>
        {`
          .node {
            display: inline-block;
            width: 25px;
            height: 25px;
            outline: 1px solid rgb(175, 216, 248);
            transition: all 0.5s linear;
          }
          .wall {
            background-color: black;
          }
          .visited {
            animation-name: visitedAnimation;
            animation-duration: 1.5s;
            animation-timing-function: ease-out;
            animation-delay: 0;
            animation-direction: alternate;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            animation-play-state: running;
          }
          
          .finish {
            background-color: green !important;
          }
          .start {
            background-color: red !important;
          }
          @keyframes visitedAnimation {
            0% {
              transform: scale(0.3);
              background-color: rgba(0, 0, 66, 0.75);
              border-radius: 100%;
            }
          
            50% {
              background-color: rgba(17, 104, 217, 0.75);
            }
          
            75% {
              transform: scale(1.2);
              rotate: deg(360)
              background-color: rgba(0, 217, 159, 0.75);
            }
          
            100% {
              transform: scale(1);
              background-color: rgba(0, 190, 218, 0.75);
            }
          }
          .path {
            animation-name: shortestPath;
            animation-duration: 1.5s;
            animation-timing-function: ease-out;
            animation-delay: 0;
            animation-direction: alternate;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            animation-play-state: running;
          }
          @keyframes shortestPath {
            0% {
              transform: scale(0.6);
              background-color: rgb(255, 254, 106);
            }
          
            50% {
              transform: scale(1.2);
              background-color: rgb(255, 254, 106);
            }
          
            100% {
              transform: scale(1);
              background-color: rgb(255, 254, 106);
            }
          }
          
        `}
      </style>
    </div>
  );
};

export default Node;
