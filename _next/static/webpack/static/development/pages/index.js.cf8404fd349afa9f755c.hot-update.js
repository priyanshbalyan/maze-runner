webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
/* harmony import */ var _components_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/node */ "./components/node.jsx");
/* harmony import */ var _algorithms_dijkstra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../algorithms/dijkstra */ "./algorithms/dijkstra.js");
/* harmony import */ var _algorithms_BFS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../algorithms/BFS */ "./algorithms/BFS.js");
/* harmony import */ var _algorithms_DFS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../algorithms/DFS */ "./algorithms/DFS.js");
/* harmony import */ var _algorithms_AStar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../algorithms/AStar */ "./algorithms/AStar.js");
/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/board */ "./components/board.jsx");
var _jsxFileName = "/Users/priyanshbalyan/Documents/maze-runner/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/mouse-events-have-key-events */











var ROWS = 15,
    COLS = 20;
var START_ROW = 0,
    START_COL = 0;
var FINISH_ROW = 14,
    FINISH_COL = 18;

var getNode = function getNode(row, col) {
  var wall = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    row: row,
    col: col,
    isStart: row === START_ROW && col === START_COL,
    isFinish: row === FINISH_ROW && col === FINISH_COL,
    isVisited: false,
    isWall: wall,
    distance: Infinity,
    previousNode: null
  };
};

var getGrid = function getGrid() {
  var walls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var grid = [];

  lodash__WEBPACK_IMPORTED_MODULE_1__["each"](new Array(ROWS), function (_row, rowIndex) {
    var currentRow = [];

    lodash__WEBPACK_IMPORTED_MODULE_1__["each"](new Array(COLS), function (_col, colIndex) {
      // eslint-disable-next-line max-len
      currentRow.push(getNode(rowIndex, colIndex, walls ? walls[rowIndex][colIndex].isWall : false));
    });

    grid.push(currentRow);
  });

  return grid;
};

var toggleWall = function toggleWall(grid, row, col) {
  var newGrid = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](grid);

  var node = newGrid[row][col];

  if (!(node.isStart || node.isFinish)) {
    var newNode = lodash__WEBPACK_IMPORTED_MODULE_1__["assign"](node, {
      isWall: !node.isWall
    });

    newGrid[row][col] = newNode;
  }

  return newGrid;
};

var Home = function Home() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Home"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_3__["DndProvider"], {
    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_components_board__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.cf8404fd349afa9f755c.hot-update.js.map