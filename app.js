'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _redux = require('redux');

var _redux2 = _interopRequireDefault(_redux);

var _deepFreeze = require('deep-freeze');

var _deepFreeze2 = _interopRequireDefault(_deepFreeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// redux
// TODO: Start with egghead.io

var counter = function counter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var action = arguments[1];
};

var _Redux = Redux;
var createStore = _Redux.createStore;

var store = createStore(counter);

var stateBefore = {};

// tests
(0, _expect2.default)(counter(stateBefore, action)).toEqual(stateAfter);

console.log("all tests OK");
//# sourceMappingURL=app.js.map
