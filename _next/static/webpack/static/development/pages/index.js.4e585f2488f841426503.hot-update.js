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
    var resetWall = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (resetWall) {
      setNodes(getGrid());
    }

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
    className: "jsx-385576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-385576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Home"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-385576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
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
      lineNumber: 133
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
      lineNumber: 139
    },
    __self: this
  }, "BFS"), __jsx("button", {
    onClick: function onClick() {
      return visualizeAlgorithm(2);
    },
    type: "button",
    className: "jsx-385576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "DFS"), __jsx("button", {
    onClick: function onClick() {
      return reset(false);
    },
    type: "button",
    className: "jsx-385576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Reset"), __jsx("button", {
    onClick: function onClick() {
      return reset(true);
    },
    type: "button",
    className: "jsx-385576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Reset Walls"), __jsx("center", {
    className: "jsx-385576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
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
      lineNumber: 165
    },
    __self: this
  }, lodash__WEBPACK_IMPORTED_MODULE_2__["map"](nodes, function (row, rowIdx) {
    return __jsx("div", {
      key: rowIdx,
      className: "jsx-385576",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
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
          lineNumber: 173
        },
        __self: this
      });
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "385576",
    __self: this
  }, ".board.jsx-385576{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcml5YW5zaGJhbHlhbi9Eb2N1bWVudHMvbXktYXBwMS9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMExTLEFBR2tCLFNBQ1EsaUJBQ0YsZUFDSixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9wcml5YW5zaGJhbHlhbi9Eb2N1bWVudHMvbXktYXBwMS9wYWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9tb3VzZS1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTm9kZSBmcm9tICcuLi9jb21wb25lbnRzL25vZGUnO1xuaW1wb3J0IERpamtzdHJhIGZyb20gJy4uL2FsZ29yaXRobXMvZGlqa3N0cmEnO1xuaW1wb3J0IEJGUyBmcm9tICcuLi9hbGdvcml0aG1zL0JGUyc7XG5pbXBvcnQgREZTIGZyb20gJy4uL2FsZ29yaXRobXMvREZTJztcblxuY29uc3QgW1JPV1MsIENPTFNdID0gWzIwLCAzMF07XG5jb25zdCBbU1RBUlRfUk9XLCBTVEFSVF9DT0xdID0gWzEwLCA1XTtcbmNvbnN0IFtGSU5JU0hfUk9XLCBGSU5JU0hfQ09MXSA9IFsxMCwgMjhdO1xuXG5jb25zdCBnZXROb2RlID0gKHJvdywgY29sKSA9PiAoe1xuICByb3csXG4gIGNvbCxcbiAgaXNTdGFydDogcm93ID09PSBTVEFSVF9ST1cgJiYgY29sID09PSBTVEFSVF9DT0wsXG4gIGlzRmluaXNoOiByb3cgPT09IEZJTklTSF9ST1cgJiYgY29sID09PSBGSU5JU0hfQ09MLFxuICBpc1Zpc2l0ZWQ6IGZhbHNlLFxuICBpc1dhbGw6IGZhbHNlLFxuICBkaXN0YW5jZTogSW5maW5pdHksXG4gIHByZXZpb3VzTm9kZTogbnVsbCxcbn0pO1xuXG5jb25zdCBnZXRHcmlkID0gKCkgPT4ge1xuICBjb25zdCBncmlkID0gW107XG4gIF8uZWFjaChuZXcgQXJyYXkoUk9XUyksIChfcm93LCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRSb3cgPSBbXTtcbiAgICBfLmVhY2gobmV3IEFycmF5KENPTFMpLCAoX2NvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgIGN1cnJlbnRSb3cucHVzaChnZXROb2RlKHJvd0luZGV4LCBjb2xJbmRleCkpO1xuICAgIH0pO1xuICAgIGdyaWQucHVzaChjdXJyZW50Um93KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5jb25zdCB0b2dnbGVXYWxsID0gKGdyaWQsIHJvdywgY29sKSA9PiB7XG4gIGNvbnN0IG5ld0dyaWQgPSBfLmNsb25lKGdyaWQpO1xuICBjb25zdCBub2RlID0gbmV3R3JpZFtyb3ddW2NvbF07XG4gIGlmICghKG5vZGUuaXNTdGFydCB8fCBub2RlLmlzRmluaXNoKSkge1xuICAgIGNvbnN0IG5ld05vZGUgPSBfLmFzc2lnbihub2RlLCB7IGlzV2FsbDogIW5vZGUuaXNXYWxsIH0pO1xuICAgIG5ld0dyaWRbcm93XVtjb2xdID0gbmV3Tm9kZTtcbiAgfVxuICByZXR1cm4gbmV3R3JpZDtcbn07XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtub2Rlcywgc2V0Tm9kZXNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttb3VzZVByZXNzZWQsIHNldE1vdXNlUHJlc3NlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXROb2RlcyhnZXRHcmlkKCkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKHJvdywgY29sKSA9PiB7XG4gICAgc2V0Tm9kZXModG9nZ2xlV2FsbChub2Rlcywgcm93LCBjb2wpKTtcbiAgICBzZXRNb3VzZVByZXNzZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IChyb3csIGNvbCkgPT4ge1xuICAgIGlmICghbW91c2VQcmVzc2VkKSByZXR1cm47XG4gICAgc2V0Tm9kZXModG9nZ2xlV2FsbChub2Rlcywgcm93LCBjb2wpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICAgIHNldE1vdXNlUHJlc3NlZChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXQgPSAocmVzZXRXYWxsID0gZmFsc2UpID0+IHtcbiAgICBpZiAocmVzZXRXYWxsKSB7XG4gICAgICBzZXROb2RlcyhnZXRHcmlkKCkpO1xuICAgIH1cbiAgICBfLmVhY2goXy5mbGF0dGVuKG5vZGVzKSwgKG5vZGUpID0+IHtcbiAgICAgIG5vZGVzLmlzVmlzaXRlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBub2RlLSR7bm9kZS5yb3d9LSR7bm9kZS5jb2x9YCk7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IF8ucmVwbGFjZShlbGVtZW50LmNsYXNzTmFtZSwgL3Zpc2l0ZWQvaSwgJycpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IF8ucmVwbGFjZShlbGVtZW50LmNsYXNzTmFtZSwgL3BhdGgvaSwgJycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFNob3J0ZXN0UGF0aCA9IChmaW5pc2hOb2RlKSA9PiB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBsZXQgY3VycmVudE5vZGUgPSBmaW5pc2hOb2RlO1xuICAgIHdoaWxlIChjdXJyZW50Tm9kZSkge1xuICAgICAgYXJyYXkucHVzaChjdXJyZW50Tm9kZSk7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnByZXZpb3VzTm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5LnJldmVyc2UoKTtcbiAgfTtcblxuICBjb25zdCBhbmltYXRlQWxnb3JpdGhtID0gKHZpc2l0ZWROb2Rlcywgc2hvcnRlc3RQYXRoTm9kZXMpID0+IHtcbiAgICBfLmVhY2godmlzaXRlZE5vZGVzLCAobm9kZSwgaSkgPT4ge1xuICAgICAgaWYgKG5vZGUucm93ID09PSBTVEFSVF9ST1cgJiYgbm9kZS5jb2wgPT09IFNUQVJUX0NPTCkgcmV0dXJuO1xuICAgICAgaWYgKG5vZGUucm93ID09PSBGSU5JU0hfUk9XICYmIG5vZGUuY29sID09PSBGSU5JU0hfQ09MKSByZXR1cm47XG4gICAgICBfLmRlbGF5KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5vZGUtJHtub2RlLnJvd30tJHtub2RlLmNvbH1gKS5jbGFzc05hbWUgKz0gJyB2aXNpdGVkJztcbiAgICAgIH0sIDIwICogaSk7XG4gICAgfSk7XG5cbiAgICBfLmVhY2goc2hvcnRlc3RQYXRoTm9kZXMsIChub2RlLCBqKSA9PiB7XG4gICAgICBpZiAobm9kZS5yb3cgPT09IFNUQVJUX1JPVyAmJiBub2RlLmNvbCA9PT0gU1RBUlRfQ09MKSByZXR1cm47XG4gICAgICBpZiAobm9kZS5yb3cgPT09IEZJTklTSF9ST1cgJiYgbm9kZS5jb2wgPT09IEZJTklTSF9DT0wpIHJldHVybjtcbiAgICAgIF8uZGVsYXkoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbm9kZS0ke25vZGUucm93fS0ke25vZGUuY29sfWApLmNsYXNzTmFtZSArPSAnIHBhdGgnO1xuICAgICAgfSwgdmlzaXRlZE5vZGVzLmxlbmd0aCAqIDIwICsgMzAgKiBqKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB2aXN1YWxpemVBbGdvcml0aG0gPSAodHlwZSkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0Tm9kZSA9IG5vZGVzW1NUQVJUX1JPV11bU1RBUlRfQ09MXTtcbiAgICBjb25zdCBlbmROb2RlID0gbm9kZXNbRklOSVNIX1JPV11bRklOSVNIX0NPTF07XG4gICAgbGV0IHZpc2l0ZWROb2RlcyA9IFtdO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAwOiB2aXNpdGVkTm9kZXMgPSBEaWprc3RyYShub2Rlcywgc3RhcnROb2RlLCBlbmROb2RlKTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgY2FzZSAxOiB2aXNpdGVkTm9kZXMgPSBCRlMobm9kZXMsIHN0YXJ0Tm9kZSwgZW5kTm9kZSk7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB2aXNpdGVkTm9kZXMgPSBERlMobm9kZXMsIHN0YXJ0Tm9kZSwgZW5kTm9kZSk7IGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCBzaG9ydGVzdFBhdGhOb2RlcyA9IGdldFNob3J0ZXN0UGF0aChlbmROb2RlKTtcbiAgICBhbmltYXRlQWxnb3JpdGhtKHZpc2l0ZWROb2Rlcywgc2hvcnRlc3RQYXRoTm9kZXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB2aXN1YWxpemVBbGdvcml0aG0oMCl9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgPlxuICAgICAgICBEaWprc3RyYVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHZpc3VhbGl6ZUFsZ29yaXRobSgxKX1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIEJGU1xuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHZpc3VhbGl6ZUFsZ29yaXRobSgyKX1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIERGU1xuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJlc2V0KGZhbHNlKX1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIFJlc2V0XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4gcmVzZXQodHJ1ZSl9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgPlxuICAgICAgICBSZXNldCBXYWxsc1xuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxjZW50ZXI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJib2FyZFwiXG4gICAgICAgICAgZHJhZ2dhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0TW91c2VQcmVzc2VkKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm1hcChub2RlcywgKHJvdywgcm93SWR4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cm93SWR4fT5cbiAgICAgICAgICAgICAge18ubWFwKHJvdywgKG5vZGUsIG5vZGVJZHgpID0+IChcbiAgICAgICAgICAgICAgICA8Tm9kZVxuICAgICAgICAgICAgICAgICAga2V5PXtub2RlSWR4fVxuICAgICAgICAgICAgICAgICAgbm9kZT17bm9kZX1cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoX3JvdywgY29sKSA9PiBoYW5kbGVNb3VzZURvd24oX3JvdywgY29sKX1cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KF9yb3csIGNvbCkgPT4gaGFuZGxlTW91c2VFbnRlcihfcm93LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiBoYW5kbGVNb3VzZVVwKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2NlbnRlcj5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgIC5ib2FyZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/priyanshbalyan/Documents/my-app1/pages/index.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4e585f2488f841426503.hot-update.js.map