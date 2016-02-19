'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _redux = require('redux');

var _deepFreeze = require('deep-freeze');

var _deepFreeze2 = _interopRequireDefault(_deepFreeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// redux
// TODO: Start with egghead.io

var counter = function counter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var action = arguments[1];

  switch (action) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};

var store = (0, _redux.createStore)(counter);

// tests increment
var stateBefore = 0;
var stateAfter = 1;
var action = 'INCREMENT';

(0, _deepFreeze2.default)(stateBefore);
(0, _deepFreeze2.default)(stateAfter);

(0, _expect2.default)(counter(stateBefore, action)).toEqual(stateAfter);

// tests decrement
var stateBefored = 2;
var stateAfterd = 1;
var actiond = 'DECREMENT';

(0, _deepFreeze2.default)(stateBefored);
(0, _deepFreeze2.default)(stateAfterd);

(0, _expect2.default)(counter(stateBefored, actiond)).toEqual(stateAfterd);
console.log("all tests OK");
//# sourceMappingURL=app.js.map
