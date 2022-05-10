import P from 'prop-types';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

export const LogoLink = () => {
  return (
    <Styled.Container>
      <Link to="/">RandomPalettes</Link>
    </Styled.Container>
  );
};
