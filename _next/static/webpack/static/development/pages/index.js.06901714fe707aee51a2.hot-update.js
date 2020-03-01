webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/board.jsx":
/*!******************************!*\
  !*** ./components/board.jsx ***!
  \******************************/
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
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node */ "./components/node.jsx");
/* harmony import */ var _algorithms_dijkstra__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../algorithms/dijkstra */ "./algorithms/dijkstra.js");
/* harmony import */ var _algorithms_BFS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../algorithms/BFS */ "./algorithms/BFS.js");
/* harmony import */ var _algorithms_DFS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../algorithms/DFS */ "./algorithms/DFS.js");
/* harmony import */ var _algorithms_AStar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../algorithms/AStar */ "./algorithms/AStar.js");
var _jsxFileName = "/Users/priyanshbalyan/Documents/maze-runner/components/board.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable jsx-a11y/mouse-events-have-key-events */








var ROWS = 30,
    COLS = 40;
var START_ROW = 15,
    START_COL = 2;
var FINISH_ROW = 15,
    FINISH_COL = 38;

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

var Board = function Board() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      nodes = _useState[0],
      setNodes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      mousePressed = _useState2[0],
      setMousePressed = _useState2[1];

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

  var handleEndNodes = function handleEndNodes(row, col) {
    var startDragged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (startDragged) {
      START_ROW = row;
      START_COL = col;
    } else {
      FINISH_ROW = row;
      FINISH_COL = col;
    }

    reset();
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
        visitedNodes = Object(_algorithms_dijkstra__WEBPACK_IMPORTED_MODULE_5__["default"])(nodes, startNode, endNode);
        break;

      default:
      case 1:
        visitedNodes = Object(_algorithms_BFS__WEBPACK_IMPORTED_MODULE_6__["default"])(nodes, startNode, endNode);
        break;

      case 2:
        visitedNodes = Object(_algorithms_DFS__WEBPACK_IMPORTED_MODULE_7__["default"])(nodes, startNode, endNode);
        break;

      case 3:
        visitedNodes = Object(_algorithms_AStar__WEBPACK_IMPORTED_MODULE_8__["default"])(nodes, startNode, endNode);
        break;
    }

    var shortestPathNodes = getShortestPath(endNode);
    animateAlgorithm(visitedNodes, shortestPathNodes);
  };

  var generateMaze = function generateMaze() {
    reset();
    var grid = [];

    lodash__WEBPACK_IMPORTED_MODULE_2__["each"](new Array(ROWS), function (_row, rowIndex) {
      var currentRow = [];

      lodash__WEBPACK_IMPORTED_MODULE_2__["each"](new Array(COLS), function (_col, colIndex) {
        var randomness = !!lodash__WEBPACK_IMPORTED_MODULE_2__["round"](Math.pow(Math.random(), 2));

        if (rowIndex === FINISH_ROW && colIndex === FINISH_COL || rowIndex === START_ROW && colIndex === START_COL) {
          randomness = false;
        }

        currentRow.push(getNode(rowIndex, colIndex, randomness));
      });

      grid.push(currentRow);
    });

    setNodes(grid);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setNodes(getGrid());
    generateMaze();
  }, []);
  return __jsx("div", {
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Home"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  })), __jsx("center", {
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
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
      lineNumber: 170
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
      lineNumber: 176
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
      lineNumber: 182
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
      lineNumber: 188
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
      lineNumber: 194
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
      lineNumber: 200
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
      lineNumber: 206
    },
    __self: this
  }, "Generate Maze"), __jsx("div", {
    onMouseLeave: function onMouseLeave() {
      return setMousePressed(false);
    },
    className: "jsx-2452316421" + " " + "board",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, lodash__WEBPACK_IMPORTED_MODULE_2__["map"](nodes, function (row, rowIdx) {
    return __jsx("div", {
      key: rowIdx,
      className: "jsx-2452316421",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_2__["map"](row, function (node, nodeIdx) {
      return __jsx(_node__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: "".concat(nodeIdx, "~~").concat(rowIdx),
        node: node,
        draggable: node.row === START_ROW && node.col === START_COL || node.row === FINISH_ROW && node.col === FINISH_COL,
        onMouseDown: function onMouseDown(_row, col) {
          return handleMouseDown(_row, col);
        },
        onMouseEnter: function onMouseEnter(_row, col) {
          return handleMouseEnter(_row, col);
        },
        onMouseUp: function onMouseUp() {
          return handleMouseUp();
        },
        setEndNodes: handleEndNodes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      });
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2452316421",
    __self: this
  }, "div.jsx-2452316421{line-height:0;}body.jsx-2452316421{background-color:black;}.board.jsx-2452316421{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcml5YW5zaGJhbHlhbi9Eb2N1bWVudHMvbWF6ZS1ydW5uZXIvY29tcG9uZW50cy9ib2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMk9TLEFBR3lCLEFBR1MsQUFHZCxTQUNRLEtBTm5CLFNBR0EsR0FJaUIsZUFDSixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9wcml5YW5zaGJhbHlhbi9Eb2N1bWVudHMvbWF6ZS1ydW5uZXIvY29tcG9uZW50cy9ib2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9tb3VzZS1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IERpamtzdHJhIGZyb20gJy4uL2FsZ29yaXRobXMvZGlqa3N0cmEnO1xuaW1wb3J0IEJGUyBmcm9tICcuLi9hbGdvcml0aG1zL0JGUyc7XG5pbXBvcnQgREZTIGZyb20gJy4uL2FsZ29yaXRobXMvREZTJztcbmltcG9ydCBBU3RhciBmcm9tICcuLi9hbGdvcml0aG1zL0FTdGFyJztcblxuY29uc3QgW1JPV1MsIENPTFNdID0gWzMwLCA0MF07XG5sZXQgW1NUQVJUX1JPVywgU1RBUlRfQ09MXSA9IFsxNSwgMl07XG5sZXQgW0ZJTklTSF9ST1csIEZJTklTSF9DT0xdID0gWzE1LCAzOF07XG5cbmNvbnN0IGdldE5vZGUgPSAocm93LCBjb2wsIHdhbGwgPSBmYWxzZSkgPT4gKHtcbiAgcm93LFxuICBjb2wsXG4gIGlzU3RhcnQ6IHJvdyA9PT0gU1RBUlRfUk9XICYmIGNvbCA9PT0gU1RBUlRfQ09MLFxuICBpc0ZpbmlzaDogcm93ID09PSBGSU5JU0hfUk9XICYmIGNvbCA9PT0gRklOSVNIX0NPTCxcbiAgaXNWaXNpdGVkOiBmYWxzZSxcbiAgaXNXYWxsOiB3YWxsLFxuICBkaXN0YW5jZTogSW5maW5pdHksXG4gIHByZXZpb3VzTm9kZTogbnVsbCxcbn0pO1xuXG5jb25zdCBnZXRHcmlkID0gKHdhbGxzID0gbnVsbCkgPT4ge1xuICBjb25zdCBncmlkID0gW107XG4gIF8uZWFjaChuZXcgQXJyYXkoUk9XUyksIChfcm93LCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRSb3cgPSBbXTtcbiAgICBfLmVhY2gobmV3IEFycmF5KENPTFMpLCAoX2NvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICBjdXJyZW50Um93LnB1c2goZ2V0Tm9kZShyb3dJbmRleCwgY29sSW5kZXgsIHdhbGxzID8gd2FsbHNbcm93SW5kZXhdW2NvbEluZGV4XS5pc1dhbGwgOiBmYWxzZSkpO1xuICAgIH0pO1xuICAgIGdyaWQucHVzaChjdXJyZW50Um93KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5jb25zdCB0b2dnbGVXYWxsID0gKGdyaWQsIHJvdywgY29sKSA9PiB7XG4gIGNvbnN0IG5ld0dyaWQgPSBfLmNsb25lKGdyaWQpO1xuICBjb25zdCBub2RlID0gbmV3R3JpZFtyb3ddW2NvbF07XG4gIGlmICghKG5vZGUuaXNTdGFydCB8fCBub2RlLmlzRmluaXNoKSkge1xuICAgIGNvbnN0IG5ld05vZGUgPSBfLmFzc2lnbihub2RlLCB7IGlzV2FsbDogIW5vZGUuaXNXYWxsIH0pO1xuICAgIG5ld0dyaWRbcm93XVtjb2xdID0gbmV3Tm9kZTtcbiAgfVxuICByZXR1cm4gbmV3R3JpZDtcbn07XG5cbmNvbnN0IEJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBbbm9kZXMsIHNldE5vZGVzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbW91c2VQcmVzc2VkLCBzZXRNb3VzZVByZXNzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChyb3csIGNvbCkgPT4ge1xuICAgIHNldE1vdXNlUHJlc3NlZCh0cnVlKTtcbiAgICBzZXROb2Rlcyh0b2dnbGVXYWxsKG5vZGVzLCByb3csIGNvbCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAocm93LCBjb2wpID0+IHtcbiAgICBpZiAoIW1vdXNlUHJlc3NlZCkgcmV0dXJuO1xuICAgIHNldE5vZGVzKHRvZ2dsZVdhbGwobm9kZXMsIHJvdywgY29sKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICBzZXRNb3VzZVByZXNzZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0ID0gKHJlc2V0V2FsbCA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKHJlc2V0V2FsbCkge1xuICAgICAgc2V0Tm9kZXMoZ2V0R3JpZCgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0Tm9kZXMoZ2V0R3JpZChub2RlcykpO1xuICAgIF8uZWFjaChfLmZsYXR0ZW4obm9kZXMpLCAobm9kZSkgPT4ge1xuICAgICAgbm9kZXMuaXNWaXNpdGVkID0gZmFsc2U7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5vZGUtJHtub2RlLnJvd30tJHtub2RlLmNvbH1gKTtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXy5yZXBsYWNlKGVsZW1lbnQuY2xhc3NOYW1lLCAvdmlzaXRlZC9pLCAnJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXy5yZXBsYWNlKGVsZW1lbnQuY2xhc3NOYW1lLCAvcGF0aC9pLCAnJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW5kTm9kZXMgPSAocm93LCBjb2wsIHN0YXJ0RHJhZ2dlZCA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKHN0YXJ0RHJhZ2dlZCkge1xuICAgICAgU1RBUlRfUk9XID0gcm93O1xuICAgICAgU1RBUlRfQ09MID0gY29sO1xuICAgIH0gZWxzZSB7XG4gICAgICBGSU5JU0hfUk9XID0gcm93O1xuICAgICAgRklOSVNIX0NPTCA9IGNvbDtcbiAgICB9XG4gICAgcmVzZXQoKTtcbiAgfTtcblxuICBjb25zdCBnZXRTaG9ydGVzdFBhdGggPSAoZmluaXNoTm9kZSkgPT4ge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgbGV0IGN1cnJlbnROb2RlID0gZmluaXNoTm9kZTtcbiAgICB3aGlsZSAoY3VycmVudE5vZGUpIHtcbiAgICAgIGFycmF5LnB1c2goY3VycmVudE5vZGUpO1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wcmV2aW91c05vZGU7XG4gICAgfVxuICAgIHJldHVybiBhcnJheS5yZXZlcnNlKCk7XG4gIH07XG5cbiAgY29uc3QgYW5pbWF0ZUFsZ29yaXRobSA9ICh2aXNpdGVkTm9kZXMsIHNob3J0ZXN0UGF0aE5vZGVzKSA9PiB7XG4gICAgXy5lYWNoKHZpc2l0ZWROb2RlcywgKG5vZGUsIGkpID0+IHtcbiAgICAgIGlmICgobm9kZS5yb3cgPT09IFNUQVJUX1JPVyAmJiBub2RlLmNvbCA9PT0gU1RBUlRfQ09MKVxuICAgICAgICB8fCAobm9kZS5yb3cgPT09IEZJTklTSF9ST1cgJiYgbm9kZS5jb2wgPT09IEZJTklTSF9DT0wpKSByZXR1cm47XG4gICAgICBfLmRlbGF5KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5vZGUtJHtub2RlLnJvd30tJHtub2RlLmNvbH1gKS5jbGFzc05hbWUgKz0gJyB2aXNpdGVkJztcbiAgICAgIH0sIDIwICogaSk7XG4gICAgfSk7XG5cbiAgICBfLmVhY2goc2hvcnRlc3RQYXRoTm9kZXMsIChub2RlLCBqKSA9PiB7XG4gICAgICBpZiAoKG5vZGUucm93ID09PSBTVEFSVF9ST1cgJiYgbm9kZS5jb2wgPT09IFNUQVJUX0NPTClcbiAgICAgICAgfHwgKG5vZGUucm93ID09PSBGSU5JU0hfUk9XICYmIG5vZGUuY29sID09PSBGSU5JU0hfQ09MKSkgcmV0dXJuO1xuICAgICAgXy5kZWxheSgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBub2RlLSR7bm9kZS5yb3d9LSR7bm9kZS5jb2x9YCkuY2xhc3NOYW1lICs9ICcgcGF0aCc7XG4gICAgICB9LCB2aXNpdGVkTm9kZXMubGVuZ3RoICogMjAgKyAzMCAqIGopO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHZpc3VhbGl6ZUFsZ29yaXRobSA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3Qgc3RhcnROb2RlID0gbm9kZXNbU1RBUlRfUk9XXVtTVEFSVF9DT0xdO1xuICAgIGNvbnN0IGVuZE5vZGUgPSBub2Rlc1tGSU5JU0hfUk9XXVtGSU5JU0hfQ09MXTtcbiAgICBsZXQgdmlzaXRlZE5vZGVzID0gW107XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIDA6IHZpc2l0ZWROb2RlcyA9IERpamtzdHJhKG5vZGVzLCBzdGFydE5vZGUsIGVuZE5vZGUpOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICBjYXNlIDE6IHZpc2l0ZWROb2RlcyA9IEJGUyhub2Rlcywgc3RhcnROb2RlLCBlbmROb2RlKTsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHZpc2l0ZWROb2RlcyA9IERGUyhub2Rlcywgc3RhcnROb2RlLCBlbmROb2RlKTsgYnJlYWs7XG4gICAgICBjYXNlIDM6IHZpc2l0ZWROb2RlcyA9IEFTdGFyKG5vZGVzLCBzdGFydE5vZGUsIGVuZE5vZGUpOyBicmVhaztcbiAgICB9XG4gICAgY29uc3Qgc2hvcnRlc3RQYXRoTm9kZXMgPSBnZXRTaG9ydGVzdFBhdGgoZW5kTm9kZSk7XG4gICAgYW5pbWF0ZUFsZ29yaXRobSh2aXNpdGVkTm9kZXMsIHNob3J0ZXN0UGF0aE5vZGVzKTtcbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZU1hemUgPSAoKSA9PiB7XG4gICAgcmVzZXQoKTtcbiAgICBjb25zdCBncmlkID0gW107XG4gICAgXy5lYWNoKG5ldyBBcnJheShST1dTKSwgKF9yb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50Um93ID0gW107XG4gICAgICBfLmVhY2gobmV3IEFycmF5KENPTFMpLCAoX2NvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHJhbmRvbW5lc3MgPSAhIV8ucm91bmQoTWF0aC5yYW5kb20oKSAqKiAyKTtcbiAgICAgICAgaWYgKChyb3dJbmRleCA9PT0gRklOSVNIX1JPVyAmJiBjb2xJbmRleCA9PT0gRklOSVNIX0NPTClcbiAgICAgICAgICB8fCAocm93SW5kZXggPT09IFNUQVJUX1JPVyAmJiBjb2xJbmRleCA9PT0gU1RBUlRfQ09MKSkge1xuICAgICAgICAgIHJhbmRvbW5lc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50Um93LnB1c2goZ2V0Tm9kZShyb3dJbmRleCwgY29sSW5kZXgsIHJhbmRvbW5lc3MpKTtcbiAgICAgIH0pO1xuICAgICAgZ3JpZC5wdXNoKGN1cnJlbnRSb3cpO1xuICAgIH0pO1xuXG4gICAgc2V0Tm9kZXMoZ3JpZCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXROb2RlcyhnZXRHcmlkKCkpO1xuICAgIGdlbmVyYXRlTWF6ZSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8Y2VudGVyPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdmlzdWFsaXplQWxnb3JpdGhtKDApfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgVmlzdWFsaXNlIERpamtzdHJhXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdmlzdWFsaXplQWxnb3JpdGhtKDEpfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgVmlzdWFsaXNlIEJGU1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZpc3VhbGl6ZUFsZ29yaXRobSgyKX1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIFZpc3VhbGlzZSBERlNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2aXN1YWxpemVBbGdvcml0aG0oMyl9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICBWaXN1YWxpc2UgQSpcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZXNldChmYWxzZSl9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICBSZXNldFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlc2V0KHRydWUpfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgUmVzZXQgV2FsbHNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZW5lcmF0ZU1hemUoKX1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIEdlbmVyYXRlIE1hemVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJib2FyZFwiXG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRNb3VzZVByZXNzZWQoZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAge18ubWFwKG5vZGVzLCAocm93LCByb3dJZHgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtyb3dJZHh9PlxuICAgICAgICAgICAgICB7Xy5tYXAocm93LCAobm9kZSwgbm9kZUlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxOb2RlXG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake25vZGVJZHh9fn4ke3Jvd0lkeH1gfVxuICAgICAgICAgICAgICAgICAgbm9kZT17bm9kZX1cbiAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT17KG5vZGUucm93ID09PSBTVEFSVF9ST1cgJiYgbm9kZS5jb2wgPT09IFNUQVJUX0NPTClcbiAgICAgICAgICAgICAgICAgICAgICB8fCAobm9kZS5yb3cgPT09IEZJTklTSF9ST1cgJiYgbm9kZS5jb2wgPT09IEZJTklTSF9DT0wpfVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhfcm93LCBjb2wpID0+IGhhbmRsZU1vdXNlRG93bihfcm93LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoX3JvdywgY29sKSA9PiBoYW5kbGVNb3VzZUVudGVyKF9yb3csIGNvbCl9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IGhhbmRsZU1vdXNlVXAoKX1cbiAgICAgICAgICAgICAgICAgIHNldEVuZE5vZGVzPXtoYW5kbGVFbmROb2Rlc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvY2VudGVyPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgYm9keXtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAuYm9hcmQge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/priyanshbalyan/Documents/maze-runner/components/board.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ })

})
//# sourceMappingURL=index.js.06901714fe707aee51a2.hot-update.js.map