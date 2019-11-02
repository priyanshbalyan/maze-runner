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
var _jsxFileName = "/Users/priyanshbalyan/Documents/my-app1/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable jsx-a11y/mouse-events-have-key-events */






var ROWS = 20,
    COLS = 30;
var START_ROW = 10,
    START_COL = 5;
var FINISH_ROW = 10,
    FINISH_COL = 28;

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
    setNodes(toggleWall(nodes, row, col));
    setMousePressed(true);
  };

  var handleMouseEnter = function handleMouseEnter(row, col) {
    if (!mousePressed) return;
    setNodes(toggleWall(nodes, row, col));
  };

  var handleMouseUp = function handleMouseUp() {
    setMousePressed(false);
  };

  var reset = function reset() {
    setNodes(getGrid());

    lodash__WEBPACK_IMPORTED_MODULE_2__["each"](lodash__WEBPACK_IMPORTED_MODULE_2__["flatten"](nodes), function (node) {
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
    var visitedNodes = Object(_algorithms_dijkstra__WEBPACK_IMPORTED_MODULE_5__["default"])(nodes, startNode, endNode);
    var shortestPathNodes = getShortestPath(endNode);
    animateAlgorithm(visitedNodes, shortestPathNodes);
  };

  return __jsx("div", {
    className: "jsx-385576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-385576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Home"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-385576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), __jsx("button", {
    onClick: function onClick() {
      return visualizeAlgorithm(0);
    },
    type: "button",
    className: "jsx-385576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Dijkstra"), __jsx("button", {
    onClick: function onClick() {
      return visualizeAlgorithm(1);
    },
    type: "button",
    className: "jsx-385576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "BFS"), __jsx("button", {
    onClick: reset,
    type: "button",
    className: "jsx-385576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Reset"), __jsx("center", {
    className: "jsx-385576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    draggable: "false",
    onMouseLeave: function onMouseLeave() {
      return setMousePressed(false);
    },
    className: "jsx-385576" + " " + "board",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, lodash__WEBPACK_IMPORTED_MODULE_2__["map"](nodes, function (row, rowIdx) {
    return __jsx("div", {
      key: rowIdx,
      className: "jsx-385576",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
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
          lineNumber: 151
        },
        __self: this
      });
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "385576",
    __self: this
  }, ".board.jsx-385576{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcml5YW5zaGJhbHlhbi9Eb2N1bWVudHMvbXktYXBwMS9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0tTLEFBR2tCLFNBQ1EsaUJBQ0YsZUFDSixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9wcml5YW5zaGJhbHlhbi9Eb2N1bWVudHMvbXktYXBwMS9wYWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9tb3VzZS1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTm9kZSBmcm9tICcuLi9jb21wb25lbnRzL25vZGUnO1xuaW1wb3J0IERpamtzdHJhIGZyb20gJy4uL2FsZ29yaXRobXMvZGlqa3N0cmEnO1xuaW1wb3J0IEJGUyBmcm9tICcuLi9hbGdvcml0aG1zL0JGUyc7XG5cbmNvbnN0IFtST1dTLCBDT0xTXSA9IFsyMCwgMzBdO1xuY29uc3QgW1NUQVJUX1JPVywgU1RBUlRfQ09MXSA9IFsxMCwgNV07XG5jb25zdCBbRklOSVNIX1JPVywgRklOSVNIX0NPTF0gPSBbMTAsIDI4XTtcblxuY29uc3QgZ2V0Tm9kZSA9IChyb3csIGNvbCkgPT4gKHtcbiAgcm93LFxuICBjb2wsXG4gIGlzU3RhcnQ6IHJvdyA9PT0gU1RBUlRfUk9XICYmIGNvbCA9PT0gU1RBUlRfQ09MLFxuICBpc0ZpbmlzaDogcm93ID09PSBGSU5JU0hfUk9XICYmIGNvbCA9PT0gRklOSVNIX0NPTCxcbiAgaXNWaXNpdGVkOiBmYWxzZSxcbiAgaXNXYWxsOiBmYWxzZSxcbiAgZGlzdGFuY2U6IEluZmluaXR5LFxuICBwcmV2aW91c05vZGU6IG51bGwsXG59KTtcblxuY29uc3QgZ2V0R3JpZCA9ICgpID0+IHtcbiAgY29uc3QgZ3JpZCA9IFtdO1xuICBfLmVhY2gobmV3IEFycmF5KFJPV1MpLCAoX3Jvdywgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50Um93ID0gW107XG4gICAgXy5lYWNoKG5ldyBBcnJheShDT0xTKSwgKF9jb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICBjdXJyZW50Um93LnB1c2goZ2V0Tm9kZShyb3dJbmRleCwgY29sSW5kZXgpKTtcbiAgICB9KTtcbiAgICBncmlkLnB1c2goY3VycmVudFJvdyk7XG4gIH0pO1xuXG4gIHJldHVybiBncmlkO1xufTtcblxuY29uc3QgdG9nZ2xlV2FsbCA9IChncmlkLCByb3csIGNvbCkgPT4ge1xuICBjb25zdCBuZXdHcmlkID0gXy5jbG9uZShncmlkKTtcbiAgY29uc3Qgbm9kZSA9IG5ld0dyaWRbcm93XVtjb2xdO1xuICBpZiAoIShub2RlLmlzU3RhcnQgfHwgbm9kZS5pc0ZpbmlzaCkpIHtcbiAgICBjb25zdCBuZXdOb2RlID0gXy5hc3NpZ24obm9kZSwgeyBpc1dhbGw6ICFub2RlLmlzV2FsbCB9KTtcbiAgICBuZXdHcmlkW3Jvd11bY29sXSA9IG5ld05vZGU7XG4gIH1cbiAgcmV0dXJuIG5ld0dyaWQ7XG59O1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbbm9kZXMsIHNldE5vZGVzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbW91c2VQcmVzc2VkLCBzZXRNb3VzZVByZXNzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Tm9kZXMoZ2V0R3JpZCgpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChyb3csIGNvbCkgPT4ge1xuICAgIHNldE5vZGVzKHRvZ2dsZVdhbGwobm9kZXMsIHJvdywgY29sKSk7XG4gICAgc2V0TW91c2VQcmVzc2VkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAocm93LCBjb2wpID0+IHtcbiAgICBpZiAoIW1vdXNlUHJlc3NlZCkgcmV0dXJuO1xuICAgIHNldE5vZGVzKHRvZ2dsZVdhbGwobm9kZXMsIHJvdywgY29sKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICBzZXRNb3VzZVByZXNzZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIHNldE5vZGVzKGdldEdyaWQoKSk7XG4gICAgXy5lYWNoKF8uZmxhdHRlbihub2RlcyksIChub2RlKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5vZGUtJHtub2RlLnJvd30tJHtub2RlLmNvbH1gKTtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXy5yZXBsYWNlKGVsZW1lbnQuY2xhc3NOYW1lLCAvdmlzaXRlZC9pLCAnJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXy5yZXBsYWNlKGVsZW1lbnQuY2xhc3NOYW1lLCAvcGF0aC9pLCAnJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hvcnRlc3RQYXRoID0gKGZpbmlzaE5vZGUpID0+IHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IGZpbmlzaE5vZGU7XG4gICAgd2hpbGUgKGN1cnJlbnROb2RlKSB7XG4gICAgICBhcnJheS5wdXNoKGN1cnJlbnROb2RlKTtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucHJldmlvdXNOb2RlO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXkucmV2ZXJzZSgpO1xuICB9O1xuXG4gIGNvbnN0IGFuaW1hdGVBbGdvcml0aG0gPSAodmlzaXRlZE5vZGVzLCBzaG9ydGVzdFBhdGhOb2RlcykgPT4ge1xuICAgIF8uZWFjaCh2aXNpdGVkTm9kZXMsIChub2RlLCBpKSA9PiB7XG4gICAgICBpZiAobm9kZS5yb3cgPT09IFNUQVJUX1JPVyAmJiBub2RlLmNvbCA9PT0gU1RBUlRfQ09MKSByZXR1cm47XG4gICAgICBpZiAobm9kZS5yb3cgPT09IEZJTklTSF9ST1cgJiYgbm9kZS5jb2wgPT09IEZJTklTSF9DT0wpIHJldHVybjtcbiAgICAgIF8uZGVsYXkoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbm9kZS0ke25vZGUucm93fS0ke25vZGUuY29sfWApLmNsYXNzTmFtZSArPSAnIHZpc2l0ZWQnO1xuICAgICAgfSwgMjAgKiBpKTtcbiAgICB9KTtcblxuICAgIF8uZWFjaChzaG9ydGVzdFBhdGhOb2RlcywgKG5vZGUsIGopID0+IHtcbiAgICAgIGlmIChub2RlLnJvdyA9PT0gU1RBUlRfUk9XICYmIG5vZGUuY29sID09PSBTVEFSVF9DT0wpIHJldHVybjtcbiAgICAgIGlmIChub2RlLnJvdyA9PT0gRklOSVNIX1JPVyAmJiBub2RlLmNvbCA9PT0gRklOSVNIX0NPTCkgcmV0dXJuO1xuICAgICAgXy5kZWxheSgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBub2RlLSR7bm9kZS5yb3d9LSR7bm9kZS5jb2x9YCkuY2xhc3NOYW1lICs9ICcgcGF0aCc7XG4gICAgICB9LCB2aXNpdGVkTm9kZXMubGVuZ3RoICogMjAgKyAzMCAqIGopO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHZpc3VhbGl6ZUFsZ29yaXRobSA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3Qgc3RhcnROb2RlID0gbm9kZXNbU1RBUlRfUk9XXVtTVEFSVF9DT0xdO1xuICAgIGNvbnN0IGVuZE5vZGUgPSBub2Rlc1tGSU5JU0hfUk9XXVtGSU5JU0hfQ09MXTtcbiAgICBjb25zdCB2aXNpdGVkTm9kZXMgPSBEaWprc3RyYShub2Rlcywgc3RhcnROb2RlLCBlbmROb2RlKTtcbiAgICBjb25zdCBzaG9ydGVzdFBhdGhOb2RlcyA9IGdldFNob3J0ZXN0UGF0aChlbmROb2RlKTtcbiAgICBhbmltYXRlQWxnb3JpdGhtKHZpc2l0ZWROb2Rlcywgc2hvcnRlc3RQYXRoTm9kZXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB2aXN1YWxpemVBbGdvcml0aG0oMCl9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgPlxuICAgICAgICBEaWprc3RyYVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHZpc3VhbGl6ZUFsZ29yaXRobSgxKX1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIEJGU1xuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e3Jlc2V0fVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAgUmVzZXRcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8Y2VudGVyPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9hcmRcIlxuICAgICAgICAgIGRyYWdnYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldE1vdXNlUHJlc3NlZChmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5tYXAobm9kZXMsIChyb3csIHJvd0lkeCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Jvd0lkeH0+XG4gICAgICAgICAgICAgIHtfLm1hcChyb3csIChub2RlLCBub2RlSWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPE5vZGVcbiAgICAgICAgICAgICAgICAgIGtleT17bm9kZUlkeH1cbiAgICAgICAgICAgICAgICAgIG5vZGU9e25vZGV9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KF9yb3csIGNvbCkgPT4gaGFuZGxlTW91c2VEb3duKF9yb3csIGNvbCl9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhfcm93LCBjb2wpID0+IGhhbmRsZU1vdXNlRW50ZXIoX3JvdywgY29sKX1cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gaGFuZGxlTW91c2VVcCgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9jZW50ZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAuYm9hcmQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/priyanshbalyan/Documents/my-app1/pages/index.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.7a54b896dad565b2a034.hot-update.js.map