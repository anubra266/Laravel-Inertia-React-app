(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./resources/js/Pages/Blog/index.js":
/*!******************************************!*\
  !*** ./resources/js/Pages/Blog/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var braft_editor_dist_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! braft-editor/dist/index.css */ "./node_modules/braft-editor/dist/index.css");
/* harmony import */ var braft_editor_dist_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(braft_editor_dist_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var braft_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! braft-editor */ "./node_modules/braft-editor/dist/index.js");
/* harmony import */ var braft_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(braft_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/layout */ "./resources/js/Shared/layout.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Hooks */ "./resources/js/Hooks/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var parse = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");





function Blog() {
  Object(_Hooks__WEBPACK_IMPORTED_MODULE_5__["useTitle"])("Edit Blog");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(braft_editor__WEBPACK_IMPORTED_MODULE_2___default.a.createEditorState("Editor Content")),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1];

  var handleBraftChange = function handleBraftChange(editorState) {
    setEditorState(editorState);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_4___default.a, null, "I will use Dante2 Editor for this", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://michelson.github.io/dante2/#/src-index"
  }, "Documentation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "For Braft editor, check out extensions like table", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/margox/braft-extensions",
    target: "_blank"
  }, "here"), " ", "and using it with antd", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://braft.margox.cn/demos/antd-upload",
    target: "_blank"
  }, "here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(braft_editor__WEBPACK_IMPORTED_MODULE_2___default.a, {
    language: "en",
    value: editorState,
    onChange: handleBraftChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Preview"), parse(editorState.toHTML()))));
}

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

}]);