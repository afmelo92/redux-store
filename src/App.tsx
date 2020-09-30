import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Routes from './routes';

import GlobalStyle from './styles/global';
import { IState } from './store';

const App: React.FC = () => {
  const themeReducer = useSelector<IState, DefaultTheme>(
    state => state.themeReducer,
  );

  return (
    <ThemeProvider theme={themeReducer}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
