import P from 'prop-types';
import { Section } from './styles';

export const SectionPalettes = ({ children }) => {
  return <Section>{children}</Section>;
};

//propTypes

SectionPalettes.propTypes = {
  children: P.node.isRequired,
};
