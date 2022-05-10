import P from 'prop-types';
import { useState } from 'react';
import { DivColor } from './styles';

export const Color = ({ bgColor }) => {
  return <DivColor style={{ background: bgColor }}></DivColor>;
};

//propTypes

Color.propTypes = {
  bgColor: P.string.isRequired,
};
