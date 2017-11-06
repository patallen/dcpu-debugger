import React from "react";
import Debugger from "./containers/debugger";
import Messages from "./containers/messages";
import { theme } from "./constants";

import "./App.css";
import styled from "styled-components";

import router from "./router";

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
  display: flex;
  min-height: 40px;
  max-height: 40px;
  color: ${theme.plaintext};
  img {
    height: 100%;
  }
`;

const HeaderSection = styled.div`
  margin: 0 0.6em;
  display: flex;
  white-space: nowrap;
`;

const LogoImg = styled.img`display: block;`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.6em;
`;

const HeaderLogo = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-size: 2em;
  img {
    margin-left: -10px;
  }
`;
class ConnectionControls extends React.Component {
  render() {
    let { connection } = this.props;
    return (
      <HeaderSection>
        <HeaderItem>Disconnect</HeaderItem>
        <HeaderItem>Connected to: ws://localhost:9999/</HeaderItem>
      </HeaderSection>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Styled>
        <Header>
          <HeaderSection>
            <HeaderLogo>
              DeepBurger
              <LogoImg src={"logo.svg"} />
            </HeaderLogo>
          </HeaderSection>
          <ConnectionControls />
        </Header>
        <Debugger />
      </Styled>
    );
  }
}

export default App;
