"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Directions = function Directions(_ref) {
  var steps = _ref.steps;

  var newSteps = Array.prototype.slice.call(steps);

  return _react2.default.createElement(
    "div",
    { className: "container-form-directions" },
    newSteps.map(function (step, key) {
      return _react2.default.createElement("div", {
        key: key,
        className: "directions-item",
        dangerouslySetInnerHTML: { __html: step.instructions } });
    })
  );
};

exports.default = Directions;