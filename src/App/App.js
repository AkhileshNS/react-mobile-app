import React from 'react';
import {Global} from '@emotion/core';

import Home from 'Home/Home';
import {AppContainer} from './App.styles';
import {globalStyles} from 'global/styles';

function App() {
  return (
    <AppContainer>
      <Global styles={globalStyles} />
      <Home />
    </AppContainer>
  );
}

export default App;
