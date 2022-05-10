import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    gap: 40px;
    @media ${theme.media.lteBig} {
      grid-template-columns: 1fr 1fr;
    }
    @media ${theme.media.lteHuge} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `}
`;
