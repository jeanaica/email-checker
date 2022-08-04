import { Dispatch } from 'react';

export type BreachProp = {
  Title: string;
  Description: string;
  DataClasses: string;
  LogoPath: string;
};

export interface BreachState {
  email: string;
  breaches: Array<BreachProp>;
}

export enum BreachActions {
  ADD_BREACH = 'ADD_BREACH',
}

export type BreachActionTypes = {
  type: BreachActions.ADD_BREACH;
  breaches: BreachProp[];
  email: string;
};

export interface BreachStore {
  state: BreachState;
  dispatch: Dispatch<BreachActionTypes>;
}
