import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../styles';

const IconStyled = styled.span`
    padding: 3px;
    font-size: ${(props) => props.size}px;
    color: ${theme.colors.darkgrey};
`;

export default function Icon({ icon, size }) {
    return (
        <IconStyled size={size}>
            <FontAwesomeIcon icon={icon} />
        </IconStyled>
    );
}
