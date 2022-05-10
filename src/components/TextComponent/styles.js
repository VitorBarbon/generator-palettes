import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  } ;
`;

export const Paragraph = styled.p`
  ${({ theme, size }) => css`
    ${titleSize[size](theme)};
    margin: 0 auto;
    margin-top: ${theme.spacings.huge};
    width: 350px;

    @media ${theme.media.lteSmall} {
      width: 500px;
    }
  `}
`;
