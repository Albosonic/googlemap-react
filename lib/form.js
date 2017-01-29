"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(_ref) {
  var handleRoute = _ref.handleRoute;

  return _react2.default.createElement(
    "div",
    { className: "container-form" },
    _react2.default.createElement(
      "form",
      { className: "map-form", onSubmit: function onSubmit(e) {
          handleRoute(e);
        } },
      _react2.default.createElement("input", { className: "map-input", type: "text", placeholder: "origin" }),
      _react2.default.createElement("input", { className: "map-input", type: "text", placeholder: "destination" }),
      _react2.default.createElement(
        "button",
        {
          className: "map-directions-button",
          type: "submit" },
        "directions"
      )
    )
  );
};

exports.default = Form;