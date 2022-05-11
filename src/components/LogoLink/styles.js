import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 30px;
    a {
      color: red;
    }

    @media ${theme.media.lteMedium} {
      left: 70px;
    }
  `}
`;
