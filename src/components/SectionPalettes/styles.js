import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => css`
    margin: 0 auto;
    width: 320px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media ${theme.media.lteSmall} {
      width: 500px;
      grid-template-columns: 1fr;
    }

    @media ${theme.media.lteMedium} {
      width: 740px;
      grid-template-columns: 1fr;
    }

    @media ${theme.media.lteBig} {
      width: 1100px;
      grid-template-columns: 1fr 1fr;
    }

    @media ${theme.media.lteHuge} {
      width: 1500px;
      grid-template-columns: 1fr 1fr 1fr;
    }
  `}
`;
