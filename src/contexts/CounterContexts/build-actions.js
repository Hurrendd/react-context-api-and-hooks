import * as actionsTypes from './actions-types';

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionsTypes.INCREASE }),
    decrement: () => dispatch({ type: actionsTypes.DECREASE }),
    reset: () => dispatch({ type: actionsTypes.RESET }),
    setCounter: (payload) => dispatch({ type: actionsTypes.SET_COUNTER, payload }),
    asyncIncrease: () => asyncIncreaseFunction(dispatch),
    asyncError: () => asyncErrorFunction(dispatch),
  };
};

const asyncIncreaseFunction = async (dispatch) => {
  dispatch({ type: actionsTypes.ASYNC_INCREASE_START });
  return await new Promise((resolve) => {
    setTimeout(() => {
      dispatch({ type: actionsTypes.ASYNC_INCREASE_END });
      resolve('RESOLVED!');
    }, 5000);
  });
};

const asyncErrorFunction = async (dispatch) => {
  dispatch({ type: actionsTypes.ASYNC_INCREASE_START });
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: actionsTypes.ASYNC_INCREASE_ERROR });
      reject(new Error('Erro na chamada da função.'));
    }, 5000);
  });
};
