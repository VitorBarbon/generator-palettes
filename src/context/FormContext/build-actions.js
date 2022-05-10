import * as actionTypes from './actions-types.js';
import { Palette } from '../../API/create_Colors_Palette';

export const buildActions = (dispatch) => {
  return {
    quantityIncrease: () => dispatch({ type: actionTypes.QUANTITY }),
    typeFormSelect: () => dispatch({ type: actionTypes.PALETTETYPE }),
    errorForm: () => dispatch({ type: actionTypes.ERRORSUBMIT }),
    asyncCreatePalette: (payload) => asyncCreatePaletteFn(dispatch, payload),
    // asyncError: () => asyncErrorfn(dispatch),
  };
};

const asyncCreatePaletteFn = async (dispatch, payload) => {
  const url = `https//www.randompalettesAPI/${payload.quantity}/${payload.value}`;
  dispatch({ type: actionTypes.ASYNC_CREATE_START });
  if (payload.value === '0' && payload.quantity === '') {
    return asyncErrorfn(dispatch, {
      quantityError: true,
      typeError: true,
    });
  }

  if (payload.value === '0' && payload.quantity) {
    return asyncErrorfn(dispatch, {
      quantityError: false,
      typeError: true,
    });
  }

  if (payload.quantity === '' && payload.value) {
    return asyncErrorfn(dispatch, {
      quantityError: true,
      typeError: false,
    });
  }

  if (payload.value && payload.quantity) {
    return await new Promise((resolve) => {
      const palette = new Palette(url);

      dispatch({
        type: actionTypes.ASYNC_CREATE_END,
        payload,
        error: { quantityError: false, typeError: false },
        palette: palette.createPalette,
      });
      resolve('RESOLVED');
    });
  }
};

const asyncErrorfn = async (dispatch, payload) => {
  dispatch({ type: actionTypes.ASYNC_CREATE_START });
  return await new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.ASYNC_CREATE_ERROR, payload });
    reject('REJECT');
  }, 2000);
};
