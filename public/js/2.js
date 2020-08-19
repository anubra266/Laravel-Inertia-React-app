(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/Helpers/PageLoad.js":
/*!******************************************!*\
  !*** ./resources/js/Helpers/PageLoad.js ***!
  \******************************************/
/*! exports provided: loadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPage", function() { return loadPage; });
/**
 * Starts page loader on every page navigation
 * @param {object} pageLoader the progress bar at top of the page
 */
function loadPage(pageLoader) {
  // Select all links
  var allLinks = document.links; // Bind the event handler to each link individually

  for (var i = 0, n = allLinks.length; i < n; i++) {
    allLinks[i].onclick = function () {
      pageLoader && pageLoader.current.continuousStart();
    };
  }
}

/***/ }),

/***/ "./resources/js/Pages/About/index.js":
/*!*******************************************!*\
  !*** ./resources/js/Pages/About/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _Shared_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Navbar */ "./resources/js/Shared/Navbar.js");




function About() {
  var pageLoader = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    title: "About"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageLoader: pageLoader
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, "I'm an About component!")))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./resources/js/Shared/Navbar.js":
/*!***************************************!*\
  !*** ./resources/js/Shared/Navbar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-top-loading-bar */ "./node_modules/react-top-loading-bar/dist/index.modern.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Helpers_PageLoad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Helpers/PageLoad */ "./resources/js/Helpers/PageLoad.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Routes */ "./resources/js/Shared/Routes.js");







function Navbar(_ref) {
  var pageLoader = _ref.pageLoader;
  //* load battery State
  var batteryState = Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useBattery"])(); //* Start page Load on Navigator Change

  Object(_Helpers_PageLoad__WEBPACK_IMPORTED_MODULE_4__["loadPage"])(pageLoader);
  Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useEffectOnce"])(function () {
    //*complete pageLoader loading
    pageLoader && pageLoader.current.complete();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "black",
    ref: pageLoader,
    waitingTime: 0
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, "InertiaApp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navbar-toggler collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarText",
    "aria-controls": "navbarText",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav mr-auto"
  }, _Routes__WEBPACK_IMPORTED_MODULE_5__["default"].general.routes.map(function (NavItem, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: "nav-".concat(key),
      className: "nav-item ".concat("active")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["InertiaLink"], {
      className: "nav-link",
      href: route(NavItem.route)
    }, NavItem.name));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-info navbar-text"
  }, (batteryState.level * 100).toFixed(0), "%", " ", batteryState.charging ? "Charging" : "")));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./resources/js/Shared/Routes.js":
/*!***************************************!*\
  !*** ./resources/js/Shared/Routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  //role name as a key.
  general: {
    routes: [{
      name: 'Home',
      route: 'home'
    }, {
      name: 'About',
      route: 'about'
    }, {
      name: 'Contact',
      route: 'contact'
    }]
  }
});

/***/ })

}]);