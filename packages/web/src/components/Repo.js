/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';

import { theme, SectionStyled } from '../styles';
import Icon from './Icon';
import Card from './Card';

const HeaderContainerStyled = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    justify-content: space-between;
    margin-bottom: 25px;

    p {
        font-size: 24px;
        font-weight: 700;
    }

    div {
        width: 120px;
        position: relative;

        button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 6px 12px;
            border-radius: 5px;
            background: transparent;
            color: ${theme.colors.white};
            border: 1px solid ${theme.colors.darkblue};
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all ease-in-out 0.2s;
            background: ${theme.bgColors.blue};

            &:hover {
                transition: all ease-in-out 0.2s;
                background: ${theme.bgColors.lightblue};
            }

            span {
                color: ${theme.colors.white};
                font-size: 14px;
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            width: 100%;
            position: absolute;
            border: 1px solid ${theme.colors.darkblue};
            border-radius: 5px;
            z-index: 2;
            background: ${theme.bgColors.blue};

            li {
                width: 100%;
                padding: 8px 12px;
                background: transparent;
                color: ${theme.colors.white};
                cursor: pointer;
                transition: all ease-in-out 0.2s;
                font-size: 14px;

                &:hover {
                    transition: all ease-in-out 0.2s;
                    background: ${theme.bgColors.lightblue};
                }
            }
        }
    }
`;

const ProjectListContainerStyled = styled.div`
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem;
        list-style: none;

        li {
            height: 100%;

            a {
                text-decoration: none;
            }
        }
    }
`;

const LIMIT = 8;
const defaultSortType = ['stars', 'forks', 'size'];

export default function Repo({ repoData, isLoading }) {
    const [sortType, setSortType] = useState('stars');
    const [userRepoData, setUserRepoData] = useState([]);
    const [isDropDownOpen, setDropDownOpen] = useState(false);

    const getSortedType = (sort) => {
        const type = {
            stars: 'stargazers_count',
            forks: 'forks_count',
            size: 'size',
        };

        const sortedProperty = type[sort];
        const filtered = repoData
            .filter((repo) => !repo.fork)
            .sort((a, b) => b[sortedProperty] - a[sortedProperty])
            .slice(0, LIMIT);

        setUserRepoData(filtered);
    };

    useEffect(() => {
        if (repoData.length) {
            getSortedType(sortType);
        }
    }, [repoData]);

    useEffect(() => {
        setDropDownOpen(false);
        getSortedType(sortType);
    }, [sortType]);

    return (
        <SectionStyled>
            {!isLoading ? (
                <>
                    <HeaderContainerStyled>
                        <p>Projects</p>

                        <div>
                            <button
                                type="button"
                                onClick={() => setDropDownOpen((prev) => !prev)}
                            >
                                {sortType}

                                {isDropDownOpen ? (
                                    <Icon icon={faCaretUp} />
                                ) : (
                                    <Icon icon={faCaretDown} />
                                )}
                            </button>

                            {isDropDownOpen && (
                                <ul>
                                    {defaultSortType.map((type, key) => (
                                        <li
                                            key={key}
                                            onClick={() => setSortType(type)}
                                        >
                                            {type}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </HeaderContainerStyled>

                    <ProjectListContainerStyled>
                        {userRepoData.length > 0 ? (
                            <FlipMove typeName="ul">
                                {userRepoData.map((repo) => (
                                    <li key={repo.id}>
                                        <Card cardData={repo} />
                                    </li>
                                ))}
                            </FlipMove>
                        ) : (
                            <p>No availble repositories!</p>
                        )}
                    </ProjectListContainerStyled>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </SectionStyled>
    );
}
