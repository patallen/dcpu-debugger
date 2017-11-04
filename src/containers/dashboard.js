import React from 'react';
import styled from 'styled-components';
import { spacegray } from '../constants';

const Styled = styled.div`
    background: ${spacegray.darkest};
    flex-grow: 1;
    max-width: 300px;
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
