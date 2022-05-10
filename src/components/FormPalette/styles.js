import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  `}
`;
