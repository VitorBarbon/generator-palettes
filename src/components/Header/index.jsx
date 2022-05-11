import P from 'prop-types';
import { LogoLink } from '../LogoLink';
import { Navigator } from '../Navigator';
import * as Styled from './styles';
import { theme } from '../../styles/theme';
import { useEffect, useState } from 'react';
import { Hamburguer } from '../Hamburguer';

export const Header = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setVisible((v) => false);
      }
      if (window.innerWidth > 767) {
        setVisible((v) => true);
      }
    };
    window.addEventListener('resize', handleResize);
  });

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
