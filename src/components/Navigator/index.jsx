import P from 'prop-types';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import * as Styled from './styles';

export const Navigator = () => {
  return (
    <Styled.Container theme={theme}>
      <Link to="/">
        Home
        <span></span>
      </Link>
      <Link to="/about">
        About
        <span></span>
      </Link>
      <Link to="/how-to-use">
        How to use
        <span></span>
      </Link>
    </Styled.Container>
  );
};
