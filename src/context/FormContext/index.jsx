import { createContext, useContext, useReducer, useRef } from 'react';
import P from 'prop-types';
import { reducer } from './reducer';
import { buildActions } from './build-actions';

export const formState = {
  quantityError: false,
  typeError: false,
  edit: false,
  palettes: [],
  // [
  //   // { id: 1, colors: ['#161414', ' #ffffff', '#abbbbb', '#eedddd', '#323456'] },
  //   // { id: 2, colors: ['#111331', ' #ffff22', '#abbb22', '#8796ee', '#999999'] },
  //   // { id: 3, colors: ['#112333', ' #ff4422', '#ab3222', '#432124', '#239876'] },
  // ],
};

const Context = createContext();

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, formState);
  const actions = useRef(buildActions(dispatch));
  return (
    <Context.Provider value={[state, actions.current]}>
      {children}
    </Context.Provider>
  );
};

FormProvider.propTypes = {
  children: P.node.isRequired,
};

export const useFormContext = () => {
  const context = useContext(Context);
  if (typeof context === 'undefined') {
    throw new Error(
      'You have to use useFormContext inside <FormContextProvider/>',
    );
  }
  return [...context];
};
