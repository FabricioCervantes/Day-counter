"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/EditModal.jsx":
/*!**********************************!*\
  !*** ./components/EditModal.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flowbite-react */ \"(app-client)/./node_modules/flowbite-react/lib/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction EditModal() {\n    _s();\n    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const props = {\n        openModal,\n        setOpenModal\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                className: \"bg-red-500\",\n                onClick: ()=>props.setOpenModal(\"form-elements\"),\n                children: \"Edit\"\n            }, void 0, false, {\n                fileName: \"/home/fabricio/Coding/NextJs/Day-counter/components/EditModal.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n                show: props.openModal === \"form-elements\",\n                size: \"md\",\n                popup: true,\n                onClose: ()=>props.setOpenModal(undefined),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {}, void 0, false, {\n                        fileName: \"/home/fabricio/Coding/NextJs/Day-counter/components/EditModal.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-xl font-medium text-gray-900 dark:text-white\",\n                                    children: \"Edit date\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fabricio/Coding/NextJs/Day-counter/components/EditModal.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mb-2 block\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                                                htmlFor: \"password\",\n                                                value: \"New Date\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/fabricio/Coding/NextJs/Day-counter/components/EditModal.jsx\",\n                                                lineNumber: 31,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/fabricio/Coding/NextJs/Day-counter/components/EditModal.jsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.TextInput, {\n                                            id: \"password\",\n                                            type: \"password\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/home/fabricio/Coding/NextJs/Day-counter/components/EditModal.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/fabricio/Coding/NextJs/Day-counter/components/EditModal.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        children: \"Log in to your account\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fabricio/Coding/NextJs/Day-counter/components/EditModal.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/fabricio/Coding/NextJs/Day-counter/components/EditModal.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fabricio/Coding/NextJs/Day-counter/components/EditModal.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/fabricio/Coding/NextJs/Day-counter/components/EditModal.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fabricio/Coding/NextJs/Day-counter/components/EditModal.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(EditModal, \"umuRih0hgahBGIwQhjFR84VyCAU=\");\n_c = EditModal;\nvar _c;\n$RefreshReg$(_c, \"EditModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9FZGl0TW9kYWwuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDd0M7QUFDbUM7QUFFNUQsU0FBU087O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUE7SUFFMUMsTUFBTVMsUUFBUTtRQUFFRjtRQUFXQztJQUFhO0lBQ3hDLHFCQUNFOzswQkFDRSw4REFBQ1Asa0RBQU1BO2dCQUNMUyxXQUFVO2dCQUNWQyxTQUFTLElBQU1GLE1BQU1ELGFBQWE7MEJBQ25DOzs7Ozs7MEJBR0QsOERBQUNKLGlEQUFLQTtnQkFDSlEsTUFBTUgsTUFBTUYsY0FBYztnQkFDMUJNLE1BQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLFNBQVMsSUFBTU4sTUFBTUQsYUFBYVE7O2tDQUVsQyw4REFBQ1osaURBQUtBLENBQUNhOzs7OztrQ0FDUCw4REFBQ2IsaURBQUtBLENBQUNjO2tDQUNMLDRFQUFDQzs0QkFBSVQsV0FBVTs7OENBQ2IsOERBQUNVO29DQUFHVixXQUFVOzhDQUFvRDs7Ozs7OzhDQUdsRSw4REFBQ1M7O3NEQUNDLDhEQUFDQTs0Q0FBSVQsV0FBVTtzREFDYiw0RUFBQ1AsaURBQUtBO2dEQUFDa0IsU0FBUTtnREFBV0MsT0FBTTs7Ozs7Ozs7Ozs7c0RBRWxDLDhEQUFDakIscURBQVNBOzRDQUFDa0IsSUFBRzs0Q0FBV0MsTUFBSzs0Q0FBV0MsUUFBUTs7Ozs7Ozs7Ozs7OzhDQUduRCw4REFBQ047b0NBQUlULFdBQVU7OENBQ2IsNEVBQUNULGtEQUFNQTtrREFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3RCO0dBdkN3Qks7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0TW9kYWwuanN4P2NlZjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIExhYmVsLCBNb2RhbCwgVGV4dElucHV0IH0gZnJvbSBcImZsb3diaXRlLXJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRNb2RhbCgpIHtcbiAgY29uc3QgW29wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgcHJvcHMgPSB7IG9wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldE9wZW5Nb2RhbChcImZvcm0tZWxlbWVudHNcIil9XG4gICAgICA+XG4gICAgICAgIEVkaXRcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPE1vZGFsXG4gICAgICAgIHNob3c9e3Byb3BzLm9wZW5Nb2RhbCA9PT0gXCJmb3JtLWVsZW1lbnRzXCJ9XG4gICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgIHBvcHVwXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHByb3BzLnNldE9wZW5Nb2RhbCh1bmRlZmluZWQpfVxuICAgICAgPlxuICAgICAgICA8TW9kYWwuSGVhZGVyIC8+XG4gICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBFZGl0IGRhdGVcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgdmFsdWU9XCJOZXcgRGF0ZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8VGV4dElucHV0IGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24+TG9nIGluIHRvIHlvdXIgYWNjb3VudDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiTGFiZWwiLCJNb2RhbCIsIlRleHRJbnB1dCIsIkVkaXRNb2RhbCIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsInByb3BzIiwiY2xhc3NOYW1lIiwib25DbGljayIsInNob3ciLCJzaXplIiwicG9wdXAiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwiSGVhZGVyIiwiQm9keSIsImRpdiIsImgzIiwiaHRtbEZvciIsInZhbHVlIiwiaWQiLCJ0eXBlIiwicmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/EditModal.jsx\n"));

/***/ })

});