module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/components/Board.tsx":
/*!****************************************!*\
  !*** ./src/pages/components/Board.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Calculate_Winter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calculate_Winter */ "./src/pages/components/Calculate_Winter.tsx");
/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Square */ "./src/pages/components/Square.tsx");

var _jsxFileName = "C:\\Users\\vinic\\Documents\\GitHub\\React\\jogo_da_velha\\src\\pages\\components\\Board.tsx";



class Board extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    if (Object(_Calculate_Winter__WEBPACK_IMPORTED_MODULE_2__["default"])(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Square__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: this.state.squares[i],
      onClick: () => this.handleClick(i)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this);
  }

  render() {
    const winner = Object(_Calculate_Winter__WEBPACK_IMPORTED_MODULE_2__["default"])(this.state.squares);
    let status;

    if (winner) {
      status = 'Patabéns você venceu' + winner;
    } else {
      status = 'Perdedor' + (this.state.xIsNext ? 'X' : 'O');
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "status",
        children: status
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "board-row",
        children: [this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "board-row",
        children: [this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "board-row",
        children: [this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, this);
  }

}

/***/ }),

/***/ "./src/pages/components/Calculate_Winter.tsx":
/*!***************************************************!*\
  !*** ./src/pages/components/Calculate_Winter.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calculate_Winter; });
function Calculate_Winter(squares) {
  const line = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (let i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

/***/ }),

/***/ "./src/pages/components/Square.tsx":
/*!*****************************************!*\
  !*** ./src/pages/components/Square.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Square; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\vinic\\Documents\\GitHub\\React\\jogo_da_velha\\src\\pages\\components\\Square.tsx";

function Square(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "square",
    onClick: props.onClick,
    children: props.value
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Board */ "./src/pages/components/Board.tsx");

var _jsxFileName = "C:\\Users\\vinic\\Documents\\GitHub\\React\\jogo_da_velha\\src\\pages\\index.tsx";

function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Board__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 4
  }, this);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvQm9hcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb21wb25lbnRzL0NhbGN1bGF0ZV9XaW50ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb21wb25lbnRzL1NxdWFyZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJvYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzcXVhcmVzIiwiQXJyYXkiLCJmaWxsIiwieElzTmV4dCIsImhhbmRsZUNsaWNrIiwiaSIsInNsaWNlIiwiQ2FsY3VsYXRlX1dpbnRlciIsInNldFN0YXRlIiwicmVuZGVyU3F1YXJlIiwicmVuZGVyIiwid2lubmVyIiwic3RhdHVzIiwibGluZSIsImxlbmd0aCIsImEiLCJiIiwiYyIsIlNxdWFyZSIsIm9uQ2xpY2siLCJ2YWx1ZSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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c0I7QUFDL0Isc0JBQ0U7QUFDRSxhQUFTLEVBQUMsUUFEWjtBQUVFLFdBQU8sRUFBRUEsS0FBSyxDQUFDcUIsT0FGakI7QUFBQSxjQUlHckIsS0FBSyxDQUFDc0I7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEw7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCLHNCQUNDO0FBQUEsMkJBQUsscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQUdELEM7Ozs7Ozs7Ozs7O0FDUEQsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL1RhYnVsZWlyby5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENhbGN1bGF0ZV9XaW50ZXIgZnJvbSAnLi9DYWxjdWxhdGVfV2ludGVyJztcclxuaW1wb3J0IFNxdWFyZSAgZnJvbSAnLi9TcXVhcmUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBzcXVhcmVzOiBBcnJheSg5KS5maWxsKG51bGwpLFxyXG4gICAgICAgIHhJc05leHQ6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoYW5kbGVDbGljayhpKSB7XHJcbiAgICAgIGNvbnN0IHNxdWFyZXMgPSB0aGlzLnN0YXRlLnNxdWFyZXMuc2xpY2UoKTtcclxuICAgICAgaWYgKENhbGN1bGF0ZV9XaW50ZXIoc3F1YXJlcykgfHwgc3F1YXJlc1tpXSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBzcXVhcmVzW2ldID0gdGhpcy5zdGF0ZS54SXNOZXh0ID8gJ1gnIDogJ08nO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgIHhJc05leHQ6ICF0aGlzLnN0YXRlLnhJc05leHQsXHJcbiAgICAgIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlclNxdWFyZShpKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNxdWFyZVxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3F1YXJlc1tpXX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soaSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgIGNvbnN0IHdpbm5lciA9IENhbGN1bGF0ZV9XaW50ZXIodGhpcy5zdGF0ZS5zcXVhcmVzKTtcclxuICAgICAgbGV0IHN0YXR1cztcclxuICAgICAgaWYod2lubmVyKXtcclxuICAgICAgICBzdGF0dXMgPSAnUGF0YWLDqW5zIHZvY8OqIHZlbmNldScgKyB3aW5uZXI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdHVzID0gJ1BlcmRlZG9yJyArICh0aGlzLnN0YXRlLnhJc05leHQgPyAnWCcgOiAnTycpO1xyXG4gICAgICB9XHJcblxyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1c1wiPntzdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMCl9e3RoaXMucmVuZGVyU3F1YXJlKDEpfXt0aGlzLnJlbmRlclNxdWFyZSgyKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDMpfXt0aGlzLnJlbmRlclNxdWFyZSg0KX17dGhpcy5yZW5kZXJTcXVhcmUoNSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg2KX17dGhpcy5yZW5kZXJTcXVhcmUoNyl9e3RoaXMucmVuZGVyU3F1YXJlKDgpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvQ2FsY3VsYXRlX1dpbnRlci5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbGN1bGF0ZV9XaW50ZXIoc3F1YXJlcyl7XHJcbiAgICBjb25zdCBsaW5lID0gW1xyXG4gICAgICAgIFswLDEsMl0sXHJcbiAgICAgICAgWzMsNCw1XSxcclxuICAgICAgICBbNiw3LDhdLFxyXG4gICAgICAgIFswLDMsNl0sXHJcbiAgICAgICAgWzEsNCw3XSxcclxuICAgICAgICBbMiw1LDhdLFxyXG4gICAgICAgIFswLDQsOF0sXHJcbiAgICAgICAgWzIsNCw2XSxcclxuICAgIF07XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdFthLGIsY10gPSBsaW5lW2ldO1xyXG4gICAgICAgIGlmKHNxdWFyZXNbYV0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tiXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2NdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzcXVhcmVzW2FdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL1F1YWRyYWRvLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3F1YXJlKHByb3BzKXtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzcXVhcmVcIlxyXG4gICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cHJvcHMudmFsdWV9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBCb2FyZCBmcm9tICcuL2NvbXBvbmVudHMvQm9hcmQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICA8ZGl2PjxCb2FyZCAvPjwvZGl2PlxuICApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==