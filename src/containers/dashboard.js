import React from 'react';
import styled from 'styled-components';
import { theme } from '../constants';

const Styled = styled.div`
    background: ${theme.background};
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
        return <Styled></Styled>
    }
}
