import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => css`
    margin: 0 auto;
    width: 320px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 40px;

    @media ${theme.media.lteSmall} {
      width: 500px;
    }

    @media ${theme.media.lteMedium} {
      width: 740px;
    }

    @media ${theme.media.lteBig} {
      width: 1100px;
    }

    @media ${theme.media.lteHuge} {
      width: 1500px;
    }
  `}
`;
