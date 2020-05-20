//Packages
import React, { useContext } from 'react';

//Contexts
import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';

//Components
import AppTheme from '../../../static/util/AppTheme';
import Footer from './Footer';
import Stage from './orderbuilder/Stage';
import Display from './orderbuilder/Display';
import StartButton from './orderbuilder/StartButton';
import { createStage } from './orderbuilder/GameHelper';

//Styled Components
import { BackgroundContainer } from '../../style/LayoutElements';

const OrderBuilder = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer color={currentTheme.bodyBackground}>
        <Stage stage={createStage()} />
        <aside>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
          <StartButton />
        </aside>
        <Footer currentTheme={currentTheme} />
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default OrderBuilder;
