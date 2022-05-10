import styled, { css } from 'styled-components';
import { DivColor } from '../Color/styles';
export const DivPalette = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 500px;
    height: 100px;
    margin: 0 auto;

    /* ${DivColor}:hover {
      width: 200%;

      transition: all 300ms linear;
    } */
  `}
`;
