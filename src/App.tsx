import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './Pages/Home';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background:{
      default: '#000000',
    },
    text:{
      primary: '#ffffff',
      secondary: '#ffffff'
    },
  },
  overrides:{

  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
    button: {
      fontSize: 20,
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Home />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
