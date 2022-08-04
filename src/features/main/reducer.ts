import { BreachActionTypes, BreachState } from './types';

const BreachReducer = (state: BreachState, action: BreachActionTypes) => {
  switch (action.type) {
    case 'ADD_BREACH': {
      return {
        ...state,
        email: action.email,
        breaches: action.breaches,
      };
    }
    default: {
      throw new Error('unhandled action');
    }
  }
};

export default BreachReducer;
