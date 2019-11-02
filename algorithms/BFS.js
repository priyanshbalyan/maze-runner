/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
import * as _ from 'lodash';

function getNeighbors(currentNode, grid) {
  const array = [];
  const { row, col } = currentNode;
  if (row > 0) array.push(grid[row - 1][col]);
  if (col > 0) array.push(grid[row][col - 1]);
  if (row < grid.length - 1) array.push(grid[row + 1][col]);
  if (col < grid[0].length - 1) array.push(grid[row][col + 1]);
  return _.filter(array, (node) => !node.isVisited && !node.isWall);
}

function updateNeighbors(currentNode, neighbors) {
  return _.map(neighbors, (neighbor) => {
    neighbor.isVisited = true;
    neighbor.previousNode = currentNode;
    return neighbor;
  });
}

function BFS(grid, startNode, endNode) {
  let queue = [];
  const visitedNodes = [];
  queue.push(startNode);
  while (queue.length) {
    const currentNode = queue.shift();
    currentNode.isVisited = true;

    visitedNodes.push(currentNode);

    if (currentNode === endNode) return visitedNodes;

    const neighbors = getNeighbors(currentNode, grid);
    const updatedNeighbors = updateNeighbors(currentNode, neighbors);
    queue = _.concat(queue, updatedNeighbors);
  }

  return visitedNodes;
}

export default BFS;
