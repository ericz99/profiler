import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {
    faClock,
    faStar,
    faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

import { langColors } from '../utils';
import { theme } from '../styles';
import Icon from './Icon.js';

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    transition: all ease-in-out 0.2s;
    transform: translateY(0);

    &:hover {
        transition: all ease-in-out 0.2s;
        transform: translateY(-5px);
    }

    a {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 2rem;
        height: 100%;
        color: rgb(88, 96, 105);
        background-color: rgb(255, 255, 255);
        border-radius: 0.25rem;
        box-shadow: rgb(0 0 0 / 20%) 0px 10px 30px -15px;
        transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
    }
`;

const CardHeaderStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    div {
        padding: 3px;
        color: ${theme.colors.darkgrey};
        font-size: 14px;
    }
`;

const CardBodyStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px 0;
`;

const CardBodyTitle = styled.h1`
    font-weight: 900;
    color: ${theme.colors.blue};
    font-size: 18px;
    flex: 1;
    margin-bottom: 10px;
`;

const CardBodyDesc = styled.h1`
    font-weight: 100;
    color: ${theme.colors.darkgrey};
    font-size: 12px;
    flex: 1;
`;

const CardFooter = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    justify-content: space-between;
`;

const CardLeftFooter = styled.div`
    display: flex;
    flex: 1;
    font-size: 12px;
    font-weight: 100;

    .icon {
        display: flex;
        align-items: center;
        margin-right: 0.75rem;
    }
`;

const CardRightFooter = styled.div`
    span {
        font-weight: 100;
        font-size: 12px;
        color: ${theme.colors.darkgrey};
    }
`;

export default function Card({ cardData }) {
    return (
        <CardStyled>
            <a href={cardData.html_url} target="__blank">
                <CardHeaderStyled>
                    <Icon icon={faClock} />
                    <div>
                        {moment(cardData.created_at).format('MMM DD YYYY')}
                    </div>
                </CardHeaderStyled>

                <CardBodyStyled>
                    <CardBodyTitle>{cardData.name}</CardBodyTitle>
                    <CardBodyDesc>{cardData.description}</CardBodyDesc>
                </CardBodyStyled>

                <CardFooter>
                    <CardLeftFooter>
                        <span className="icon">
                            <div
                                className="lang"
                                style={{
                                    backgroundColor:
                                        langColors[cardData.language],
                                }}
                            />
                            {cardData.language}
                        </span>

                        <span className="icon">
                            <Icon icon={faStar} />
                            {cardData.stargazers_count}
                        </span>

                        <span className="icon">
                            <Icon icon={faCodeBranch} />
                            {cardData.forks_count}
                        </span>
                    </CardLeftFooter>

                    <CardRightFooter>
                        <span>{cardData.size} KB</span>
                    </CardRightFooter>
                </CardFooter>
            </a>
        </CardStyled>
    );
}
