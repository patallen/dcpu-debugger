import React from 'react';
import styled from 'styled-components';
import { theme } from '../constants';
import { MenuHead } from '../components/menuhead';

const Styled = styled.div`
    background: ${theme.background};
    border-left: 1px solid ${theme.outline};
    flex-grow: 1;
    min-width: 300px;
    &::before {
        content: "adklfjdaslkfj",
        width: 100px;
        height: 100px;
        display: block;
    }
`;
export default class Dashboard extends React.Component{
    render() {
        return (
            <Styled>
                <MenuHead text="Breakpoints" />
                <MenuHead text="Tracepoints" />
                <MenuHead text="History" />
            </Styled>
        )
    }
}
