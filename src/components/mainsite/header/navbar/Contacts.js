//Packages
import React, { useContext, useEffect } from 'react';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';

//Context
import { ThemeContext, ThemeProvider } from '../../../contexts/ThemeContext';

//Component
import AppTheme from '../../../../static/util/AppTheme';
import Houses from '../../../../static/util/Houses';
import Footer from '../../mainmenu/Footer';

//Styled Component
import {
  BackgroundContainer,
  StyledColumnContainer,
} from '../../../style/LayoutElements';

const Contacts = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer
        style={{ backgroundColor: currentTheme.bodyBackground }}
      >
        <StyledColumnContainer>
          <div className={currentTheme.textColor}>Contacts</div>
          <Footer currentTheme={currentTheme} />
          <Tree
            data={Houses}
            margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
            height={1000}
            width={1900}
          ></Tree>
        </StyledColumnContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default Contacts;
