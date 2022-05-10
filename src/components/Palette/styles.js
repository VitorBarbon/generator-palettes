import styled, { css } from 'styled-components';
import { DivColor } from '../Color/styles';
export const DivPalette = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 350px;
    height: 100px;
    margin: 0 auto;

    @media ${theme.media.lteSmall} {
      & {
        width: 450px;
      }
    }

    @media ${theme.media.lteMedium} {
      & {
        width: 550px;
      }
    }

    @media ${theme.media.lteBig} {
      & {
        width: 450px;
      }
    }

    /* ${DivColor}:hover {
      width: 200%;

      transition: all 300ms linear;
    } */
  `}
`;
