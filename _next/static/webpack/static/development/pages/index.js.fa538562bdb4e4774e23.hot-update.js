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
/* harmony import */ var _components_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/node */ "./components/node.jsx");
/* harmony import */ var _algorithms_dijkstra__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../algorithms/dijkstra */ "./algorithms/dijkstra.js");
/* harmony import */ var _algorithms_BFS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../algorithms/BFS */ "./algorithms/BFS.js");
/* harmony import */ var _algorithms_DFS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../algorithms/DFS */ "./algorithms/DFS.js");
var _jsxFileName = "/Users/priyanshbalyan/Documents/my-app1/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable jsx-a11y/mouse-events-have-key-events */







var ROWS = 30,
    COLS = 40;
var START_ROW = 15,
    START_COL = 3;
var FINISH_ROW = 28,
    FINISH_COL = 35;

var getNode = function getNode(row, col) {
  return {
    row: row,
    col: col,
    isStart: row === START_ROW && col === START_COL,
    isFinish: row === FINISH_ROW && col === FINISH_COL,
    isVisited: false,
    isWall: false,
    distance: Infinity,
    previousNode: null
  };
};

var getGrid = function getGrid() {
  var grid = [];

  lodash__WEBPACK_IMPORTED_MODULE_2__["each"](new Array(ROWS), function (_row, rowIndex) {
    var currentRow = [];

    lodash__WEBPACK_IMPORTED_MODULE_2__["each"](new Array(COLS), function (_col, colIndex) {
      currentRow.push(getNode(rowIndex, colIndex));
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

    if (row === START_ROW && col === START_COL) {
      console.log('enter', row, col);
      START_ROW = row;
      START_COL = col;
      setNodes(getGrid());
      return;
    }

    if (row === FINISH_ROW && col === FINISH_COL) {
      FINISH_ROW = row;
      FINISH_COL = col;
      setNodes(getGrid());
      return;
    }
  };

  var handleMouseEnter = function handleMouseEnter(row, col) {
    if (!mousePressed) return;

    if (row === START_ROW && col === START_COL) {
      console.log('enter', row, col);
      START_ROW = row;
      START_COL = col;
      setNodes(getGrid());
      return;
    }

    if (row === FINISH_ROW && col === FINISH_COL) {
      FINISH_ROW = row;
      FINISH_COL = col;
      setNodes(getGrid());
      return;
    }

    setNodes(toggleWall(nodes, row, col));
  };

  var handleMouseUp = function handleMouseUp() {
    setMousePressed(false);
  };

  var reset = function reset() {
    var resetWall = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (resetWall) {
      setNodes(getGrid());
    }

    lodash__WEBPACK_IMPORTED_MODULE_2__["each"](lodash__WEBPACK_IMPORTED_MODULE_2__["flatten"](nodes), function (node) {
      nodes.isVisited = false;
      nodes.previousNode = null;
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
      if (node.row === START_ROW && node.col === START_COL) return;
      if (node.row === FINISH_ROW && node.col === FINISH_COL) return;

      lodash__WEBPACK_IMPORTED_MODULE_2__["delay"](function () {
        document.getElementById("node-".concat(node.row, "-").concat(node.col)).className += ' visited';
      }, 20 * i);
    });

    lodash__WEBPACK_IMPORTED_MODULE_2__["each"](shortestPathNodes, function (node, j) {
      if (node.row === START_ROW && node.col === START_COL) return;
      if (node.row === FINISH_ROW && node.col === FINISH_COL) return;

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
    }

    var shortestPathNodes = getShortestPath(endNode);
    animateAlgorithm(visitedNodes, shortestPathNodes);
  };

  return __jsx("div", {
    className: "jsx-2542544270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2542544270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Home"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2542544270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })), __jsx("center", {
    className: "jsx-2542544270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return visualizeAlgorithm(0);
    },
    type: "button",
    className: "jsx-2542544270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Visualise Dijkstra"), __jsx("button", {
    onClick: function onClick() {
      return visualizeAlgorithm(1);
    },
    type: "button",
    className: "jsx-2542544270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Visualise BFS"), __jsx("button", {
    onClick: function onClick() {
      return visualizeAlgorithm(2);
    },
    type: "button",
    className: "jsx-2542544270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Visualise DFS"), __jsx("button", {
    onClick: function onClick() {
      return reset(false);
    },
    type: "button",
    className: "jsx-2542544270",
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
    className: "jsx-2542544270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Reset Walls"), __jsx("div", {
    onMouseLeave: function onMouseLeave() {
      return setMousePressed(false);
    },
    className: "jsx-2542544270" + " " + "board",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, lodash__WEBPACK_IMPORTED_MODULE_2__["map"](nodes, function (row, rowIdx) {
    return __jsx("div", {
      key: rowIdx,
      className: "jsx-2542544270",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_2__["map"](row, function (node, nodeIdx) {
      return __jsx(_components_node__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: nodeIdx,
        node: node,
        onMouseDown: function onMouseDown(_row, col) {
          return handleMouseDown(_row, col);
        },
        onMouseEnter: function onMouseEnter(_row, col) {
          return handleMouseEnter(_row, col);
        },
        onMouseUp: function onMouseUp() {
          return handleMouseUp();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      });
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2542544270",
    __self: this
  }, "div.jsx-2542544270{line-height:0;}body.jsx-2542544270{background-color:black;}.board.jsx-2542544270{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcml5YW5zaGJhbHlhbi9Eb2N1bWVudHMvbXktYXBwMS9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcU5TLEFBR3VCLEFBR1MsQUFHZCxTQUNRLEtBTm5CLFNBR0EsR0FJaUIsZUFDSixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9wcml5YW5zaGJhbHlhbi9Eb2N1bWVudHMvbXktYXBwMS9wYWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9tb3VzZS1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTm9kZSBmcm9tICcuLi9jb21wb25lbnRzL25vZGUnO1xuaW1wb3J0IERpamtzdHJhIGZyb20gJy4uL2FsZ29yaXRobXMvZGlqa3N0cmEnO1xuaW1wb3J0IEJGUyBmcm9tICcuLi9hbGdvcml0aG1zL0JGUyc7XG5pbXBvcnQgREZTIGZyb20gJy4uL2FsZ29yaXRobXMvREZTJztcblxuY29uc3QgW1JPV1MsIENPTFNdID0gWzMwLCA0MF07XG5sZXQgW1NUQVJUX1JPVywgU1RBUlRfQ09MXSA9IFsxNSwgM107XG5sZXQgW0ZJTklTSF9ST1csIEZJTklTSF9DT0xdID0gWzI4LCAzNV07XG5cbmNvbnN0IGdldE5vZGUgPSAocm93LCBjb2wpID0+ICh7XG4gIHJvdyxcbiAgY29sLFxuICBpc1N0YXJ0OiByb3cgPT09IFNUQVJUX1JPVyAmJiBjb2wgPT09IFNUQVJUX0NPTCxcbiAgaXNGaW5pc2g6IHJvdyA9PT0gRklOSVNIX1JPVyAmJiBjb2wgPT09IEZJTklTSF9DT0wsXG4gIGlzVmlzaXRlZDogZmFsc2UsXG4gIGlzV2FsbDogZmFsc2UsXG4gIGRpc3RhbmNlOiBJbmZpbml0eSxcbiAgcHJldmlvdXNOb2RlOiBudWxsLFxufSk7XG5cbmNvbnN0IGdldEdyaWQgPSAoKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBbXTtcbiAgXy5lYWNoKG5ldyBBcnJheShST1dTKSwgKF9yb3csIHJvd0luZGV4KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFJvdyA9IFtdO1xuICAgIF8uZWFjaChuZXcgQXJyYXkoQ09MUyksIChfY29sLCBjb2xJbmRleCkgPT4ge1xuICAgICAgY3VycmVudFJvdy5wdXNoKGdldE5vZGUocm93SW5kZXgsIGNvbEluZGV4KSk7XG4gICAgfSk7XG4gICAgZ3JpZC5wdXNoKGN1cnJlbnRSb3cpO1xuICB9KTtcblxuICByZXR1cm4gZ3JpZDtcbn07XG5cbmNvbnN0IHRvZ2dsZVdhbGwgPSAoZ3JpZCwgcm93LCBjb2wpID0+IHtcbiAgY29uc3QgbmV3R3JpZCA9IF8uY2xvbmUoZ3JpZCk7XG4gIGNvbnN0IG5vZGUgPSBuZXdHcmlkW3Jvd11bY29sXTtcbiAgaWYgKCEobm9kZS5pc1N0YXJ0IHx8IG5vZGUuaXNGaW5pc2gpKSB7XG4gICAgY29uc3QgbmV3Tm9kZSA9IF8uYXNzaWduKG5vZGUsIHsgaXNXYWxsOiAhbm9kZS5pc1dhbGwgfSk7XG4gICAgbmV3R3JpZFtyb3ddW2NvbF0gPSBuZXdOb2RlO1xuICB9XG4gIHJldHVybiBuZXdHcmlkO1xufTtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW25vZGVzLCBzZXROb2Rlc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21vdXNlUHJlc3NlZCwgc2V0TW91c2VQcmVzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE5vZGVzKGdldEdyaWQoKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAocm93LCBjb2wpID0+IHtcbiAgICBzZXRNb3VzZVByZXNzZWQodHJ1ZSk7XG4gICAgc2V0Tm9kZXModG9nZ2xlV2FsbChub2Rlcywgcm93LCBjb2wpKTtcbiAgICBpZiAocm93ID09PSBTVEFSVF9ST1cgJiYgY29sID09PSBTVEFSVF9DT0wpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlbnRlcicsIHJvdywgY29sKTtcblxuICAgICAgU1RBUlRfUk9XID0gcm93O1xuICAgICAgU1RBUlRfQ09MID0gY29sO1xuICAgICAgc2V0Tm9kZXMoZ2V0R3JpZCgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJvdyA9PT0gRklOSVNIX1JPVyAmJiBjb2wgPT09IEZJTklTSF9DT0wpIHtcbiAgICAgIEZJTklTSF9ST1cgPSByb3c7XG4gICAgICBGSU5JU0hfQ09MID0gY29sO1xuICAgICAgc2V0Tm9kZXMoZ2V0R3JpZCgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IChyb3csIGNvbCkgPT4ge1xuICAgIGlmICghbW91c2VQcmVzc2VkKSByZXR1cm47XG4gICAgaWYgKHJvdyA9PT0gU1RBUlRfUk9XICYmIGNvbCA9PT0gU1RBUlRfQ09MKSB7XG4gICAgICBjb25zb2xlLmxvZygnZW50ZXInLCByb3csIGNvbCk7XG5cbiAgICAgIFNUQVJUX1JPVyA9IHJvdztcbiAgICAgIFNUQVJUX0NPTCA9IGNvbDtcbiAgICAgIHNldE5vZGVzKGdldEdyaWQoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyb3cgPT09IEZJTklTSF9ST1cgJiYgY29sID09PSBGSU5JU0hfQ09MKSB7XG4gICAgICBGSU5JU0hfUk9XID0gcm93O1xuICAgICAgRklOSVNIX0NPTCA9IGNvbDtcbiAgICAgIHNldE5vZGVzKGdldEdyaWQoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldE5vZGVzKHRvZ2dsZVdhbGwobm9kZXMsIHJvdywgY29sKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICBzZXRNb3VzZVByZXNzZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0ID0gKHJlc2V0V2FsbCA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKHJlc2V0V2FsbCkge1xuICAgICAgc2V0Tm9kZXMoZ2V0R3JpZCgpKTtcbiAgICB9XG4gICAgXy5lYWNoKF8uZmxhdHRlbihub2RlcyksIChub2RlKSA9PiB7XG4gICAgICBub2Rlcy5pc1Zpc2l0ZWQgPSBmYWxzZTtcbiAgICAgIG5vZGVzLnByZXZpb3VzTm9kZSA9IG51bGw7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5vZGUtJHtub2RlLnJvd30tJHtub2RlLmNvbH1gKTtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXy5yZXBsYWNlKGVsZW1lbnQuY2xhc3NOYW1lLCAvdmlzaXRlZC9pLCAnJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXy5yZXBsYWNlKGVsZW1lbnQuY2xhc3NOYW1lLCAvcGF0aC9pLCAnJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hvcnRlc3RQYXRoID0gKGZpbmlzaE5vZGUpID0+IHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IGZpbmlzaE5vZGU7XG4gICAgd2hpbGUgKGN1cnJlbnROb2RlKSB7XG4gICAgICBhcnJheS5wdXNoKGN1cnJlbnROb2RlKTtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucHJldmlvdXNOb2RlO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXkucmV2ZXJzZSgpO1xuICB9O1xuXG4gIGNvbnN0IGFuaW1hdGVBbGdvcml0aG0gPSAodmlzaXRlZE5vZGVzLCBzaG9ydGVzdFBhdGhOb2RlcykgPT4ge1xuICAgIF8uZWFjaCh2aXNpdGVkTm9kZXMsIChub2RlLCBpKSA9PiB7XG4gICAgICBpZiAobm9kZS5yb3cgPT09IFNUQVJUX1JPVyAmJiBub2RlLmNvbCA9PT0gU1RBUlRfQ09MKSByZXR1cm47XG4gICAgICBpZiAobm9kZS5yb3cgPT09IEZJTklTSF9ST1cgJiYgbm9kZS5jb2wgPT09IEZJTklTSF9DT0wpIHJldHVybjtcbiAgICAgIF8uZGVsYXkoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbm9kZS0ke25vZGUucm93fS0ke25vZGUuY29sfWApLmNsYXNzTmFtZSArPSAnIHZpc2l0ZWQnO1xuICAgICAgfSwgMjAgKiBpKTtcbiAgICB9KTtcblxuICAgIF8uZWFjaChzaG9ydGVzdFBhdGhOb2RlcywgKG5vZGUsIGopID0+IHtcbiAgICAgIGlmIChub2RlLnJvdyA9PT0gU1RBUlRfUk9XICYmIG5vZGUuY29sID09PSBTVEFSVF9DT0wpIHJldHVybjtcbiAgICAgIGlmIChub2RlLnJvdyA9PT0gRklOSVNIX1JPVyAmJiBub2RlLmNvbCA9PT0gRklOSVNIX0NPTCkgcmV0dXJuO1xuICAgICAgXy5kZWxheSgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBub2RlLSR7bm9kZS5yb3d9LSR7bm9kZS5jb2x9YCkuY2xhc3NOYW1lICs9ICcgcGF0aCc7XG4gICAgICB9LCB2aXNpdGVkTm9kZXMubGVuZ3RoICogMjAgKyAzMCAqIGopO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHZpc3VhbGl6ZUFsZ29yaXRobSA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3Qgc3RhcnROb2RlID0gbm9kZXNbU1RBUlRfUk9XXVtTVEFSVF9DT0xdO1xuICAgIGNvbnN0IGVuZE5vZGUgPSBub2Rlc1tGSU5JU0hfUk9XXVtGSU5JU0hfQ09MXTtcbiAgICBsZXQgdmlzaXRlZE5vZGVzID0gW107XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIDA6IHZpc2l0ZWROb2RlcyA9IERpamtzdHJhKG5vZGVzLCBzdGFydE5vZGUsIGVuZE5vZGUpOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICBjYXNlIDE6IHZpc2l0ZWROb2RlcyA9IEJGUyhub2Rlcywgc3RhcnROb2RlLCBlbmROb2RlKTsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHZpc2l0ZWROb2RlcyA9IERGUyhub2Rlcywgc3RhcnROb2RlLCBlbmROb2RlKTsgYnJlYWs7XG4gICAgfVxuICAgIGNvbnN0IHNob3J0ZXN0UGF0aE5vZGVzID0gZ2V0U2hvcnRlc3RQYXRoKGVuZE5vZGUpO1xuICAgIGFuaW1hdGVBbGdvcml0aG0odmlzaXRlZE5vZGVzLCBzaG9ydGVzdFBhdGhOb2Rlcyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8Y2VudGVyPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdmlzdWFsaXplQWxnb3JpdGhtKDApfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgVmlzdWFsaXNlIERpamtzdHJhXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdmlzdWFsaXplQWxnb3JpdGhtKDEpfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgVmlzdWFsaXNlIEJGU1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZpc3VhbGl6ZUFsZ29yaXRobSgyKX1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIFZpc3VhbGlzZSBERlNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZXNldChmYWxzZSl9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICBSZXNldFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlc2V0KHRydWUpfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgUmVzZXQgV2FsbHNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJib2FyZFwiXG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRNb3VzZVByZXNzZWQoZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAge18ubWFwKG5vZGVzLCAocm93LCByb3dJZHgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtyb3dJZHh9PlxuICAgICAgICAgICAgICB7Xy5tYXAocm93LCAobm9kZSwgbm9kZUlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxOb2RlXG4gICAgICAgICAgICAgICAgICBrZXk9e25vZGVJZHh9XG4gICAgICAgICAgICAgICAgICBub2RlPXtub2RlfVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhfcm93LCBjb2wpID0+IGhhbmRsZU1vdXNlRG93bihfcm93LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoX3JvdywgY29sKSA9PiBoYW5kbGVNb3VzZUVudGVyKF9yb3csIGNvbCl9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IGhhbmRsZU1vdXNlVXAoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvY2VudGVyPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgZGl2e1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgIH1cbiAgICAgIGJvZHl7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgfVxuICAgICAgLmJvYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/priyanshbalyan/Documents/my-app1/pages/index.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.fa538562bdb4e4774e23.hot-update.js.map