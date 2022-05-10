import P from 'prop-types';
import { DivPalette } from './styles';

export const Palette = ({ children }) => {
  return <DivPalette>{children}</DivPalette>;
};

//propTypes

Palette.propTypes = {
  children: P.node.isRequired,
};
