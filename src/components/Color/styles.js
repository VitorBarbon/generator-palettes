import styled, { css } from 'styled-components';

export const DivColor = styled.div`
  ${({ theme }, bgColor) => css`
    width: 100%;
  `}
`;
