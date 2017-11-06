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
  padding: 0.4em 0;
  background: ${theme.outline};
  justify-content: space-between;
  flex-grow: 1;
  display: flex;
  min-height: 50px;
  border-bottom: 1px solid ${theme.highlight};
  color: ${theme.plaintext};
  img {
    height: 100%;
  }
`;

const HeaderSection = styled.div`
  margin: 0 .6em;
  display: flex;
  white-space: nowrap;
`;

const LogoImg = (props) => {
  return <img style={{"display": "block"}} src="logo.svg"></img>
};

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 .6em;
`;
class ConnectionControls extends React.Component {
  render() {
    let {connection} = this.props;
    return (
      <HeaderSection>
        <HeaderItem>Disconnect</HeaderItem>
        <HeaderItem>Connected to: ws://localhost:9999/</HeaderItem>
      </HeaderSection>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Styled>
        <Header>
          <HeaderSection>
           <LogoImg />
           <HeaderItem><h1>DEEPBUGGER</h1></HeaderItem>
          </HeaderSection>
          <ConnectionControls />
        </Header>
        <Debugger />
      </Styled>
    );
  }
}

export default App;
