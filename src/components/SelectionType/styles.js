import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    span {
      font-size: ${theme.font.sizes.small};
      width: 500px;
      text-align: start;
      margin-bottom: 10px;
      display: block;
      color: ${theme.colors.primaryColor};
    }
    select {
      border: 2px solid ${theme.colors.secondaryColor};
      color: ${theme.colors.primaryColor};
      width: 500px;
      height: 30px;
    }
  `}
`;
