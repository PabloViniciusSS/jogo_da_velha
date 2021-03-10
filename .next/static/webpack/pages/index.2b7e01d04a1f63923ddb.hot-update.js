webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/components/Tabuleiro.tsx":
/*!********************************************!*\
  !*** ./src/pages/components/Tabuleiro.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabuleiro; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_components_Tabuleiro_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/components/Tabuleiro.module.css */ "./src/styles/components/Tabuleiro.module.css");
/* harmony import */ var _styles_components_Tabuleiro_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Tabuleiro_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Quadrado__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Quadrado */ "./src/pages/components/Quadrado.tsx");






var _jsxFileName = "C:\\Users\\vinic\\Documents\\GitHub\\React\\jogo_da_velha\\src\\pages\\components\\Tabuleiro.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Tabuleiro = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Tabuleiro, _React$Component);

  var _super = _createSuper(Tabuleiro);

  function Tabuleiro(props) {
    var _this;

    Object(C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Tabuleiro);

    _this = _super.call(this, props);
    _this.state = {
      squares: Array(9).fill(null)
    };
    return _this;
  }

  Object(C_Users_vinic_Documents_GitHub_React_jogo_da_velha_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Tabuleiro, [{
    key: "renderQuadrado",
    value: function renderQuadrado(i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Quadrado__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 16
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      var status = 'Proximo Jogador: X';
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_components_Tabuleiro_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.status,
          children: [status, "     "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_components_Tabuleiro_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.mesa,
          children: [this.renderQuadrado(0), this.renderQuadrado(1), this.renderQuadrado(2)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_components_Tabuleiro_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.mesa,
          children: [this.renderQuadrado(3), this.renderQuadrado(4), this.renderQuadrado(5)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_components_Tabuleiro_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.mesa,
          children: [this.renderQuadrado(6), this.renderQuadrado(7), this.renderQuadrado(8)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this);
    }
  }]);

  return Tabuleiro;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvVGFidWxlaXJvLnRzeCJdLCJuYW1lcyI6WyJUYWJ1bGVpcm8iLCJwcm9wcyIsInN0YXRlIiwic3F1YXJlcyIsIkFycmF5IiwiZmlsbCIsImkiLCJzdGF0dXMiLCJzdHlsZXMiLCJtZXNhIiwicmVuZGVyUXVhZHJhZG8iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVxQkEsUzs7Ozs7QUFDakIscUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxhQUFPLEVBQUVDLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0MsSUFBVCxDQUFjLElBQWQ7QUFEQSxLQUFiO0FBRmM7QUFPakI7Ozs7bUNBQ2NDLEMsRUFBRTtBQUNiLDBCQUFPLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNIOzs7NkJBQ087QUFDSixVQUFNQyxNQUFNLEdBQUcsb0JBQWY7QUFFSiwwQkFDSTtBQUFBLGdDQUNBO0FBQUssbUJBQVMsRUFBRUMsOEVBQU0sQ0FBQ0QsTUFBdkI7QUFBQSxxQkFBZ0NBLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVJO0FBQUssbUJBQVMsRUFBRUMsOEVBQU0sQ0FBQ0MsSUFBdkI7QUFBQSxxQkFDSyxLQUFLQyxjQUFMLENBQW9CLENBQXBCLENBREwsRUFFSyxLQUFLQSxjQUFMLENBQW9CLENBQXBCLENBRkwsRUFHSyxLQUFLQSxjQUFMLENBQW9CLENBQXBCLENBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBUUk7QUFBSyxtQkFBUyxFQUFFRiw4RUFBTSxDQUFDQyxJQUF2QjtBQUFBLHFCQUNLLEtBQUtDLGNBQUwsQ0FBb0IsQ0FBcEIsQ0FETCxFQUVLLEtBQUtBLGNBQUwsQ0FBb0IsQ0FBcEIsQ0FGTCxFQUdLLEtBQUtBLGNBQUwsQ0FBb0IsQ0FBcEIsQ0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkosZUFjSTtBQUFLLG1CQUFTLEVBQUVGLDhFQUFNLENBQUNDLElBQXZCO0FBQUEscUJBQ0ssS0FBS0MsY0FBTCxDQUFvQixDQUFwQixDQURMLEVBRUssS0FBS0EsY0FBTCxDQUFvQixDQUFwQixDQUZMLEVBR0ssS0FBS0EsY0FBTCxDQUFvQixDQUFwQixDQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQXlCQzs7OztFQXhDa0NDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmI3ZTAxZDA0YTFmNjM5MjNkZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvVGFidWxlaXJvLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgUXVhZHJhZG8gZnJvbSAnLi9RdWFkcmFkbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJ1bGVpcm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNxdWFyZXM6IEFycmF5KDkpLmZpbGwobnVsbCksXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyUXVhZHJhZG8oaSl7XHJcbiAgICAgICAgcmV0dXJuIDxRdWFkcmFkbyAvPlxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gJ1Byb3hpbW8gSm9nYWRvcjogWCc7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+e3N0YXR1c30gICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc2F9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUXVhZHJhZG8oMCl9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJRdWFkcmFkbygxKX1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclF1YWRyYWRvKDIpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzYX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJRdWFkcmFkbygzKX1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclF1YWRyYWRvKDQpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUXVhZHJhZG8oNSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNhfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclF1YWRyYWRvKDYpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUXVhZHJhZG8oNyl9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJRdWFkcmFkbyg4KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuXHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=