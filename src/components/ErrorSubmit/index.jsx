import P from 'prop-types';
import * as Styled from './styles';

export const ErrorSubmit = ({ textError }) => {
  return (
    <Styled.Container>
      <p>{textError}</p>
    </Styled.Container>
  );
};

//propTypes

ErrorSubmit.propTypes = {
  textError: P.string.isRequired,
};
