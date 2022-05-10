import P from 'prop-types';
import { Paragraph } from './styles';

export const TextComponent = ({ text, size }) => {
  return <Paragraph size={size}>{text}</Paragraph>;
};

//propTypes

TextComponent.propTypes = {
  text: P.string.isRequired,
  size: P.oneOf(['small', 'medium', 'big', 'huge']).isRequired,
};
