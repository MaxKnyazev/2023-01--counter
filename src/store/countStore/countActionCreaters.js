import { INC, DEC, INC_ASYNC, DEC_ASYNC } from './countActionTypes';

export const actionInc = () => ({
  type: INC,
});

export const actionDec = () => ({
  type: DEC,
});

export const actionIncAsync = (delta) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(actionInc());
    }, delta)
  }
};

export const actionDecAsync = (delta) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(actionDec());
    }, delta)
  }
};