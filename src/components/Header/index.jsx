import P from 'prop-types';
import { LogoLink } from '../LogoLink';
import { Navigator } from '../Navigator';
import * as Styled from './styles';
import { theme } from '../../styles/theme';

export const Header = () => {
  return (
    <Styled.Container>
      <LogoLink />
      <Navigator />
    </Styled.Container>
  );
};
