import React from 'react';
import styled from 'styled-components';
import { theme } from '../constants';

const Styled = styled.div`
    align-items: center;
    background: ${theme.highlight};
    border-top: 1px solid ${theme.outline};
    color: ${theme.plaintext};
    display: flex;
    font-size: 1.1em;
    height: 26px;
    text-transform: uppercase;
    width: 100%;
    padding-left: .6em;
`;

const Padded = styled.span`
    padding: ${props => props.padding};
`;
export const MenuHead = (props) => {
    return (
        <Styled>
            {props.text}
        </Styled>
    )
}
