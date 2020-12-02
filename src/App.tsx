import './App.css';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
