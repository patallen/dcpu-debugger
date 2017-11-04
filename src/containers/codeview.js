import React from 'react';
import styled from 'styled-components';
import { spacegray } from '../constants';
import CodeLine from '../components/codeline';
import {lines} from '../fake/codes';

import { MenuHead } from '../components/menuhead';


const Styled = styled.div`
    height: 100%;
    flex-grow: 0;
    overflow-y: auto;
`;

export default class CodeView extends React.Component {
    render() {
        let converted = lines.map((line) => <CodeLine {...line} />)
        return (
            <Styled>
                <MenuHead text={'CODE'} />
                {converted}
            </Styled>
        )
    }
}
