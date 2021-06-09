import React from 'react';
import Skel, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';

import { theme } from '../styles';

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

export default function Skeleton() {
    return (
        <SkeletonTheme highlightColor="#6e7c7c">
            <CardStyled>
                <a href="/#">
                    <CardHeaderStyled>
                        <Skel height={5} width={5} />

                        <div>
                            <Skel height={20} width={20} />
                        </div>
                    </CardHeaderStyled>
                    <CardBodyStyled>
                        <CardBodyTitle>
                            <Skel height={20} width={20} />
                        </CardBodyTitle>
                        <CardBodyDesc>
                            <Skel height={20} width={20} />
                        </CardBodyDesc>
                    </CardBodyStyled>
                    <CardFooter>
                        <CardLeftFooter>
                            <span className="icon">
                                <Skel height={20} width={20} />
                            </span>

                            <span className="icon">
                                <Skel height={5} width={5} />
                            </span>

                            <span className="icon">
                                <Skel height={5} width={5} />
                            </span>
                        </CardLeftFooter>

                        <CardRightFooter>
                            <Skel height={20} width={20} />
                        </CardRightFooter>
                    </CardFooter>
                </a>
            </CardStyled>
        </SkeletonTheme>
    );
}
