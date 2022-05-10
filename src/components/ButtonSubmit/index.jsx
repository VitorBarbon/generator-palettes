import P from 'prop-types';
import { useEffect } from 'react';
import { ButtonSubmit } from './styles';

export const Button = ({ text, handleAsyncFunc }) => {
  return (
    <ButtonSubmit type="submit" onClick={handleAsyncFunc}>
      {text}
    </ButtonSubmit>
  );
};

//propTypes

Button.propTypes = {
  text: P.string.isRequired,
  handleAsyncFunc: P.func.isRequired,
};
