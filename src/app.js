'use strict'

import expect from 'expect'
import redux from 'redux'
import deepfreeze from 'deep-freeze'

// redux
// TODO: Start with egghead.io

const counter = (state = 0, action) => {
};

const { createStore } = Redux;
const store = createStore(counter)

var stateBefore = {
};

// tests
expect(counter(stateBefore, action)).toEqual(stateAfter);

console.log("all tests OK")
