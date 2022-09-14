import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.primaryColor};
  `}
`;
