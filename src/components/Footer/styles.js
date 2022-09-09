import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 70px;
    background-color: ${theme.colors.primaryColor};
  `}
`;
