import { initialState } from '.';
import * as actionsTypes from './actions-types';

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionsTypes.INCREASE: {
      return { ...state, counter: state.counter + 1 };
    }
    case actionsTypes.DECREASE: {
      return { ...state, counter: state.counter - 1 };
    }
    case actionsTypes.RESET: {
      return { ...initialState, counter: 0 };
    }
    case actionsTypes.SET_COUNTER: {
      return { ...state, counter: action.payload, ...action.payload };
    }
    case actionsTypes.ASYNC_INCREASE_START: {
      return { ...state, loading: true };
    }
    case actionsTypes.ASYNC_INCREASE_END: {
      console.log(state.loading);

      return { ...state, loading: false, counter: state.counter + 1 };
    }
    case actionsTypes.ASYNC_INCREASE_ERROR: {
      return { ...state, loading: false };
    }
  }
  return state;
};
