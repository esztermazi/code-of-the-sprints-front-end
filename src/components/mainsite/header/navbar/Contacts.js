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
import Houses from '../../../../static/util/Houses';

//Styled Component
import {
  BackgroundContainer,
  StyledColumnContainer,
} from '../../../style/LayoutElements';
import { StyledTree, StyledTitle } from '../../../style/ContactsElements';

//Bootstrap components
import { Button } from 'react-bootstrap';

const Contacts = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const { houses, setHouses } = useContext(HouseContext);

  const nodeClicked = (event, node) => {
    setHouses({ name: node });
  };

  const resetTreeData = () => {
    setHouses(Houses);
  };

  useEffect(() => {}, [houses]);

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer
        style={{ backgroundColor: currentTheme.bodyBackground }}
      >
        <StyledColumnContainer>
          <div className={currentTheme.textColor}>Contacts</div>
          <Button variant={currentTheme.variant} onClick={resetTreeData}>
            Reset Tree
          </Button>
          <Footer currentTheme={currentTheme} />
          <StyledTree
            data={houses}
            height={800}
            animated
            width={1500}
            easing={easeElastic}
            duration={600}
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
