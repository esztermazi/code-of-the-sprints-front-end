//Packages
import React, { useContext, useEffect } from 'react';
import { easeElastic } from 'd3-ease';

import 'react-tree-graph/dist/style.css';

//Context
import { ThemeContext, ThemeProvider } from '../../../contexts/ThemeContext';
import { HouseContext } from '../../../contexts/HouseContext';

//Component
import AppTheme from '../../../../static/util/AppTheme';
import Footer from '../../mainmenu/Footer';

//Styled Component
import {
  BackgroundContainer,
  StyledColumnContainer,
} from '../../../style/LayoutElements';
import { StyledTree, StyledTitle } from '../../../style/ContactsElements';

const Contacts = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const { houses, setHouses } = useContext(HouseContext);

  console.log(houses);

  const nodeClicked = (event, node) => {
    setHouses({ name: node });
  };

  useEffect(() => {}, [houses]);

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer
        style={{ backgroundColor: currentTheme.bodyBackground }}
      >
        <StyledColumnContainer>
          <div className={currentTheme.textColor}>Contacts</div>
          <Footer currentTheme={currentTheme} />
          <StyledTree
            data={houses}
            height={800}
            animated
            width={1500}
            easing={easeElastic}
            gProps={{
              onClick: nodeClicked,
            }}
          >
            <StyledTitle>Houses</StyledTitle>
          </StyledTree>
        </StyledColumnContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default Contacts;
