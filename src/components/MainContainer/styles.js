import styled, { css } from 'styled-components';
import { InputColor } from '../InputColors';
import { ContainerInput } from '../InputColors/styles';
import { ContainerSelect } from '../SelectionType/styles';

export const Container = styled.main`
  ${({ theme }) => css`
    text-align: center;
    background: ${theme.colors.mediumGray};
  `}
`;
