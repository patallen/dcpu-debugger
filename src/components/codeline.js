import React from 'react';
import styled from 'styled-components';
import { spacegray } from '../constants';

const linePadding = '0.2em 0';
const separationPadding = '1em';

const Line = styled.div`
    width: 100%;
    display: flex;
    padding: ${linePadding};
    &:hover {
        cursor: pointer;
        background: #363D49;
    };
    &:before {
        content: "";
        width: 4px;
    };
    &:after {
        content: "";
        width: 4px;
    };
`;

const LineNumber = styled.div`
    padding-right: ${separationPadding};
`;

const Instruction = styled.div`
    flex-grow: 1;
    color: ${spacegray.plain};
    padding-right: ${separationPadding};
`;

const Operation = styled.div`
    color: ${spacegray.definition};
    display: inline;
    font-weight: bold;
    padding-right: ${separationPadding};
`
const LineNote = styled.div`
    flex-grow: 0;
    color: ${spacegray.muted};
`;

const BreakPoint = styled.div`
    flex-grow: 0;
`;

export default class CodeLine extends React.Component {
    render() {
        let {lineno, instruction, note, operands, breakpoint} = this.props;
        return (
            <Line>
                <BreakPoint breaking={breakpoint} />
                <LineNumber>{lineno}</LineNumber>
                <Instruction><Operation>{instruction}</Operation>{operands}</Instruction>
                <LineNote>{note}</LineNote>
            </Line>
        )
    }
}
