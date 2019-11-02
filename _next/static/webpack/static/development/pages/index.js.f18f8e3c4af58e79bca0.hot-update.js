webpackHotUpdate("static/development/pages/index.js",{

/***/ "./algorithms/DFS.js":
/*!***************************!*\
  !*** ./algorithms/DFS.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-param-reassign */


function getNeighbors(currentNode, grid) {
  var neighbors = [];
  var row = currentNode.row,
      col = currentNode.col;
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](neighbors, function (neighbor) {
    return !neighbor.isVisited && !neighbor.isWall;
  });
}

function updateNeighbors(currentNode, neighbors) {
  return lodash__WEBPACK_IMPORTED_MODULE_0__["map"](neighbors, function (neighbor) {
    neighbor.isVisited = true;
    neighbor.previousNode = currentNode;
    return neighbor;
  });
}

function DFS(grid, startNode, endNode) {
  var stack = [];
  var visitedNodes = [];
  stack.push(startNode);

  while (stack.length) {
    var currentNode = stack.pop();
    currentNode.isVisited = true;
    visitedNodes.push(currentNode);
    if (currentNode === endNode) return visitedNodes;
    var neighbors = getNeighbors(currentNode, grid);
    var updatedNeighbors = updateNeighbors(currentNode, neighbors);
    stack = lodash__WEBPACK_IMPORTED_MODULE_0__["concat"](stack, updatedNeighbors);
  }

  return visitedNodes;
}

/* harmony default export */ __webpack_exports__["default"] = (DFS);

/***/ })

})
//# sourceMappingURL=index.js.f18f8e3c4af58e79bca0.hot-update.js.map