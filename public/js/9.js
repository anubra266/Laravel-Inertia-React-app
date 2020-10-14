(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/Pages/Propsy/index.js":
/*!********************************************!*\
  !*** ./resources/js/Pages/Propsy/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Propsy; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Hooks */ "./resources/js/Hooks/index.js");
/* harmony import */ var _Shared_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/layout */ "./resources/js/Shared/layout.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _userstore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userstore */ "./resources/js/Pages/Propsy/userstore.js");





function Propsy() {
  Object(_Hooks__WEBPACK_IMPORTED_MODULE_1__["useTitle"])("Propsy");
  var user = {
    name: "Abraham",
    age: 19
  };
  var store = {
    user: user
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border"
  }, "I'm an Propsy component, trying to avoid Prop Drilling.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "He's ", user.name, ", aged ", user.age, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userstore__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    value: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Child, null)))));
}

var Child = function Child() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " border card-body"
  }, "Propsy Child", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GrandChild, null));
};

var GrandChild = function GrandChild() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " border card-body"
  }, "Propsy GrandChild", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GreatGrandChild, null));
};

var GreatGrandChild = function GreatGrandChild() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " border card-body"
  }, "Propsy GreatGrandChild", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GreatGreatGrandChild, null));
};

var GreatGreatGrandChild = function GreatGreatGrandChild() {
  var store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_userstore__WEBPACK_IMPORTED_MODULE_4__["Context"]);
  var user = store.user;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " border card-body"
  }, "Propsy GreatGreatGrandChild", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "My GreatGreatGrandFather is ", user.name, " aged ", user.age));
};

/***/ }),

/***/ "./resources/js/Pages/Propsy/userstore.js":
/*!************************************************!*\
  !*** ./resources/js/Pages/Propsy/userstore.js ***!
  \************************************************/
/*! exports provided: Context, Provider, Consumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var Provider = Context.Provider;
var Consumer = Context.Consumer;

/***/ })

}]);