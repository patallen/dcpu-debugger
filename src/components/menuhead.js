import React from 'react';
import styled from 'styled-components';
import { theme } from '../constants';

const Styled = styled.div`
    font-size: 1.2em;
    display: flex;
    align-items: center;
    height: 30px;
    width: 100%;
    border-top: 1px solid ${theme.outline};
    color: ${theme.plaintext};
    background: ${theme.highlight};
`;

const Padded = styled.span`
    padding: ${props => props.padding};
`;
export const MenuHead = (props) => {
    return (
        <Styled>
            <Padded padding={"0 1em"} >{props.text}</Padded>
        </Styled>
    )
}
