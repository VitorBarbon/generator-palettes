import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    width: 100%;
    height: 70px;
    background-color: ${theme.colors.primaryColor};
  `}
`;
