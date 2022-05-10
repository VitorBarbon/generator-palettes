import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    span {
      font-size: ${theme.font.sizes.small};
      display: block;
      margin-top: 100px;
      margin-bottom: 10px;
      width: 500px;
      text-align: start;
      color: ${theme.colors.primaryColor};
    }
    input {
      border: 2px solid ${theme.colors.secondaryColor};
      color: ${theme.colors.secondaryColor};
      width: 500px;
      height: 30px;
      padding: 10px;
    }
  `}
`;
