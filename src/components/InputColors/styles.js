import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    span {
      font-size: ${theme.font.sizes.xsmall};
      display: block;
      margin-top: 70px;
      margin-bottom: 10px;
      width: 300px;
      text-align: start;
      color: ${theme.colors.primaryColor};
    }
    input {
      border: 2px solid ${theme.colors.secondaryColor};
      color: ${theme.colors.secondaryColor};
      width: 300px;
      height: 30px;
      padding: 10px;
    }

    @media ${theme.media.lteSmall} {
      span,
      input {
        width: 400px;
      }
    }

    @media ${theme.media.lteMedium} {
      span,
      input {
        width: 500px;
      }

      span {
        font-size: ${theme.font.sizes.small};
      }
    }
  `}
`;
