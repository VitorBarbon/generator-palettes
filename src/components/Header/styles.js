import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    background: ${theme.colors.primaryColor};
  `}
`;
