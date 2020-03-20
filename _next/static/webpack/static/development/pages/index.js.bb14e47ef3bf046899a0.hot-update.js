webpackHotUpdate("static/development/pages/index.js",{

/***/ "./algorithms/AStar.js":
/*!*****************************!*\
  !*** ./algorithms/AStar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-param-reassign */


function getNeighbors(currentNode, grid) {
  var array = [];
  var row = currentNode.row,
      col = currentNode.col;
  if (row > 0) array.push(grid[row - 1][col]);
  if (col > 0) array.push(grid[row][col - 1]);
  if (row < grid.length - 1) array.push(grid[row + 1][col]);
  if (col < grid[0].length - 1) array.push(grid[row][col + 1]);
  return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](array, function (node) {
    return !node.isVisited && !node.isWall;
  });
}

function Astar(grid, startNode, endNode) {
  var openList = [];
  var closeList = [];
  var visitedNodes = [];
  startNode.f = 0;
  startNode.g = 0;
  startNode.h = 0;
  endNode.f = 0;
  endNode.g = 0;
  endNode.h = 0;
  openList.push(startNode);

  var _loop = function _loop() {
    var currentNode = openList[0];
    var currentIndex = 0;

    for (var i = 0; i < openList.length; i += 1) {
      if (openList[i].f < currentNode.f) {
        currentNode = openList[i];
        currentIndex = i;
      }
    }

    openList.splice(currentIndex, 1);
    closeList.push(currentNode);
    visitedNodes.push(currentNode);
    if (currentNode === endNode) return {
      v: visitedNodes
    };
    var neighbors = getNeighbors(currentNode, grid);

    lodash__WEBPACK_IMPORTED_MODULE_0__["each"](neighbors, function (neighbor) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0__["find"](closeList, neighbor)) return;
      neighbor.g = currentNode.g + 1;
      neighbor.h = Math.abs(endNode.row - neighbor.row) + Math.abs(endNode.col - neighbor.col);
      neighbor.f = neighbor.g + neighbor.h;
      neighbor.previousNode = currentNode;

      if (lodash__WEBPACK_IMPORTED_MODULE_0__["find"](openList, neighbor)) {
        if (neighbor.g > lodash__WEBPACK_IMPORTED_MODULE_0__["find"](openList, neighbor).g) return;
      }

      openList.push(neighbor);
      neighbor.isVisited = true;
    });
  };

  while (openList.length) {
    var _ret = _loop();

    if (typeof _ret === "object") return _ret.v;
  }

  return visitedNodes;
}

/* harmony default export */ __webpack_exports__["default"] = (Astar);

/***/ })

})
//# sourceMappingURL=index.js.bb14e47ef3bf046899a0.hot-update.js.map