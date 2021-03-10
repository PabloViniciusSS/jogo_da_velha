webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/components/Board.tsx":
/*!****************************************!*\
  !*** ./src/pages/components/Board.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Square */ "./src/pages/components/Square.tsx");






var _jsxFileName = "C:\\Users\\vinic\\Documents\\GitHub\\React\\jogo_da_velha\\src\\pages\\components\\Board.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Board = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Board, _React$Component);

  var _super = _createSuper(Board);

  function Board(props) {
    var _this;

    Object(C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Board);

    _this = _super.call(this, props);
    _this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
    return _this;
  }

  Object(C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Board, [{
    key: "handleClick",
    value: function handleClick(i) {
      var squares = this.state.squares.slice();
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext
      });
    }
  }, {
    key: "renderSquare",
    value: function renderSquare(i) {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Square__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: this.state.squares[i],
        onClick: function onClick() {
          return _this2.handleClick(i);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      var status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "status",
          children: status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "board-row",
          children: [this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "board-row",
          children: [this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "board-row",
          children: [this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this);
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvQm9hcmQudHN4Il0sIm5hbWVzIjpbIkJvYXJkIiwicHJvcHMiLCJzdGF0ZSIsInNxdWFyZXMiLCJBcnJheSIsImZpbGwiLCJ4SXNOZXh0IiwiaSIsInNsaWNlIiwic2V0U3RhdGUiLCJoYW5kbGVDbGljayIsInN0YXR1cyIsInJlbmRlclNxdWFyZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7SUFHcUJBLEs7Ozs7O0FBQ2pCLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFBRUMsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTQyxJQUFULENBQWMsSUFBZCxDQURFO0FBRVhDLGFBQU8sRUFBRTtBQUZFLEtBQWI7QUFGaUI7QUFNbEI7Ozs7Z0NBRVdDLEMsRUFBRztBQUNiLFVBQU1KLE9BQU8sR0FBRyxLQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJLLEtBQW5CLEVBQWhCO0FBQ0FMLGFBQU8sQ0FBQ0ksQ0FBRCxDQUFQLEdBQWEsS0FBS0wsS0FBTCxDQUFXSSxPQUFYLEdBQXFCLEdBQXJCLEdBQTJCLEdBQXhDO0FBQ0EsV0FBS0csUUFBTCxDQUFjO0FBQ1pOLGVBQU8sRUFBRUEsT0FERztBQUVaRyxlQUFPLEVBQUUsQ0FBQyxLQUFLSixLQUFMLENBQVdJO0FBRlQsT0FBZDtBQUtEOzs7aUNBRVlDLEMsRUFBRztBQUFBOztBQUNkLDBCQUNFLHFFQUFDLCtDQUFEO0FBQ0UsYUFBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkksQ0FBbkIsQ0FEVDtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ0csV0FBTCxDQUFpQkgsQ0FBakIsQ0FBTjtBQUFBO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBTUQ7Ozs2QkFFUTtBQUNQLFVBQU1JLE1BQU0sR0FBRyxtQkFBbUIsS0FBS1QsS0FBTCxDQUFXSSxPQUFYLEdBQXFCLEdBQXJCLEdBQTJCLEdBQTlDLENBQWY7QUFFQSwwQkFDRTtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsb0JBQXlCSztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxxQkFDRyxLQUFLQyxZQUFMLENBQWtCLENBQWxCLENBREgsRUFDeUIsS0FBS0EsWUFBTCxDQUFrQixDQUFsQixDQUR6QixFQUMrQyxLQUFLQSxZQUFMLENBQWtCLENBQWxCLENBRC9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUtFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEscUJBQ0csS0FBS0EsWUFBTCxDQUFrQixDQUFsQixDQURILEVBQ3lCLEtBQUtBLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FEekIsRUFDK0MsS0FBS0EsWUFBTCxDQUFrQixDQUFsQixDQUQvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFRRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLHFCQUNHLEtBQUtBLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FESCxFQUN5QixLQUFLQSxZQUFMLENBQWtCLENBQWxCLENBRHpCLEVBQytDLEtBQUtBLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FEL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBY0Q7Ozs7RUE3QzhCQyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNjYTM0MzkwZWM5NDMyM2U5ZWQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL1RhYnVsZWlyby5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFNxdWFyZSAgZnJvbSAnLi9TcXVhcmUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBzcXVhcmVzOiBBcnJheSg5KS5maWxsKG51bGwpLFxyXG4gICAgICAgIHhJc05leHQ6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoYW5kbGVDbGljayhpKSB7XHJcbiAgICAgIGNvbnN0IHNxdWFyZXMgPSB0aGlzLnN0YXRlLnNxdWFyZXMuc2xpY2UoKTtcclxuICAgICAgc3F1YXJlc1tpXSA9IHRoaXMuc3RhdGUueElzTmV4dCA/ICdYJyA6ICdPJztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcclxuICAgICAgICB4SXNOZXh0OiAhdGhpcy5zdGF0ZS54SXNOZXh0LFxyXG4gICAgICBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXJTcXVhcmUoaSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTcXVhcmVcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNxdWFyZXNbaV19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGkpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9ICdOZXh0IHBsYXllcjogJyArICh0aGlzLnN0YXRlLnhJc05leHQgPyAnWCcgOiAnTycpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1c1wiPntzdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMCl9e3RoaXMucmVuZGVyU3F1YXJlKDEpfXt0aGlzLnJlbmRlclNxdWFyZSgyKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDMpfXt0aGlzLnJlbmRlclNxdWFyZSg0KX17dGhpcy5yZW5kZXJTcXVhcmUoNSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg2KX17dGhpcy5yZW5kZXJTcXVhcmUoNyl9e3RoaXMucmVuZGVyU3F1YXJlKDgpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=