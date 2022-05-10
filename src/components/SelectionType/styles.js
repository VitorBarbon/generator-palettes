import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    span {
      font-size: ${theme.font.sizes.xsmall};
      width: 300px;
      text-align: start;
      margin-bottom: 10px;
      display: block;
      color: ${theme.colors.primaryColor};
    }

    select {
      border: 2px solid ${theme.colors.secondaryColor};
      color: ${theme.colors.primaryColor};
      width: 300px;
      height: 30px;
    }

    @media ${theme.media.lteSmall} {
      span,
      select {
        width: 400px;
      }
    }

    @media ${theme.media.lteMedium} {
      span,
      select {
        width: 500px;
      }

      span {
        font-size: ${theme.font.sizes.small};
      }
    }
  `}
`;
