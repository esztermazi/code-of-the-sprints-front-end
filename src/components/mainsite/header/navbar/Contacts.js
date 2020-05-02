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
import { StyledTree } from '../../../style/ContactsElements';

//Bootstrap components
import { Button, Card } from 'react-bootstrap';

const Contacts = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const { rootData, setRootData } = useContext(HouseContext);

  const nodeClicked = (event, nodeKey) => {
    let currentRoot = findNode(rootData, nodeKey);
    setRootData(currentRoot);
  };

  const findNode = (currentNode, nodeKey, keyLenght) => {
    console.log(nodeKey);
    if (nodeKey === currentNode.id) {
      return currentNode;
    }
    for (let index in currentNode.children) {
      let node = currentNode.children[index];
      let nodeKeyLenght = node.id.length;
      console.log(nodeKeyLenght);
      console.log(node.id.substr(0, nodeKeyLenght));
      console.log(nodeKey.substr(0, nodeKeyLenght));
      if (node.id === nodeKey) return node;
      if (node.id.substr(0, nodeKeyLenght) === nodeKey.substr(0, nodeKeyLenght))
        return findNode(node, nodeKey);
    }
  };

  const resetTreeData = () => {
    setRootData(Houses);
  };

  useEffect(() => {}, [rootData]);

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer
        style={{ backgroundColor: currentTheme.bodyBackground }}
      >
        <StyledColumnContainer>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Name: {rootData.name}</Card.Title>
              <Card.Text>Age: {rootData.age}</Card.Text>
              <Card.Text>Culture: {rootData.culture}</Card.Text>
              <Button variant={currentTheme.variant} onClick={resetTreeData}>
                Reset Tree
              </Button>
            </Card.Body>
          </Card>
          <StyledTree
            data={rootData}
            height={800}
            animated
            width={1500}
            easing={easeElastic}
            duration={600}
            keyProp={'id'}
            gProps={{
              onClick: nodeClicked,
              fill: currentTheme.graphTextColor,
              fontSize: 40,
              cursor: 'pointer',
            }}
          ></StyledTree>
          <Footer currentTheme={currentTheme} />
        </StyledColumnContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default Contacts;
