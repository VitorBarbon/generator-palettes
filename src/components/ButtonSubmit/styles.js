import styled, { css } from 'styled-components';

export const ButtonSubmit = styled.button`
  ${({ theme }) => css`
    font-size: 18px;
    width: 400px;
    height: 35px;
    color: ${theme.colors.secondaryColor};
    background-color: ${theme.colors.primaryColor};
    border-radius: 7px;
    border-color: transparent;
    margin-bottom: 50px;

    &:hover {
      color: ${theme.colors.primaryColor};
      background-color: ${theme.colors.secondaryColor};
      box-shadow: 0 7px 10px 5px rgba(10, 17, 40, 0.5);
      transition: all 300ms linear;
    }
  `}
`;
