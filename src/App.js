import React from 'react';
import Debugger from './containers/debugger';
import Messages from './containers/messages';
import * as consts from './constants';

import './App.css';
import styled from 'styled-components';

import router from './router';

console.log(router.registry);
const Styled = styled.div`
  width: 100%;
  height: 100%;
  color: ${consts.white};
`;

class App extends React.Component {
  render() {
    return (
      <Styled>
        <Debugger />
        <Messages />
      </Styled>
    );
  }
}

export default App;
