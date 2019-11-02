/* eslint-disable no-continue */
/* eslint-disable no-param-reassign */
import * as _ from 'lodash';

function getNeighbors(node, grid) {
  const neighbors = [];
  const { row, col } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return _.filter(neighbors, (neighbor) => !neighbor.isVisited);
}

function updateNeighbors(currentNode, grid) {
  const neighbors = getNeighbors(currentNode, grid);
  _.each(neighbors, (neighbor) => {
    neighbor.distance = currentNode.distance + 1;
    neighbor.previousNode = currentNode;
  });
}

function sortNodes(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function Dijkstra(grid, startNode, endNode) {
  const visitedNodes = [];
  startNode.distance = 0;
  const unVisitedNodes = _.flatten(_.clone(grid));
  while (unVisitedNodes.length) {
    sortNodes(unVisitedNodes);
    const currentNode = unVisitedNodes.shift();

    if (currentNode.isWall) continue;
    if (currentNode.distance === Infinity) return visitedNodes;
    currentNode.isVisited = true;

    visitedNodes.push(currentNode);
    if (currentNode === endNode) return visitedNodes;
    updateNeighbors(currentNode, grid);
  }
}

export default Dijkstra;
