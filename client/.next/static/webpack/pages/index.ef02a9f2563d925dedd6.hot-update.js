"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_WavePortal_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/WavePortal.json */ "./src/utils/WavePortal.json");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _utils_checkIfWalletIsConnected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/checkIfWalletIsConnected */ "./src/utils/checkIfWalletIsConnected.js");
/* harmony import */ var _utils_connectWallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/connectWallet */ "./src/utils/connectWallet.js");
/* harmony import */ var _utils_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/wave */ "./src/utils/wave.js");
/* harmony import */ var _utils_getAllWaves__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getAllWaves */ "./src/utils/getAllWaves.js");
/* harmony import */ var _hooks_useMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useMessage */ "./src/hooks/useMessage.js");
/* harmony import */ var _hooks_useEthereum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useEthereum */ "./src/hooks/useEthereum.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Waves__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Waves */ "./src/components/Waves.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Diego Lanes\xE1n\\Desktop\\workspace\\dapps\\my-wave-portal\\client\\src\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

















var Index = function Index() {
  _s();

  var _useEthereum = (0,_hooks_useEthereum__WEBPACK_IMPORTED_MODULE_8__.default)(),
      currentAccount = _useEthereum.currentAccount,
      setCurrentAccount = _useEthereum.setCurrentAccount;

  var _useMessage = (0,_hooks_useMessage__WEBPACK_IMPORTED_MODULE_7__.default)(),
      message = _useMessage.message,
      setMessage = _useMessage.setMessage,
      isDisabled = _useMessage.isDisabled;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      allWaves = _useState[0],
      setAllWaves = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (currentAccount) {
      (0,_utils_getAllWaves__WEBPACK_IMPORTED_MODULE_6__.getAllWaves)(setAllWaves);
    }
  }, [currentAccount]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("title", {
        children: "Web3 Learning"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Flex, {
      direction: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      bg: "gray.800",
      w: "100%",
      minH: "100vh",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_9__.default, {
        currentAccount: currentAccount,
        setCurrentAccount: setCurrentAccount,
        connectWallet: _utils_connectWallet__WEBPACK_IMPORTED_MODULE_4__.connectWallet
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Box, {
        direction: "column",
        align: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Heading, {
          size: "2xl",
          mb: 6,
          children: " \uD83D\uDC68\u200D\uD83D\uDE80\uFE0F "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Heading, {
          as: "h1",
          size: "xl",
          color: "white",
          children: " Web3 Learning "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Heading, {
        as: "h2",
        mt: 6,
        mx: 6,
        color: "white",
        fontSize: "lg",
        fontWeight: "thin",
        textAlign: "center",
        children: "Connect your wallet to discover what others are working on in the Web3 space and share your learning goal! \uD83D\uDE80"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Stack, {
        spacing: 4,
        mt: 12,
        w: {
          base: "80%",
          md: "40%",
          xl: "25%"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Input, {
          placeholder: "Enter your learning goal",
          onChange: function onChange(e) {
            return setMessage(e.target.value);
          },
          bg: "white",
          rounded: "2xl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
          bg: "cyan.400",
          colorScheme: "cyan",
          rounded: "2xl",
          onClick: function onClick() {
            return (0,_utils_wave__WEBPACK_IMPORTED_MODULE_5__.wave)(message);
          },
          isDisabled: isDisabled,
          children: "Share my goal!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Waves__WEBPACK_IMPORTED_MODULE_10__.default, {
        allWaves: allWaves
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_s(Index, "7Axfc8RGP0PhciEol7NEfkHLWOI=", false, function () {
  return [_hooks_useEthereum__WEBPACK_IMPORTED_MODULE_8__.default, _hooks_useMessage__WEBPACK_IMPORTED_MODULE_7__.default];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWYwMmE5ZjI1NjNkOTI1ZGVkZDYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNcUIsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixxQkFBNENILDJEQUFXLEVBQXZEO0FBQUEsTUFBT0ksY0FBUCxnQkFBT0EsY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkIsZ0JBQXVCQSxpQkFBdkI7O0FBQ0Esb0JBQTBDTiwwREFBVSxFQUFwRDtBQUFBLE1BQU9PLE9BQVAsZUFBT0EsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQixlQUFnQkEsVUFBaEI7QUFBQSxNQUE0QkMsVUFBNUIsZUFBNEJBLFVBQTVCOztBQUNBLGtCQUFnQ3hCLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU95QixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBM0IsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR3FCLGNBQUgsRUFBbUI7QUFDakJOLE1BQUFBLCtEQUFXLENBQUNZLFdBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNOLGNBQUQsQ0FKTSxDQUFUO0FBS0Esc0JBQ0U7QUFBQSw0QkFDQSwrREFBQyxrREFBRDtBQUFBLDZCQUNNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBSUEsK0RBQUMsbURBQUQ7QUFDQSxlQUFTLEVBQUMsUUFEVjtBQUVBLGdCQUFVLEVBQUMsUUFGWDtBQUdBLG9CQUFjLEVBQUMsWUFIZjtBQUlBLFFBQUUsRUFBQyxVQUpIO0FBS0EsT0FBQyxFQUFDLE1BTEY7QUFNQSxVQUFJLEVBQUMsT0FOTDtBQUFBLDhCQVFFLCtEQUFDLHVEQUFEO0FBQVEsc0JBQWMsRUFBRUEsY0FBeEI7QUFBd0MseUJBQWlCLEVBQUVDLGlCQUEzRDtBQUE4RSxxQkFBYSxFQUFFVCwrREFBYUE7QUFBMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBU0UsK0RBQUMsa0RBQUQ7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBd0IsYUFBSyxFQUFDLFFBQTlCO0FBQUEsZ0NBQ0UsK0RBQUMsc0RBQUQ7QUFBUyxjQUFJLEVBQUMsS0FBZDtBQUFvQixZQUFFLEVBQUUsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSwrREFBQyxzREFBRDtBQUFTLFlBQUUsRUFBQyxJQUFaO0FBQWlCLGNBQUksRUFBQyxJQUF0QjtBQUEyQixlQUFLLEVBQUMsT0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsZUFjRSwrREFBQyxzREFBRDtBQUFTLFVBQUUsRUFBQyxJQUFaO0FBQWlCLFVBQUUsRUFBRSxDQUFyQjtBQUF3QixVQUFFLEVBQUUsQ0FBNUI7QUFBK0IsYUFBSyxFQUFDLE9BQXJDO0FBQTZDLGdCQUFRLEVBQUMsSUFBdEQ7QUFBMkQsa0JBQVUsRUFBQyxNQUF0RTtBQUE2RSxpQkFBUyxFQUFDLFFBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEYsZUFpQkksK0RBQUMsb0RBQUQ7QUFBTyxlQUFPLEVBQUUsQ0FBaEI7QUFBbUIsVUFBRSxFQUFFLEVBQXZCO0FBQTJCLFNBQUMsRUFBRTtBQUFDZSxVQUFBQSxJQUFJLEVBQUUsS0FBUDtBQUFjQyxVQUFBQSxFQUFFLEVBQUMsS0FBakI7QUFBd0JDLFVBQUFBLEVBQUUsRUFBQztBQUEzQixTQUE5QjtBQUFBLGdDQUNFLCtEQUFDLG9EQUFEO0FBQU8scUJBQVcsRUFBQywwQkFBbkI7QUFBOEMsa0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLG1CQUFPUCxVQUFVLENBQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWpCO0FBQUEsV0FBeEQ7QUFBMkYsWUFBRSxFQUFDLE9BQTlGO0FBQXNHLGlCQUFPLEVBQUM7QUFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVJLCtEQUFDLHFEQUFEO0FBQVEsWUFBRSxFQUFDLFVBQVg7QUFBc0IscUJBQVcsRUFBQyxNQUFsQztBQUF5QyxpQkFBTyxFQUFDLEtBQWpEO0FBQXVELGlCQUFPLEVBQUU7QUFBQSxtQkFBTW5CLGlEQUFJLENBQUNTLE9BQUQsQ0FBVjtBQUFBLFdBQWhFO0FBQXFGLG9CQUFVLEVBQUVFLFVBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCSixlQXVCSSwrREFBQyx1REFBRDtBQUFPLGdCQUFRLEVBQUVDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkE7QUFBQSxrQkFERjtBQWlDRCxDQTNDRDs7R0FBTU47VUFDd0NILHlEQUNGRDs7O0tBRnRDSTtBQTZDTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBjb250cmFjdEFCSSBmcm9tICcuLi91dGlscy9XYXZlUG9ydGFsLmpzb24nXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEJ1dHRvbiwgSW5wdXQsIFN0YWNrLCBWU3RhY2ssIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIH0gZnJvbSAnLi4vdXRpbHMvY2hlY2tJZldhbGxldElzQ29ubmVjdGVkJztcbmltcG9ydCB7IGNvbm5lY3RXYWxsZXQgfSBmcm9tICcuLi91dGlscy9jb25uZWN0V2FsbGV0JztcbmltcG9ydCB7IHdhdmUgfSBmcm9tICcuLi91dGlscy93YXZlJztcbmltcG9ydCB7IGdldEFsbFdhdmVzIH0gZnJvbSAnLi4vdXRpbHMvZ2V0QWxsV2F2ZXMnO1xuaW1wb3J0IHVzZU1lc3NhZ2UgZnJvbSAnLi4vaG9va3MvdXNlTWVzc2FnZSc7XG5pbXBvcnQgdXNlRXRoZXJldW0gZnJvbSAnLi4vaG9va3MvdXNlRXRoZXJldW0nO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgV2F2ZXMgZnJvbSAnLi4vY29tcG9uZW50cy9XYXZlcyc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCB7Y3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50fSA9IHVzZUV0aGVyZXVtKClcbiAgY29uc3Qge21lc3NhZ2UsIHNldE1lc3NhZ2UsIGlzRGlzYWJsZWR9ID0gdXNlTWVzc2FnZSgpXG4gIGNvbnN0IFthbGxXYXZlcywgc2V0QWxsV2F2ZXNdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihjdXJyZW50QWNjb3VudCkge1xuICAgICAgZ2V0QWxsV2F2ZXMoc2V0QWxsV2F2ZXMpXG4gICAgfVxuICB9LCBbY3VycmVudEFjY291bnRdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPldlYjMgTGVhcm5pbmc8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgPEZsZXhcbiAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXG4gICAgYmc9XCJncmF5LjgwMFwiXG4gICAgdz1cIjEwMCVcIlxuICAgIG1pbkg9XCIxMDB2aFwiXG4gICAgPlxuICAgICAgPEhlYWRlciBjdXJyZW50QWNjb3VudD17Y3VycmVudEFjY291bnR9IHNldEN1cnJlbnRBY2NvdW50PXtzZXRDdXJyZW50QWNjb3VudH0gY29ubmVjdFdhbGxldD17Y29ubmVjdFdhbGxldH0vPlxuICAgICAgPEJveCBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8SGVhZGluZyBzaXplPVwiMnhsXCIgbWI9ezZ9PiDwn5Go4oCN8J+agO+4jyA8L0hlYWRpbmc+IFxuICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cInhsXCIgY29sb3I9XCJ3aGl0ZVwiPiBXZWIzIExlYXJuaW5nIDwvSGVhZGluZz5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8SGVhZGluZyBhcz1cImgyXCIgbXQ9ezZ9IG14PXs2fSBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCJ0aGluXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIENvbm5lY3QgeW91ciB3YWxsZXQgdG8gZGlzY292ZXIgd2hhdCBvdGhlcnMgYXJlIHdvcmtpbmcgb24gaW4gdGhlIFdlYjMgc3BhY2UgYW5kIHNoYXJlIHlvdXIgbGVhcm5pbmcgZ29hbCEg8J+agFxuICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17NH0gbXQ9ezEyfSB3PXt7YmFzZTogXCI4MCVcIiwgbWQ6XCI0MCVcIiwgeGw6XCIyNSVcIn19PlxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbGVhcm5pbmcgZ29hbFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IGJnPVwid2hpdGVcIiByb3VuZGVkPVwiMnhsXCIvPlxuICAgICAgICAgICAgPEJ1dHRvbiBiZz1cImN5YW4uNDAwXCIgY29sb3JTY2hlbWU9XCJjeWFuXCIgcm91bmRlZD1cIjJ4bFwiIG9uQ2xpY2s9eygpID0+IHdhdmUobWVzc2FnZSl9IGlzRGlzYWJsZWQ9e2lzRGlzYWJsZWR9PlxuICAgICAgICAgICAgICBTaGFyZSBteSBnb2FsIVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDxXYXZlcyBhbGxXYXZlcz17YWxsV2F2ZXN9Lz5cbiAgICA8L0ZsZXg+XG4gICAgPC8+XG4gIClcbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJldGhlcnMiLCJjb250cmFjdEFCSSIsIkJveCIsIkZsZXgiLCJCdXR0b24iLCJJbnB1dCIsIlN0YWNrIiwiVlN0YWNrIiwiSGVhZGluZyIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImNvbm5lY3RXYWxsZXQiLCJ3YXZlIiwiZ2V0QWxsV2F2ZXMiLCJ1c2VNZXNzYWdlIiwidXNlRXRoZXJldW0iLCJIZWFkZXIiLCJXYXZlcyIsIkluZGV4IiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaXNEaXNhYmxlZCIsImFsbFdhdmVzIiwic2V0QWxsV2F2ZXMiLCJiYXNlIiwibWQiLCJ4bCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=