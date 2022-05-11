import P from 'prop-types';
import { IconClose, IconHamburguer } from './styles';

export const Hamburguer = ({ handleClick, handleIcon }) => {
  if (handleIcon) {
    return (
      <IconHamburguer onClick={handleClick}>
        <div></div>
        <span className="b1"></span>
        <span className="b2"></span>
        <span className="b3"></span>
      </IconHamburguer>
    );
  }

  if (!handleIcon) {
    return (
      <IconClose onClick={handleClick}>
        <div></div>
        <span className="b1"></span>
        <span className="b2"></span>
        <span className="b3"></span>
      </IconClose>
    );
  }
};

Hamburguer.propTypes = {
  handleClick: P.func.isRequired,
  handleIcon: P.bool.isRequired,
};
