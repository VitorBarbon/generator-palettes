import { Header } from '../../components/Header';
import { LogoLink } from '../../components/LogoLink';
import { Link } from 'react-router-dom';
import { MainContainer } from '../../components/MainContainer';
import { Navigator } from '../../components/Navigator';
import { GlobalStyles } from '../../styles/global-style';
import { FormPalette } from '../../components/FormPalette';
import { TextComponent } from '../../components/TextComponent';
import { SectionPalettes } from '../../components/SectionPalettes';
import { useFormContext } from '../../context/FormContext';
import { Palette } from '../../components/Palette';
import { useState } from 'react';
import mockPalettes from './mockPalettes';
import { Color } from '../../components/Color';
import { Footer } from '../../components/Footer';

const handleId = () => {
  return (Math.random(1) * 100).toFixed(0);
};

function Home() {
  const [state, actions] = useFormContext();
  const { palettes } = state;
  console.log(palettes);
  return (
    <>
      <MainContainer>
        <Header />
        <TextComponent
          size={'small'}
          text="Hey there! What about customize your palettes?"
        />
        <FormPalette />
        <SectionPalettes>
          {palettes.map((palette) => (
            <Palette key={palette.id}>
              {palette.colors.map((color) => (
                <Color key={color + handleId()} bgColor={color} />
              ))}
            </Palette>
          ))}
        </SectionPalettes>
      </MainContainer>
      <Footer></Footer>
    </>
  );
}

export default Home;
