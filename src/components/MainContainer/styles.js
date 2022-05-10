import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    text-align: center;
    background: ${theme.colors.mediumGray};
    height: 100vh;
  `}
`;
