import P from 'prop-types';
import { FooterContainer } from './styles';

export const Footer = ({ children }) => {
  return (
    <FooterContainer>
      <h1>{children}</h1>
    </FooterContainer>
  );
};

//propTypes

Footer.propTypes = {
  children: P.node.isRequired,
};
