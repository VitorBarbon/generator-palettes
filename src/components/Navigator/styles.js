import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.large};

    a:hover {
      color: ${theme.colors.mediumGray};
    }
  `}
`;
