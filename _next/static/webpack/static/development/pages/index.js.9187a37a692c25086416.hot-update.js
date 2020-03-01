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

var Board = function Board() {
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

  var handleEndNodes = function handleEndNodes(row, col) {
    START_ROW = row;
    START_COL = col;
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

  var trigger = false;

  var handleDragStart = function handleDragStart(row, col) {
    trigger = true;
  };

  var handleDrop = function handleDrop(row, col) {
    if (trigger) {}
  };

  var generateMaze = function generateMaze() {};

  return __jsx("div", {
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Home"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })), __jsx("center", {
    className: "jsx-2452316421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
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
      lineNumber: 159
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
      lineNumber: 165
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
      lineNumber: 171
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
      lineNumber: 177
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
      lineNumber: 183
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
      lineNumber: 189
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
      lineNumber: 195
    },
    __self: this
  }, "Generate Maze"), __jsx("div", {
    onMouseLeave: function onMouseLeave() {
      return setMousePressed(false);
    },
    className: "jsx-2452316421" + " " + "board",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, lodash__WEBPACK_IMPORTED_MODULE_2__["map"](nodes, function (row, rowIdx) {
    return __jsx("div", {
      key: rowIdx,
      className: "jsx-2452316421",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
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
        setEndNodes: handleEndNodes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      });
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2452316421",
    __self: this
  }, "div.jsx-2452316421{line-height:0;}body.jsx-2452316421{background-color:black;}.board.jsx-2452316421{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcml5YW5zaGJhbHlhbi9Eb2N1bWVudHMvbWF6ZS1ydW5uZXIvY29tcG9uZW50cy9ib2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbU9TLEFBR3lCLEFBR1MsQUFHZCxTQUNRLEtBTm5CLFNBR0EsR0FJaUIsZUFDSixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9wcml5YW5zaGJhbHlhbi9Eb2N1bWVudHMvbWF6ZS1ydW5uZXIvY29tcG9uZW50cy9ib2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9tb3VzZS1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IERpamtzdHJhIGZyb20gJy4uL2FsZ29yaXRobXMvZGlqa3N0cmEnO1xuaW1wb3J0IEJGUyBmcm9tICcuLi9hbGdvcml0aG1zL0JGUyc7XG5pbXBvcnQgREZTIGZyb20gJy4uL2FsZ29yaXRobXMvREZTJztcbmltcG9ydCBBU3RhciBmcm9tICcuLi9hbGdvcml0aG1zL0FTdGFyJztcblxuY29uc3QgW1JPV1MsIENPTFNdID0gWzE1LCAyMF07XG5sZXQgW1NUQVJUX1JPVywgU1RBUlRfQ09MXSA9IFswLCAwXTtcbmNvbnN0IFtGSU5JU0hfUk9XLCBGSU5JU0hfQ09MXSA9IFsxNCwgMThdO1xuXG5jb25zdCBnZXROb2RlID0gKHJvdywgY29sLCB3YWxsID0gZmFsc2UpID0+ICh7XG4gIHJvdyxcbiAgY29sLFxuICBpc1N0YXJ0OiByb3cgPT09IFNUQVJUX1JPVyAmJiBjb2wgPT09IFNUQVJUX0NPTCxcbiAgaXNGaW5pc2g6IHJvdyA9PT0gRklOSVNIX1JPVyAmJiBjb2wgPT09IEZJTklTSF9DT0wsXG4gIGlzVmlzaXRlZDogZmFsc2UsXG4gIGlzV2FsbDogd2FsbCxcbiAgZGlzdGFuY2U6IEluZmluaXR5LFxuICBwcmV2aW91c05vZGU6IG51bGwsXG59KTtcblxuY29uc3QgZ2V0R3JpZCA9ICh3YWxscyA9IG51bGwpID0+IHtcbiAgY29uc3QgZ3JpZCA9IFtdO1xuICBfLmVhY2gobmV3IEFycmF5KFJPV1MpLCAoX3Jvdywgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50Um93ID0gW107XG4gICAgXy5lYWNoKG5ldyBBcnJheShDT0xTKSwgKF9jb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgY3VycmVudFJvdy5wdXNoKGdldE5vZGUocm93SW5kZXgsIGNvbEluZGV4LCB3YWxscyA/IHdhbGxzW3Jvd0luZGV4XVtjb2xJbmRleF0uaXNXYWxsIDogZmFsc2UpKTtcbiAgICB9KTtcbiAgICBncmlkLnB1c2goY3VycmVudFJvdyk7XG4gIH0pO1xuXG4gIHJldHVybiBncmlkO1xufTtcblxuY29uc3QgdG9nZ2xlV2FsbCA9IChncmlkLCByb3csIGNvbCkgPT4ge1xuICBjb25zdCBuZXdHcmlkID0gXy5jbG9uZShncmlkKTtcbiAgY29uc3Qgbm9kZSA9IG5ld0dyaWRbcm93XVtjb2xdO1xuICBpZiAoIShub2RlLmlzU3RhcnQgfHwgbm9kZS5pc0ZpbmlzaCkpIHtcbiAgICBjb25zdCBuZXdOb2RlID0gXy5hc3NpZ24obm9kZSwgeyBpc1dhbGw6ICFub2RlLmlzV2FsbCB9KTtcbiAgICBuZXdHcmlkW3Jvd11bY29sXSA9IG5ld05vZGU7XG4gIH1cbiAgcmV0dXJuIG5ld0dyaWQ7XG59O1xuXG5jb25zdCBCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgW25vZGVzLCBzZXROb2Rlc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21vdXNlUHJlc3NlZCwgc2V0TW91c2VQcmVzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE5vZGVzKGdldEdyaWQoKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAocm93LCBjb2wpID0+IHtcbiAgICBzZXRNb3VzZVByZXNzZWQodHJ1ZSk7XG4gICAgc2V0Tm9kZXModG9nZ2xlV2FsbChub2Rlcywgcm93LCBjb2wpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKHJvdywgY29sKSA9PiB7XG4gICAgaWYgKCFtb3VzZVByZXNzZWQpIHJldHVybjtcbiAgICBzZXROb2Rlcyh0b2dnbGVXYWxsKG5vZGVzLCByb3csIGNvbCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgc2V0TW91c2VQcmVzc2VkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCByZXNldCA9IChyZXNldFdhbGwgPSBmYWxzZSkgPT4ge1xuICAgIGlmIChyZXNldFdhbGwpIHtcbiAgICAgIHNldE5vZGVzKGdldEdyaWQoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldE5vZGVzKGdldEdyaWQobm9kZXMpKTtcbiAgICBfLmVhY2goXy5mbGF0dGVuKG5vZGVzKSwgKG5vZGUpID0+IHtcbiAgICAgIG5vZGVzLmlzVmlzaXRlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBub2RlLSR7bm9kZS5yb3d9LSR7bm9kZS5jb2x9YCk7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IF8ucmVwbGFjZShlbGVtZW50LmNsYXNzTmFtZSwgL3Zpc2l0ZWQvaSwgJycpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IF8ucmVwbGFjZShlbGVtZW50LmNsYXNzTmFtZSwgL3BhdGgvaSwgJycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVuZE5vZGVzID0gKHJvdywgY29sKSA9PiB7XG4gICAgU1RBUlRfUk9XID0gcm93O1xuICAgIFNUQVJUX0NPTCA9IGNvbDtcbiAgICByZXNldCgpO1xuICB9O1xuXG4gIGNvbnN0IGdldFNob3J0ZXN0UGF0aCA9IChmaW5pc2hOb2RlKSA9PiB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBsZXQgY3VycmVudE5vZGUgPSBmaW5pc2hOb2RlO1xuICAgIHdoaWxlIChjdXJyZW50Tm9kZSkge1xuICAgICAgYXJyYXkucHVzaChjdXJyZW50Tm9kZSk7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnByZXZpb3VzTm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5LnJldmVyc2UoKTtcbiAgfTtcblxuICBjb25zdCBhbmltYXRlQWxnb3JpdGhtID0gKHZpc2l0ZWROb2Rlcywgc2hvcnRlc3RQYXRoTm9kZXMpID0+IHtcbiAgICBfLmVhY2godmlzaXRlZE5vZGVzLCAobm9kZSwgaSkgPT4ge1xuICAgICAgaWYgKChub2RlLnJvdyA9PT0gU1RBUlRfUk9XICYmIG5vZGUuY29sID09PSBTVEFSVF9DT0wpXG4gICAgICAgIHx8IChub2RlLnJvdyA9PT0gRklOSVNIX1JPVyAmJiBub2RlLmNvbCA9PT0gRklOSVNIX0NPTCkpIHJldHVybjtcbiAgICAgIF8uZGVsYXkoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbm9kZS0ke25vZGUucm93fS0ke25vZGUuY29sfWApLmNsYXNzTmFtZSArPSAnIHZpc2l0ZWQnO1xuICAgICAgfSwgMjAgKiBpKTtcbiAgICB9KTtcblxuICAgIF8uZWFjaChzaG9ydGVzdFBhdGhOb2RlcywgKG5vZGUsIGopID0+IHtcbiAgICAgIGlmICgobm9kZS5yb3cgPT09IFNUQVJUX1JPVyAmJiBub2RlLmNvbCA9PT0gU1RBUlRfQ09MKVxuICAgICAgICB8fCAobm9kZS5yb3cgPT09IEZJTklTSF9ST1cgJiYgbm9kZS5jb2wgPT09IEZJTklTSF9DT0wpKSByZXR1cm47XG4gICAgICBfLmRlbGF5KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5vZGUtJHtub2RlLnJvd30tJHtub2RlLmNvbH1gKS5jbGFzc05hbWUgKz0gJyBwYXRoJztcbiAgICAgIH0sIHZpc2l0ZWROb2Rlcy5sZW5ndGggKiAyMCArIDMwICogaik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdmlzdWFsaXplQWxnb3JpdGhtID0gKHR5cGUpID0+IHtcbiAgICBjb25zdCBzdGFydE5vZGUgPSBub2Rlc1tTVEFSVF9ST1ddW1NUQVJUX0NPTF07XG4gICAgY29uc3QgZW5kTm9kZSA9IG5vZGVzW0ZJTklTSF9ST1ddW0ZJTklTSF9DT0xdO1xuICAgIGxldCB2aXNpdGVkTm9kZXMgPSBbXTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgMDogdmlzaXRlZE5vZGVzID0gRGlqa3N0cmEobm9kZXMsIHN0YXJ0Tm9kZSwgZW5kTm9kZSk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIGNhc2UgMTogdmlzaXRlZE5vZGVzID0gQkZTKG5vZGVzLCBzdGFydE5vZGUsIGVuZE5vZGUpOyBicmVhaztcbiAgICAgIGNhc2UgMjogdmlzaXRlZE5vZGVzID0gREZTKG5vZGVzLCBzdGFydE5vZGUsIGVuZE5vZGUpOyBicmVhaztcbiAgICAgIGNhc2UgMzogdmlzaXRlZE5vZGVzID0gQVN0YXIobm9kZXMsIHN0YXJ0Tm9kZSwgZW5kTm9kZSk7IGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCBzaG9ydGVzdFBhdGhOb2RlcyA9IGdldFNob3J0ZXN0UGF0aChlbmROb2RlKTtcbiAgICBhbmltYXRlQWxnb3JpdGhtKHZpc2l0ZWROb2Rlcywgc2hvcnRlc3RQYXRoTm9kZXMpO1xuICB9O1xuXG4gIGxldCB0cmlnZ2VyID0gZmFsc2U7XG4gIGNvbnN0IGhhbmRsZURyYWdTdGFydCA9IChyb3csIGNvbCkgPT4ge1xuICAgIHRyaWdnZXIgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyb3AgPSAocm93LCBjb2wpID0+IHtcbiAgICBpZiAodHJpZ2dlcikge1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZU1hemUgPSAoKSA9PiB7XG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxjZW50ZXI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2aXN1YWxpemVBbGdvcml0aG0oMCl9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICBWaXN1YWxpc2UgRGlqa3N0cmFcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2aXN1YWxpemVBbGdvcml0aG0oMSl9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICBWaXN1YWxpc2UgQkZTXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdmlzdWFsaXplQWxnb3JpdGhtKDIpfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgVmlzdWFsaXNlIERGU1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZpc3VhbGl6ZUFsZ29yaXRobSgzKX1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIFZpc3VhbGlzZSBBKlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlc2V0KGZhbHNlKX1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIFJlc2V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcmVzZXQodHJ1ZSl9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICBSZXNldCBXYWxsc1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdlbmVyYXRlTWF6ZSgpfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgR2VuZXJhdGUgTWF6ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvYXJkXCJcbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldE1vdXNlUHJlc3NlZChmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5tYXAobm9kZXMsIChyb3csIHJvd0lkeCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Jvd0lkeH0+XG4gICAgICAgICAgICAgIHtfLm1hcChyb3csIChub2RlLCBub2RlSWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPE5vZGVcbiAgICAgICAgICAgICAgICAgIGtleT17YCR7bm9kZUlkeH1+fiR7cm93SWR4fWB9XG4gICAgICAgICAgICAgICAgICBub2RlPXtub2RlfVxuICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPXsobm9kZS5yb3cgPT09IFNUQVJUX1JPVyAmJiBub2RlLmNvbCA9PT0gU1RBUlRfQ09MKVxuICAgICAgICAgICAgICAgICAgICAgIHx8IChub2RlLnJvdyA9PT0gRklOSVNIX1JPVyAmJiBub2RlLmNvbCA9PT0gRklOSVNIX0NPTCl9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KF9yb3csIGNvbCkgPT4gaGFuZGxlTW91c2VEb3duKF9yb3csIGNvbCl9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhfcm93LCBjb2wpID0+IGhhbmRsZU1vdXNlRW50ZXIoX3JvdywgY29sKX1cbiAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoX3JvdywgY29sKSA9PiBoYW5kbGVEcmFnU3RhcnQoX3JvdywgY29sKX1cbiAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XG4gICAgICAgICAgICAgICAgICBvbkRyb3A9eyhfcm93LCBjb2wpID0+IGhhbmRsZURyb3Aocm93LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiBoYW5kbGVNb3VzZVVwKCl9XG4gICAgICAgICAgICAgICAgICBzZXRFbmROb2Rlcz17aGFuZGxlRW5kTm9kZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2NlbnRlcj5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIGJvZHl7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmJvYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xuIl19 */\n/*@ sourceURL=/Users/priyanshbalyan/Documents/maze-runner/components/board.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ })

})
//# sourceMappingURL=index.js.9187a37a692c25086416.hot-update.js.map