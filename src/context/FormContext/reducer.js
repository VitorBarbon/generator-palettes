import { formState } from '.';
import * as actionTypes from './actions-types';

export const reducer = (state, action) => {
  const { palettes } = state;
  switch (action.type) {
    case actionTypes.ASYNC_CREATE_END: {
      return {
        ...state,
        edit: (state.edit = false),
        ...action.error,
        ...palettes.push(action.palette),
      };
    }

    case actionTypes.ASYNC_CREATE_ERROR: {
      return { ...state, ...action.payload, edit: (state.edit = false) };
    }
  }

  return { ...state };
};
