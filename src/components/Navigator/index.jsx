import P from 'prop-types';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { Nav } from './styles';

export const Navigator = () => {
  return (
    <Nav>
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
    </Nav>
  );
};
