webpackHotUpdate("static/development/pages/index.js",{

/***/ "./algorithms/dijkstra.js":
/*!********************************!*\
  !*** ./algorithms/dijkstra.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-continue */

/* eslint-disable no-param-reassign */


function getNeighbors(node, grid) {
  var neighbors = [];
  var row = node.row,
      col = node.col;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]); // return neighbors.filter((neighbor) => !neighbor.isVisited);

  return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](neighbors, function (neighbor) {
    return !neighbor.isViisted;
  });
}

function updateNeighbors(currentNode, grid) {
  var neighbors = getNeighbors(currentNode, grid);

  lodash__WEBPACK_IMPORTED_MODULE_0__["each"](neighbors, function (neighbor) {
    neighbor.distance = currentNode.distance + 1;
    neighbor.previousNode = currentNode;
  });
}

function sortNodes(unvisitedNodes) {
  unvisitedNodes.sort(function (nodeA, nodeB) {
    return nodeA.distance - nodeB.distance;
  });
}

function Dijkstra(grid, startNode, endNode) {
  var visitedNodes = [];
  startNode.distance = 0;

  var unVisitedNodes = lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"](lodash__WEBPACK_IMPORTED_MODULE_0__["clone"](grid));

  while (unVisitedNodes.length) {
    sortNodes(unVisitedNodes);
    var currentNode = unVisitedNodes.shift();
    if (currentNode.isWall) continue;
    if (currentNode.distance === Infinity) return visitedNodes;
    currentNode.isVisited = true;
    visitedNodes.push(currentNode);
    if (currentNode === endNode) return visitedNodes;
    updateNeighbors(currentNode, grid);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Dijkstra);

/***/ })

})
//# sourceMappingURL=index.js.823cb4605d4109cc7657.hot-update.js.map