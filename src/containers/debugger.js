import React from 'react';
import styled from 'styled-components';
import * as consts from '../constants';
import Dashboard from './dashboard';
import CodeView from './codeview';
import MemoryView from './memoryview';

const Styled = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-wrap: nowrap;
`;

export default class Debugger extends React.Component {
    render() {
        return (
            <Styled>
                <CodeView />
                <MemoryView />
                <Dashboard />
            </Styled>
        )
    }
}
