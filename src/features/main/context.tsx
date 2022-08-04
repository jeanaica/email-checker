import { createContext, useReducer, useContext, FC, ReactNode } from 'react';
import BreachReducer from './reducer';
import { BreachStore } from './types';

const BreachContext = createContext({} as BreachStore);

export const BreachProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(BreachReducer, {
    email: '',
    breaches: [],
  });

  const store = {
    state,
    dispatch,
  } as BreachStore;

  return (
    <BreachContext.Provider value={store}>{children}</BreachContext.Provider>
  );
};

export const useBreachStateContext = () => useContext(BreachContext);
