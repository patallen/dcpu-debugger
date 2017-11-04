import React from 'react';
import styled from 'styled-components';
import { spacegray, theme } from '../constants';

const linePadding = '0.2em 0';
const separationPadding = '1.2em';

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
        width: .5em;
    };
    &:after {
        content: "";
        width: 1em;
    };
    font-size: 1.1em;
`;

const LineNumber = styled.div`
    padding-right: ${separationPadding};
    color: ${theme.outline};
`;

const Instruction = styled.div`
    flex-grow: 1;
    color: ${theme.plaintext};
    padding-right: ${separationPadding};
`;

const Operation = styled.div`
    color: #CE537A;
    display: inline;
    font-weight: bold;
    padding-right: ${separationPadding};
`
const LineNote = styled.div`
    flex-grow: 0;
    color: ${spacegray.muted};
`;

const BreakPoint = styled.div`
    display: flex;
    flex-direction: vertical;
    flex-grow: 0;
    height: 0.6em;
    width: 0.6em;
    margin: 0.1em;
    margin-right: .5em;
    border: 1px solid ${theme.outline};
    border-radius: 50%;
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
