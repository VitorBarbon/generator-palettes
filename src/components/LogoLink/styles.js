import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 70px;
    a {
      color: red;
    }
  `}
`;
