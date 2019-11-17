import React from 'react';
import {Page, Toolbar} from 'react-onsenui';

import {Title} from './Home.styles';

const Home = () => (
  <Page
    renderToolbar={() => <Toolbar>
      <Title className="left">Welcome to Works Maybe</Title>
    </Toolbar>}>
    <p>Atleast this works hopefully</p>
  </Page>
);

export default Home;
