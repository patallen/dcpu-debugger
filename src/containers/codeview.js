import React from 'react';
import styled from 'styled-components';
import { spacegray } from '../constants';
import CodeLine from '../components/codeline';
import {lines} from '../fake/codes';


const Styled = styled.div`
    height: 100%;
    background: ${spacegray.dark};
    flex-grow: 0;
`;

export default class CodeView extends React.Component {
    render() {
        let converted = lines.map((line) => <CodeLine {...line} />)
        return (<Styled>
            {converted}
        </Styled>)
    }
}
