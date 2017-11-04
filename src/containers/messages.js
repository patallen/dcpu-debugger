import React from 'react';
import styled from 'styled-components';
import * as consts from '../constants';
import { spacegray } from '../constants';

const Styled = styled.div`
    background: ${spacegray.darker};
    color: ${consts.accent};
    border-top: 1px solid ${spacegray.muted};
    width: 100%;
    height: 15%;
    padding: 10px;
    font-weight: 200;
`;

export default class Messages extends React.Component {
    render() {
        return <Styled>debugger ></Styled>
    }
}
