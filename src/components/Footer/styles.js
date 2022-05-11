import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: 70px;
    background-color: ${theme.colors.primaryColor};
  `}
`;
