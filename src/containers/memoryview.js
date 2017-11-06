import React from 'react';
import styled from 'styled-components';
import * as consts from '../constants';
import { theme } from '../constants';
import { MenuHead } from '../components/menuhead';
import memory from '../fake/memory';

const Styled = styled.div`
    height: 100%;
    border-left: 1px solid ${theme.outline};
    color: ${theme.plaintext};
    flex-grow: 2;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    display: flex;
    border-right: ${theme.outline};
`;

class Cell extends React.Component {
    render(){
        let { value } = this.props;
        let string = value.toString(16)
        let ret = string.slice(string.length - 3, string.length-1).toUpperCase().padStart(2, "00");
        return <div className="cell">{ret}</div>
    }
}


const MemBox = styled.div`
    width: 600px;
    height: 100%;
`;

export default class MemoryView extends React.Component {
    render() {
        let cells = memory.map((value, idx) => <Cell key={idx} value={value} /> );
        return (
        <Styled>
            <MenuHead text="Registers" />
            <MenuHead text="Memory" />
            <MemBox>
                {cells}
            </MemBox>
        </Styled>)
    }
}
