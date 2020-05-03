//Packages
import React, { useContext, useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
import { Alert, Button } from 'react-bootstrap';
import { MicFill } from 'react-bootstrap-icons';

//Contexts
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import { LoginContext } from './contexts/LoginContext';

//Components
import AppTheme from '../static/util/AppTheme';

//Sytled Components
import {
  BackgroundContainer,
  StyledColumnContainer,
} from './style/LayoutElements';
import { Textarea, MicrophonAlert } from './style/LoginSiteElements';

//Images
import WelcomePic from '../static/img/Welcome.gif';

const LoginSite = (props) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const { setHasPassword } = useContext(LoginContext);

  const [value, setValue] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
      if (result === 'mellon') {
        moveToHomePage();
      }
    },
  });

  const handleTextAreaChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === 'mellon') {
      moveToHomePage();
    }
  };

  const moveToHomePage = () => {
    setHasPassword(true);
    setTimeout(function () {
      props.history.push('/home-of-the-sprints');
    }, 1500);
  };

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer style={{ backgroundColor: 'rgb(37, 39, 38)' }}>
        <StyledColumnContainer>
          <img
            src={WelcomePic}
            alt="welcomepic"
            style={{ with: '25rem', height: '25rem' }}
          ></img>
          <Alert variant={currentTheme.variant}>
            <Alert.Heading className="text-center">
              "It's a riddle. Speak friend and enter. What's the Elvish word for
              friend?"
            </Alert.Heading>
          </Alert>
          <Textarea value={value} onChange={handleTextAreaChange} />
          <Button
            variant={currentTheme.variant}
            onMouseDown={listen}
            onMouseUp={stop}
          >
            Push to talk <MicFill />
          </Button>
          {listening && <MicrophonAlert>Go ahead I'm listening</MicrophonAlert>}
        </StyledColumnContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default LoginSite;
