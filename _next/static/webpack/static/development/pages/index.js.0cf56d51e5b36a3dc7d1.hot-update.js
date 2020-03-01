webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/buttonbar.jsx":
/*!**********************************!*\
  !*** ./components/buttonbar.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/priyanshbalyan/Documents/maze-runner/components/buttonbar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ButtonBar = function ButtonBar(props) {
  var visualizeAlgorithm = props.visualizeAlgorithm,
      reset = props.reset,
      generateMaze = props.generateMaze;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return visualizeAlgorithm(0);
    },
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Visualise Dijkstra"), __jsx("button", {
    onClick: function onClick() {
      return visualizeAlgorithm(1);
    },
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Visualise BFS"), __jsx("button", {
    onClick: function onClick() {
      return visualizeAlgorithm(2);
    },
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Visualise DFS"), __jsx("button", {
    onClick: function onClick() {
      return reset(false);
    },
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Reset"), __jsx("button", {
    onClick: function onClick() {
      return reset(true);
    },
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Reset Walls"), __jsx("button", {
    onClick: function onClick() {
      return generateMaze();
    },
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Generate Maze"));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonBar);

/***/ })

})
//# sourceMappingURL=index.js.0cf56d51e5b36a3dc7d1.hot-update.js.map