/* eslint-disable no-param-reassign */
import * as _ from 'lodash';

function getNeighbors(currentNode, grid) {
  const neighbors = [];
  const { row, col } = currentNode;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return _.filter(neighbors, (neighbor) => !neighbor.isVisited && !neighbor.isWall);
}

function updateNeighbors(currentNode, neighbors) {
  return _.map(neighbors, (neighbor) => {
    neighbor.isVisited = true;
    neighbor.previousNode = currentNode;
    return neighbor;
  });
}

function DFS(grid, startNode, endNode) {
  let stack = [];
  const visitedNodes = [];
  stack.push(startNode);
  while (stack.length) {
    const currentNode = stack.pop();
    currentNode.isVisited = true;
    visitedNodes.push(currentNode);

    if (currentNode === endNode) return visitedNodes;

    const neighbors = getNeighbors(currentNode, grid);
    const updatedNeighbors = updateNeighbors(currentNode, neighbors);
    stack = _.concat(stack, updatedNeighbors);
  }

  return visitedNodes;
}

export default DFS;
