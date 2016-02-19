'use strict'

import expect from 'expect'
import { createStore } from 'redux'
import deepfreeze from 'deep-freeze'


// redux
// TODO: Start with egghead.io

const counter = (state = 0, action) => {
  switch(action) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
  }
};

const store = createStore(counter)

// tests increment
const stateBefore = 0
const stateAfter = 1
const action = 'INCREMENT'

deepfreeze(stateBefore)
deepfreeze(stateAfter)

expect(counter(stateBefore, action)).toEqual(stateAfter)

// tests decrement
const stateBefored = 2
const stateAfterd = 1
const actiond = 'DECREMENT'

deepfreeze(stateBefored)
deepfreeze(stateAfterd)

expect(counter(stateBefored, actiond)).toEqual(stateAfterd)
console.log("all tests OK")
