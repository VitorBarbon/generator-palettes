import P from 'prop-types';
import { LogoLink } from '../LogoLink';
import { Navigator } from '../Navigator';
import * as Styled from './styles';
import { theme } from '../../styles/theme';
import { useEffect, useState } from 'react';
import { Hamburguer } from '../Hamburguer';

export const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Styled.Container>
      <LogoLink />
      {visible && <Navigator />}
      <Hamburguer
        handleClick={() => setVisible(!visible)}
        handleIcon={visible}
      />
    </Styled.Container>
  );
};
