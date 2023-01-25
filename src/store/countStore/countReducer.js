import {INC, DEC} from './countActionTypes';

const initialState = {
  count: 0,
  delta: 1000,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {...state, count: state.count + 1}
    case DEC:
      return {...state, count: state.count - 1}
    default:
      return state
  }
}