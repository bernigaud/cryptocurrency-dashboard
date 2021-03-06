import { combineReducers } from 'redux';

import { RootAction } from '@src/redux_';
import { ActionTypes, Currency, Target, setCurrencies } from '.';

export interface IState {
  readonly all: Currency[];
  readonly loading: boolean;
  readonly selected: string[];
  readonly target: Target;
}

const SELECTED_BY_DEFAULT = [
  '1182', // BTC
  '7605', // ETH
];

export const reducer = combineReducers<IState, RootAction>({
  all(state = [], action) {
    switch (action.type) {
      case ActionTypes.SET_CURRENCIES:
        return action.payload;

      default:
        return state;
    }
  },

  loading(state = false, action) {
    switch (action.type) {
      case ActionTypes.CURRENCIES_LOADING_START:
        return true;

      case ActionTypes.CURRENCIES_LOADING_STOP:
        return false;

      default:
        return state;
    }
  },

  selected(state = SELECTED_BY_DEFAULT, action) {
    switch (action.type) {
      case ActionTypes.CURRENCY_SELECTED:
        {
          const { id } = action.payload;

          return [...new Set([id, ...state])];
        }

      case ActionTypes.CURRENCY_DESELECTED:
        {
          const { id: toRemove } = action.payload;
          const index = state.indexOf(toRemove);

          return index !== -1 ? [
            ...state.slice(0, index),
            ...state.slice(index + 1),
          ] : state;
        }

      default:
        return state;
    }
  },

  target(state = 'USD', action) {
    switch (action.type) {
      case ActionTypes.TOGGLE_TARGET:
        return action.payload;

      default:
        return state;
    }
  },
});
