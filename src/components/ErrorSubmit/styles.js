import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    p {
      width: 300px;
      text-align: start;
      font-size: 16px;
      margin: 0;
      padding: 0;
      color: ${theme.colors.secondaryColor};
    }

    @media ${theme.media.lteSmall} {
      p {
        width: 400px;
      }
    }

    @media ${theme.media.lteMedium} {
      p {
        width: 500px;
      }
    }
  `}
`;
