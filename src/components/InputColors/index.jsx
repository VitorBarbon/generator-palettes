import P from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';

export const InputColor = ({ handleRef }) => {
  return (
    <Styled.Container>
      <span>Quantidade de Cores</span>
      <input type="number" ref={handleRef} />
    </Styled.Container>
  );
};

InputColor.propTypes = {
  handleRef: P.object,
};
