import React from 'react';
import Debugger from './containers/debugger';
import Messages from './containers/messages';
import { theme } from './constants';

import './App.css';
import styled from 'styled-components';

import router from './router';

const Styled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${theme.background};
`;

const Header = styled.div`
  max-height: 60px;
  min-height: 60px;
  border-bottom: 1px solid ${theme.outline};
  flex-grow: 1;
`;
class App extends React.Component {
  render() {
    return (
      <Styled>
        <Header />
        <Debugger />
      </Styled>
    );
  }
}

export default App;
