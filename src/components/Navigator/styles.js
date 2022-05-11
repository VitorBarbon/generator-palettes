import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    gap: ${theme.spacings.large};
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.primaryColor};
    justify-content: center;
    right: 0;
    top: 0;
    flex-direction: column;

    a:hover {
      color: ${theme.colors.mediumGray};
    }

    @media ${theme.media.lteSmall} {
      width: 30%;
      background-color: rgba(10, 17, 40, 0.8);
      justify-content: flex-start;
      align-items: start;
      padding-top: 150px;
      padding-left: 30px;
    }

    @media ${theme.media.lteMedium} {
      position: absolute;
      background-color: transparent;
      height: 100px;
      width: 100%;
      right: 100px;
      flex-direction: row;
      padding-top: 0;
      padding-left: 0px;
      align-items: center;
      justify-content: flex-end;
    }
  `}
`;
