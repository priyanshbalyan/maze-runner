/* eslint-disable no-param-reassign */
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

function updateNeighbors(currentNode, endNode, neighbors) {

}

function Astar(grid, startNode, endNode) {
  const openList = [];
  const closeList = [];
  const visitedNodes = [];
  console.log('trigger');
  startNode.f = 0;
  startNode.g = 0;
  startNode.h = 0;
  endNode.f = 0;
  endNode.g = 0;
  endNode.h = 0;
  openList.push(startNode);
  while (openList.length) {
    const currentNode = openList.shift();
    closeList.push(currentNode);
    visitedNodes.push(currentNode);
    if (currentNode === endNode) return visitedNodes;

    const neighbors = getNeighbors(currentNode, grid);

    _.each(neighbors, (neighbor) => {
      for (let i = 0; i < neighbors.length; i += 1) {
        const neighbor = neighbors[i];
        if (_.find(closeList, neighbor)) return;

        neighbor.g = currentNode.g + 1;
        neighbor.h = Math.abs(endNode.row - neighbor.row) + Math.abs(endNode.col - neighbor.col);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.previousNode = currentNode;

        if (_.find(openList, neighbor)) {
          if (neighbor.g > _.find(openList, neighbor).g) return;
        }
        openList.push(neighbor);
        neighbor.isVisited = true;
      }
    });
  }

  return visitedNodes;
}

export default Astar;
