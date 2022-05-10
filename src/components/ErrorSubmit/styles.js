import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    p {
      width: 500px;
      text-align: start;
      font-size: ${theme.font.sizes.xsmall};
      margin: 0;
      padding: 0;
      color: ${theme.colors.secondaryColor};
    }
  `}
`;
