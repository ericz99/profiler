import React from 'react';
import styled from 'styled-components';

import { theme } from '../styles';

const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 5rem;
    color: ${theme.colors.darkgrey};
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    margin-top: 75px;

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 2rem 1rem;
        display: block;
        line-height: 32px;
    }
`;

const LinkStyled = styled.a`
    color: ${theme.colors.darkblue};
    font-size: 16px;
    padding: 5px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    &:hover,
    &:focus {
        text-decoration: underline;
    }
`;

export default function Footer() {
    return (
        <FooterStyled>
            <span>Built with</span>
            <LinkStyled
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                React.js
            </LinkStyled>
            &middot;
            <LinkStyled
                href="https://www.chartjs.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Chart.js
            </LinkStyled>
            &middot;
            <LinkStyled
                href="https://fontawesome.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Font Awesome
            </LinkStyled>
            &middot;
            <LinkStyled
                href="https://github.com/joshwcomeau/react-flip-move/"
                target="_blank"
                rel="noopener noreferrer"
            >
                React Flip Move
            </LinkStyled>
            &middot;
            <LinkStyled
                href="https://www.styled-components.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Styled Components
            </LinkStyled>
            <span>and more...</span>
        </FooterStyled>
    );
}
