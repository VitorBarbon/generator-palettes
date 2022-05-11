import styled, { css } from 'styled-components';

export const IconClose = styled.button`
  ${({ theme }) => css`
    position: absolute;
    border: 1px solid transparent;
    top: 40px;
    right: 80px;
    background: transparent;

    div {
      width: 35px;
      height: 35px;
    }

    span {
      position: absolute;
      display: block;
      width: 35px;
      height: 2px;
      background-color: ${theme.colors.secondaryColor};
      transition: all 400ms linear;
    }

    .b1 {
      top: 0px;
    }

    .b2 {
      top: 10px;
    }

    .b3 {
      top: 20px;
    }

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;

export const IconHamburguer = styled.button`
  ${({ theme }) => css`
    position: absolute;
    border: 1px solid transparent;
    top: 40px;
    right: 80px;
    transition: all 400ms linear;
    background: transparent;

    div {
      width: 35px;
      height: 35px;
    }

    span {
      position: absolute;
      display: block;
      width: 35px;
      height: 3px;
      background-color: ${theme.colors.secondaryColor};
    }

    .b1 {
      top: 11px;
      transform: rotate(45deg);
      transition: all 400ms linear;
    }

    .b2 {
      top: 11px;
      transform: rotate(135deg);
      transition: all 400ms linear;
    }

    .b3 {
      top: 11px;
      transform: rotate(45deg);
      transition: all 400ms linear;
      height: 1px;
    }

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;
