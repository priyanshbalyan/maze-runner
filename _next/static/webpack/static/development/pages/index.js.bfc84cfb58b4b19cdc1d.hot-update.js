webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
/* harmony import */ var _components_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/node */ "./components/node.jsx");
/* harmony import */ var _algorithms_dijkstra__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../algorithms/dijkstra */ "./algorithms/dijkstra.js");
/* harmony import */ var _algorithms_BFS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../algorithms/BFS */ "./algorithms/BFS.js");
/* harmony import */ var _algorithms_DFS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../algorithms/DFS */ "./algorithms/DFS.js");
/* harmony import */ var _algorithms_AStar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../algorithms/AStar */ "./algorithms/AStar.js");
var _jsxFileName = "/Users/priyanshbalyan/Documents/maze-runner/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

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

  lodash__WEBPACK_IMPORTED_MODULE_2__["each"](new Array(ROWS), function (_row, rowIndex) {
    var currentRow = [];

    lodash__WEBPACK_IMPORTED_MODULE_2__["each"](new Array(COLS), function (_col, colIndex) {
      // eslint-disable-next-line max-len
      currentRow.push(getNode(rowIndex, colIndex, walls ? walls[rowIndex][colIndex].isWall : false));
    });

    grid.push(currentRow);
  });

  return grid;
};

var toggleWall = function toggleWall(grid, row, col) {
  var newGrid = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](grid);

  var node = newGrid[row][col];

  if (!(node.isStart || node.isFinish)) {
    var newNode = lodash__WEBPACK_IMPORTED_MODULE_2__["assign"](node, {
      isWall: !node.isWall
    });

    newGrid[row][col] = newNode;
  }

  return newGrid;
};

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      nodes = _useState[0],
      setNodes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      mousePressed = _useState2[0],
      setMousePressed = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setNodes(getGrid());
  }, []);

  var handleMouseDown = function handleMouseDown(row, col) {
    setMousePressed(true);
    setNodes(toggleWall(nodes, row, col));
  };

  var handleMouseEnter = function handleMouseEnter(row, col) {
    if (!mousePressed) return;
    setNodes(toggleWall(nodes, row, col));
  };

  var handleMouseUp = function handleMouseUp() {
    setMousePressed(false);
  };

  var reset = function reset() {
    var resetWall = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (resetWall) {
      setNodes(getGrid());
      return;
    }

    setNodes(getGrid(nodes));

    lodash__WEBPACK_IMPORTED_MODULE_2__["each"](lodash__WEBPACK_IMPORTED_MODULE_2__["flatten"](nodes), function (node) {
      nodes.isVisited = false;
      var element = document.getElementById("node-".concat(node.row, "-").concat(node.col));

      if (element) {
        element.className = lodash__WEBPACK_IMPORTED_MODULE_2__["replace"](element.className, /visited/i, '');
        element.className = lodash__WEBPACK_IMPORTED_MODULE_2__["replace"](element.className, /path/i, '');
      }
    });
  };

  var getShortestPath = function getShortestPath(finishNode) {
    var array = [];
    var currentNode = finishNode;

    while (currentNode) {
      array.push(currentNode);
      currentNode = currentNode.previousNode;
    }

    return array.reverse();
  };

  var animateAlgorithm = function animateAlgorithm(visitedNodes, shortestPathNodes) {
    lodash__WEBPACK_IMPORTED_MODULE_2__["each"](visitedNodes, function (node, i) {
      if (node.row === START_ROW && node.col === START_COL || node.row === FINISH_ROW && node.col === FINISH_COL) return;

      lodash__WEBPACK_IMPORTED_MODULE_2__["delay"](function () {
        document.getElementById("node-".concat(node.row, "-").concat(node.col)).className += ' visited';
      }, 20 * i);
    });

    lodash__WEBPACK_IMPORTED_MODULE_2__["each"](shortestPathNodes, function (node, j) {
      if (node.row === START_ROW && node.col === START_COL || node.row === FINISH_ROW && node.col === FINISH_COL) return;

      lodash__WEBPACK_IMPORTED_MODULE_2__["delay"](function () {
        document.getElementById("node-".concat(node.row, "-").concat(node.col)).className += ' path';
      }, visitedNodes.length * 20 + 30 * j);
    });
  };

  var visualizeAlgorithm = function visualizeAlgorithm(type) {
    var startNode = nodes[START_ROW][START_COL];
    var endNode = nodes[FINISH_ROW][FINISH_COL];
    var visitedNodes = [];

    switch (type) {
      case 0:
        visitedNodes = Object(_algorithms_dijkstra__WEBPACK_IMPORTED_MODULE_7__["default"])(nodes, startNode, endNode);
        break;

      default:
      case 1:
        visitedNodes = Object(_algorithms_BFS__WEBPACK_IMPORTED_MODULE_8__["default"])(nodes, startNode, endNode);
        break;

      case 2:
        visitedNodes = Object(_algorithms_DFS__WEBPACK_IMPORTED_MODULE_9__["default"])(nodes, startNode, endNode);
        break;

      case 3:
        visitedNodes = Object(_algorithms_AStar__WEBPACK_IMPORTED_MODULE_10__["default"])(nodes, startNode, endNode);
        break;
    }

    var shortestPathNodes = getShortestPath(endNode);
    animateAlgorithm(visitedNodes, shortestPathNodes);
  };

  var trigger = false;

  var handleDragStart = function handleDragStart(row, col) {
    trigger = true;
  };

  var handleDrop = function handleDrop(row, col) {
    if (trigger) {}
  };

  var generateMaze = function generateMaze() {};

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_4__["DndProvider"], {
    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Home"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  })), __jsx("center", {
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return visualizeAlgorithm(0);
    },
    type: "button",
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Visualise Dijkstra"), __jsx("button", {
    onClick: function onClick() {
      return visualizeAlgorithm(1);
    },
    type: "button",
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Visualise BFS"), __jsx("button", {
    onClick: function onClick() {
      return visualizeAlgorithm(2);
    },
    type: "button",
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Visualise DFS"), __jsx("button", {
    onClick: function onClick() {
      return visualizeAlgorithm(3);
    },
    type: "button",
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Visualise A*"), __jsx("button", {
    onClick: function onClick() {
      return reset(false);
    },
    type: "button",
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Reset"), __jsx("button", {
    onClick: function onClick() {
      return reset(true);
    },
    type: "button",
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Reset Walls"), __jsx("button", {
    onClick: function onClick() {
      return generateMaze();
    },
    type: "button",
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "Generate Maze"), __jsx("div", {
    onMouseLeave: function onMouseLeave() {
      return setMousePressed(false);
    },
    className: "jsx-2452316421" + " " + "board",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, lodash__WEBPACK_IMPORTED_MODULE_2__["map"](nodes, function (row, rowIdx) {
    return __jsx("div", {
      key: rowIdx,
      className: "jsx-2452316421",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_2__["map"](row, function (node, nodeIdx) {
      return __jsx(_components_node__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: nodeIdx,
        node: node,
        draggable: node.row === START_ROW && node.col === START_COL || node.row === FINISH_ROW && node.col === FINISH_COL,
        onMouseDown: function onMouseDown(_row, col) {
          return handleMouseDown(_row, col);
        },
        onMouseEnter: function onMouseEnter(_row, col) {
          return handleMouseEnter(_row, col);
        },
        onDragStart: function onDragStart(_row, col) {
          return handleDragStart(_row, col);
        },
        onDragOver: function onDragOver(e) {
          return e.preventDefault();
        },
        onDrop: function onDrop(_row, col) {
          return handleDrop(row, col);
        },
        onMouseUp: function onMouseUp() {
          return handleMouseUp();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      });
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2452316421",
    __self: this
  }, "div.jsx-2452316421{line-height:0;}body.jsx-2452316421{background-color:black;}.board.jsx-2452316421{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcml5YW5zaGJhbHlhbi9Eb2N1bWVudHMvbWF6ZS1ydW5uZXIvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdPYSxBQUd5QixBQUdTLEFBR2QsU0FDUSxLQU5uQixTQUdBLEdBSWlCLGVBQ0osV0FDYiIsImZpbGUiOiIvVXNlcnMvcHJpeWFuc2hiYWx5YW4vRG9jdW1lbnRzL21hemUtcnVubmVyL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L21vdXNlLWV2ZW50cy1oYXZlLWtleS1ldmVudHMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtZG5kJztcbmltcG9ydCBCYWNrZW5kIGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJztcbmltcG9ydCBOb2RlIGZyb20gJy4uL2NvbXBvbmVudHMvbm9kZSc7XG5pbXBvcnQgRGlqa3N0cmEgZnJvbSAnLi4vYWxnb3JpdGhtcy9kaWprc3RyYSc7XG5pbXBvcnQgQkZTIGZyb20gJy4uL2FsZ29yaXRobXMvQkZTJztcbmltcG9ydCBERlMgZnJvbSAnLi4vYWxnb3JpdGhtcy9ERlMnO1xuaW1wb3J0IEFTdGFyIGZyb20gJy4uL2FsZ29yaXRobXMvQVN0YXInO1xuXG5jb25zdCBbUk9XUywgQ09MU10gPSBbMTUsIDIwXTtcbmNvbnN0IFtTVEFSVF9ST1csIFNUQVJUX0NPTF0gPSBbMCwgMF07XG5jb25zdCBbRklOSVNIX1JPVywgRklOSVNIX0NPTF0gPSBbMTQsIDE4XTtcblxuY29uc3QgZ2V0Tm9kZSA9IChyb3csIGNvbCwgd2FsbCA9IGZhbHNlKSA9PiAoe1xuICByb3csXG4gIGNvbCxcbiAgaXNTdGFydDogcm93ID09PSBTVEFSVF9ST1cgJiYgY29sID09PSBTVEFSVF9DT0wsXG4gIGlzRmluaXNoOiByb3cgPT09IEZJTklTSF9ST1cgJiYgY29sID09PSBGSU5JU0hfQ09MLFxuICBpc1Zpc2l0ZWQ6IGZhbHNlLFxuICBpc1dhbGw6IHdhbGwsXG4gIGRpc3RhbmNlOiBJbmZpbml0eSxcbiAgcHJldmlvdXNOb2RlOiBudWxsLFxufSk7XG5cbmNvbnN0IGdldEdyaWQgPSAod2FsbHMgPSBudWxsKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBbXTtcbiAgXy5lYWNoKG5ldyBBcnJheShST1dTKSwgKF9yb3csIHJvd0luZGV4KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFJvdyA9IFtdO1xuICAgIF8uZWFjaChuZXcgQXJyYXkoQ09MUyksIChfY29sLCBjb2xJbmRleCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICAgIGN1cnJlbnRSb3cucHVzaChnZXROb2RlKHJvd0luZGV4LCBjb2xJbmRleCwgd2FsbHMgPyB3YWxsc1tyb3dJbmRleF1bY29sSW5kZXhdLmlzV2FsbCA6IGZhbHNlKSk7XG4gICAgfSk7XG4gICAgZ3JpZC5wdXNoKGN1cnJlbnRSb3cpO1xuICB9KTtcblxuICByZXR1cm4gZ3JpZDtcbn07XG5cbmNvbnN0IHRvZ2dsZVdhbGwgPSAoZ3JpZCwgcm93LCBjb2wpID0+IHtcbiAgY29uc3QgbmV3R3JpZCA9IF8uY2xvbmUoZ3JpZCk7XG4gIGNvbnN0IG5vZGUgPSBuZXdHcmlkW3Jvd11bY29sXTtcbiAgaWYgKCEobm9kZS5pc1N0YXJ0IHx8IG5vZGUuaXNGaW5pc2gpKSB7XG4gICAgY29uc3QgbmV3Tm9kZSA9IF8uYXNzaWduKG5vZGUsIHsgaXNXYWxsOiAhbm9kZS5pc1dhbGwgfSk7XG4gICAgbmV3R3JpZFtyb3ddW2NvbF0gPSBuZXdOb2RlO1xuICB9XG4gIHJldHVybiBuZXdHcmlkO1xufTtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW25vZGVzLCBzZXROb2Rlc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21vdXNlUHJlc3NlZCwgc2V0TW91c2VQcmVzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE5vZGVzKGdldEdyaWQoKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAocm93LCBjb2wpID0+IHtcbiAgICBzZXRNb3VzZVByZXNzZWQodHJ1ZSk7XG4gICAgc2V0Tm9kZXModG9nZ2xlV2FsbChub2Rlcywgcm93LCBjb2wpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKHJvdywgY29sKSA9PiB7XG4gICAgaWYgKCFtb3VzZVByZXNzZWQpIHJldHVybjtcbiAgICBzZXROb2Rlcyh0b2dnbGVXYWxsKG5vZGVzLCByb3csIGNvbCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgc2V0TW91c2VQcmVzc2VkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCByZXNldCA9IChyZXNldFdhbGwgPSBmYWxzZSkgPT4ge1xuICAgIGlmIChyZXNldFdhbGwpIHtcbiAgICAgIHNldE5vZGVzKGdldEdyaWQoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldE5vZGVzKGdldEdyaWQobm9kZXMpKTtcbiAgICBfLmVhY2goXy5mbGF0dGVuKG5vZGVzKSwgKG5vZGUpID0+IHtcbiAgICAgIG5vZGVzLmlzVmlzaXRlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBub2RlLSR7bm9kZS5yb3d9LSR7bm9kZS5jb2x9YCk7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IF8ucmVwbGFjZShlbGVtZW50LmNsYXNzTmFtZSwgL3Zpc2l0ZWQvaSwgJycpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IF8ucmVwbGFjZShlbGVtZW50LmNsYXNzTmFtZSwgL3BhdGgvaSwgJycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFNob3J0ZXN0UGF0aCA9IChmaW5pc2hOb2RlKSA9PiB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBsZXQgY3VycmVudE5vZGUgPSBmaW5pc2hOb2RlO1xuICAgIHdoaWxlIChjdXJyZW50Tm9kZSkge1xuICAgICAgYXJyYXkucHVzaChjdXJyZW50Tm9kZSk7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnByZXZpb3VzTm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5LnJldmVyc2UoKTtcbiAgfTtcblxuICBjb25zdCBhbmltYXRlQWxnb3JpdGhtID0gKHZpc2l0ZWROb2Rlcywgc2hvcnRlc3RQYXRoTm9kZXMpID0+IHtcbiAgICBfLmVhY2godmlzaXRlZE5vZGVzLCAobm9kZSwgaSkgPT4ge1xuICAgICAgaWYgKChub2RlLnJvdyA9PT0gU1RBUlRfUk9XICYmIG5vZGUuY29sID09PSBTVEFSVF9DT0wpXG4gICAgICAgIHx8IChub2RlLnJvdyA9PT0gRklOSVNIX1JPVyAmJiBub2RlLmNvbCA9PT0gRklOSVNIX0NPTCkpIHJldHVybjtcbiAgICAgIF8uZGVsYXkoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbm9kZS0ke25vZGUucm93fS0ke25vZGUuY29sfWApLmNsYXNzTmFtZSArPSAnIHZpc2l0ZWQnO1xuICAgICAgfSwgMjAgKiBpKTtcbiAgICB9KTtcblxuICAgIF8uZWFjaChzaG9ydGVzdFBhdGhOb2RlcywgKG5vZGUsIGopID0+IHtcbiAgICAgIGlmICgobm9kZS5yb3cgPT09IFNUQVJUX1JPVyAmJiBub2RlLmNvbCA9PT0gU1RBUlRfQ09MKVxuICAgICAgICB8fCAobm9kZS5yb3cgPT09IEZJTklTSF9ST1cgJiYgbm9kZS5jb2wgPT09IEZJTklTSF9DT0wpKSByZXR1cm47XG4gICAgICBfLmRlbGF5KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5vZGUtJHtub2RlLnJvd30tJHtub2RlLmNvbH1gKS5jbGFzc05hbWUgKz0gJyBwYXRoJztcbiAgICAgIH0sIHZpc2l0ZWROb2Rlcy5sZW5ndGggKiAyMCArIDMwICogaik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdmlzdWFsaXplQWxnb3JpdGhtID0gKHR5cGUpID0+IHtcbiAgICBjb25zdCBzdGFydE5vZGUgPSBub2Rlc1tTVEFSVF9ST1ddW1NUQVJUX0NPTF07XG4gICAgY29uc3QgZW5kTm9kZSA9IG5vZGVzW0ZJTklTSF9ST1ddW0ZJTklTSF9DT0xdO1xuICAgIGxldCB2aXNpdGVkTm9kZXMgPSBbXTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgMDogdmlzaXRlZE5vZGVzID0gRGlqa3N0cmEobm9kZXMsIHN0YXJ0Tm9kZSwgZW5kTm9kZSk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIGNhc2UgMTogdmlzaXRlZE5vZGVzID0gQkZTKG5vZGVzLCBzdGFydE5vZGUsIGVuZE5vZGUpOyBicmVhaztcbiAgICAgIGNhc2UgMjogdmlzaXRlZE5vZGVzID0gREZTKG5vZGVzLCBzdGFydE5vZGUsIGVuZE5vZGUpOyBicmVhaztcbiAgICAgIGNhc2UgMzogdmlzaXRlZE5vZGVzID0gQVN0YXIobm9kZXMsIHN0YXJ0Tm9kZSwgZW5kTm9kZSk7IGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCBzaG9ydGVzdFBhdGhOb2RlcyA9IGdldFNob3J0ZXN0UGF0aChlbmROb2RlKTtcbiAgICBhbmltYXRlQWxnb3JpdGhtKHZpc2l0ZWROb2Rlcywgc2hvcnRlc3RQYXRoTm9kZXMpO1xuICB9O1xuXG4gIGxldCB0cmlnZ2VyID0gZmFsc2U7XG4gIGNvbnN0IGhhbmRsZURyYWdTdGFydCA9IChyb3csIGNvbCkgPT4ge1xuICAgIHRyaWdnZXIgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyb3AgPSAocm93LCBjb2wpID0+IHtcbiAgICBpZiAodHJpZ2dlcikge1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZU1hemUgPSAoKSA9PiB7XG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17QmFja2VuZH0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdmlzdWFsaXplQWxnb3JpdGhtKDApfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlzdWFsaXNlIERpamtzdHJhXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdmlzdWFsaXplQWxnb3JpdGhtKDEpfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlzdWFsaXNlIEJGU1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZpc3VhbGl6ZUFsZ29yaXRobSgyKX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFZpc3VhbGlzZSBERlNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2aXN1YWxpemVBbGdvcml0aG0oMyl9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBWaXN1YWxpc2UgQSpcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZXNldChmYWxzZSl9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlc2V0KHRydWUpfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVzZXQgV2FsbHNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZW5lcmF0ZU1hemUoKX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEdlbmVyYXRlIE1hemVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib2FyZFwiXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0TW91c2VQcmVzc2VkKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge18ubWFwKG5vZGVzLCAocm93LCByb3dJZHgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cm93SWR4fT5cbiAgICAgICAgICAgICAgICAgIHtfLm1hcChyb3csIChub2RlLCBub2RlSWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxOb2RlXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtub2RlSWR4fVxuICAgICAgICAgICAgICAgICAgICAgIG5vZGU9e25vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPXsobm9kZS5yb3cgPT09IFNUQVJUX1JPVyAmJiBub2RlLmNvbCA9PT0gU1RBUlRfQ09MKVxuICAgICAgICAgICAgICAgICAgICAgIHx8IChub2RlLnJvdyA9PT0gRklOSVNIX1JPVyAmJiBub2RlLmNvbCA9PT0gRklOSVNIX0NPTCl9XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhfcm93LCBjb2wpID0+IGhhbmRsZU1vdXNlRG93bihfcm93LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KF9yb3csIGNvbCkgPT4gaGFuZGxlTW91c2VFbnRlcihfcm93LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoX3JvdywgY29sKSA9PiBoYW5kbGVEcmFnU3RhcnQoX3JvdywgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17KF9yb3csIGNvbCkgPT4gaGFuZGxlRHJvcChyb3csIGNvbCl9XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiBoYW5kbGVNb3VzZVVwKCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2NlbnRlcj5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgYm9keXtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAuYm9hcmQge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RuZFByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/priyanshbalyan/Documents/maze-runner/pages/index.jsx */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.bfc84cfb58b4b19cdc1d.hot-update.js.map