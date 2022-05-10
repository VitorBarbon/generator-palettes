import P from 'prop-types';
import { useEffect, useRef } from 'react';
import * as Styled from './styles';

export const SelectionType = ({ handleRef }) => {
  return (
    <Styled.Container>
      <span>Tipo da paleta</span>
      <select ref={handleRef}>
        <option value="0">-- Select --</option>
        <option value="1">Standard</option>
        <option value="2">Dark Color</option>
        <option value="3">Light Color</option>
      </select>
    </Styled.Container>
  );
};

SelectionType.propTypes = {
  handleRef: P.object,
};
