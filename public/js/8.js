(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/Helpers/Contact/index.js":
/*!***********************************************!*\
  !*** ./resources/js/Helpers/Contact/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ContactHelper = /*#__PURE__*/function () {
  function ContactHelper(load) {
    _classCallCheck(this, ContactHelper);

    this.load = load;
  }

  _createClass(ContactHelper, [{
    key: "submit",
    value: function submit(data) {
      var _this = this;

      this.load(true); //*Inertia implements the custom methods

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].put("/submit", data).then(function () {
        return _this.load(false);
      });
    }
  }]);

  return ContactHelper;
}();

/* harmony default export */ __webpack_exports__["default"] = (ContactHelper);

/***/ }),

/***/ "./resources/js/Pages/Contact/index.js":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Contact/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Hooks */ "./resources/js/Hooks/index.js");
/* harmony import */ var _Helpers_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Helpers/Contact */ "./resources/js/Helpers/Contact/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Shared_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/layout */ "./resources/js/Shared/layout.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//* libraries

 //* Hooks and Helpers


 //* Library Components







function Contact() {
  Object(_Hooks__WEBPACK_IMPORTED_MODULE_2__["useTitle"])("Contact");
  Object(_Hooks__WEBPACK_IMPORTED_MODULE_2__["useFlashMessage"])();

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      errors = _usePage.errors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var Handle = new _Helpers_Contact__WEBPACK_IMPORTED_MODULE_3__["default"](setLoading);

  function handleSubmit(data) {
    Handle.submit(data);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_layout__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a, {
    layout: "vertical",
    onFinish: handleSubmit,
    initialValues: {
      first_name: "Abraham"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "First Name",
    name: "first_name",
    rules: [{
      required: true,
      message: "Please input First Name!"
    }],
    validateStatus: errors.first_name && "error",
    help: errors.first_name && errors.first_name[0]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    placeholder: "First Name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Last Name",
    name: "last_name",
    rules: [{
      required: true,
      message: "Please input Last Name!"
    }],
    validateStatus: errors.last_name && "error",
    help: errors.last_name && errors.last_name[0]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    placeholder: "Last Name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Email",
    name: "email",
    rules: [{
      required: true,
      message: "Please input Email!"
    }],
    validateStatus: errors.email && "error",
    help: errors.email && errors.email[0]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    type: "email",
    placeholder: "Email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Message",
    name: "message",
    rules: [{
      required: true,
      message: "Please input Message!"
    }],
    validateStatus: errors.message && "error",
    help: errors.message && errors.message[0]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a.TextArea, {
    placeholder: "message"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    type: "primary",
    htmlType: "submit",
    loading: loading
  }, "Submit")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

}]);