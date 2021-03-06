//Packages
import React, { useContext, useEffect } from 'react';
import 'react-tree-graph/dist/style.css';
import { Button, Card } from 'react-bootstrap';

//Contexts
import { ThemeContext, ThemeProvider } from '../../../contexts/ThemeContext';
import { TreeDataContext } from '../../../contexts/TreeDataContext';

//Components
import AppTheme from '../../../../static/util/AppTheme';
import Footer from '../../mainmenu/Footer';

//Styled Component
import {
  BackgroundContainer,
  StyledColumnContainer,
} from '../../../style/LayoutElements';
import { StyledTree } from '../../../style/ContactsElements';

//CSS
import '../../../../static/css/TreeGraph.css';

const Contacts = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const { dataSource, rootData, setRootData } = useContext(TreeDataContext);

  const nodeClicked = (event, nodeKey) => {
    if (nodeKey === rootData.id) setRootData(dataSource);
    else {
      let currentRoot = findNode(rootData, nodeKey);
      setRootData(currentRoot);
    }
  };

  const findNode = (currentNode, nodeKey) => {
    if (nodeKey === currentNode.id) return currentNode;
    for (let index in currentNode.children) {
      let node = currentNode.children[index];
      let nodeKeyLenght = node.id.length;
      if (node.id === nodeKey) return node;
      if (node.id.substr(0, nodeKeyLenght) === nodeKey.substr(0, nodeKeyLenght))
        return findNode(node, nodeKey);
    }
  };

  const resetTreeData = () => {
    setRootData(dataSource);
  };

  useEffect(() => {}, [rootData]);

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer color={currentTheme.bodyBackground}>
        <StyledColumnContainer>
          <Card style={{ width: '18rem' }} border={currentTheme.variant}>
            <Card.Header>{rootData.name}</Card.Header>
            <Card.Body>
              <Card.Text>Age: {rootData.age}</Card.Text>
              <Card.Text>Culture: {rootData.culture}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant={currentTheme.variant} onClick={resetTreeData}>
                Reset
              </Button>
            </Card.Footer>
          </Card>
          <StyledTree
            data={rootData}
            height={400}
            animated
            width={1400}
            duration={600}
            keyProp={'id'}
            gProps={{
              onClick: nodeClicked,
              fill: currentTheme.textColor,
              fontSize: 20,
              cursor: 'pointer',
            }}
            circleProps={{
              fill: 'black',
            }}
          ></StyledTree>
          <Footer currentTheme={currentTheme} />
        </StyledColumnContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default Contacts;
