/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    faMapMarkerAlt,
    faLink,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { useAlert } from 'react-alert';

import * as S from './styles/AppStyles';
import { Header, Footer, Icon, Repo, Activity } from './components';
import { scrapeActivity } from './utils';

export default function App() {
    const [isMount, setMount] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('yyx990803');
    const [userOrgData, setUserOrgData] = useState([]);
    const [userData, setUserData] = useState({});
    const [userRepoData, setUserRepoData] = useState([]);
    const [activityData, setActivityData] = useState(null);
    const alert = useAlert();

    const fetchActivityData = async () => {
        const { data } = await scrapeActivity(searchValue);
        setActivityData(data);
    };

    const fetchRepoData = async () => {
        // # get projects
        const { data } = await axios({
            url: `https://api.github.com/users/${searchValue}/repos?per_page=100`,
            method: 'GET',
        });

        // # set to project repo
        setUserRepoData(data);
    };

    const fetchUserData = async () => {
        // # get user
        const { data } = await axios({
            url: `https://api.github.com/users/${searchValue}`,
            method: 'GET',
        });

        // # set to user data
        setUserData(data);
    };

    const fetchUserOrg = async () => {
        // # get user
        const { data } = await axios({
            url: `https://api.github.com/users/${searchValue}/orgs`,
            method: 'GET',
        });

        // # set to user data
        setUserOrgData(data);
    };

    const fetchAll = async () => {
        try {
            await Promise.all([
                fetchRepoData(),
                fetchUserData(),
                fetchUserOrg(),
                fetchActivityData(),
            ]);
            setLoading(false);
        } catch (e) {
            if (e) {
                alert.show(`Failed to request user: ${searchValue}`);
            }
        }
    };

    useEffect(() => {
        if (!isMount) {
            setLoading(true);
            fetchAll();
            setMount(true);
        }
    }, [isMount]);

    const onKeyPress = (e) => {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            setLoading(true);
            fetchAll();
        }
    };

    return (
        <S.UserContainerStyled>
            <Header
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onKeyPress={onKeyPress}
            />

            <S.MainContainer>
                <S.LeftSideContainerStyled>
                    <S.ProfileContainerStyled>
                        <S.ProfileImageStyled
                            src={userData.avatar_url}
                            alt="user_profile"
                        />

                        <S.ProfileUserHandlerStyled>
                            <p>{userData.name}</p>
                            <a
                                href={`https://github.com/${userData.login}`}
                                target="__blank"
                            >
                                @{userData.login}
                            </a>
                        </S.ProfileUserHandlerStyled>

                        <S.ProfileUserAnalytic>
                            <p>
                                <Icon icon={faUsers} />
                                <strong>
                                    {userData?.followers?.toLocaleString()}
                                </strong>
                                followers
                            </p>{' '}
                            ·
                            <p>
                                <strong>
                                    {userData?.following?.toLocaleString()}
                                </strong>
                                following
                            </p>{' '}
                            ·
                            <p>
                                <strong>
                                    {userData?.public_repos?.toLocaleString()}
                                </strong>
                                repos
                            </p>
                        </S.ProfileUserAnalytic>

                        <S.ProfileBodyStyled>
                            <p>{userData?.bio}</p>
                        </S.ProfileBodyStyled>

                        <S.ProfileLinkStyled>
                            {userData?.location && (
                                <li>
                                    <Icon icon={faMapMarkerAlt} size={18} />
                                    <div>{userData.location}</div>
                                </li>
                            )}
                            {userData?.blog && (
                                <li>
                                    <Icon icon={faLink} size={18} />

                                    <a href={userData.blog} target="__blank">
                                        {userData.blog}
                                    </a>
                                </li>
                            )}
                        </S.ProfileLinkStyled>

                        {userOrgData && userOrgData.length > 0 && (
                            <S.OrgContainerStyled>
                                <p>Teams</p>

                                <S.UserOrgStyled>
                                    {userOrgData.map((data) => (
                                        <li key={data.id}>
                                            <a
                                                href={`https://github.com/${data.login}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={data.avatar_url}
                                                    alt="org_avatar_url"
                                                />
                                            </a>
                                        </li>
                                    ))}
                                </S.UserOrgStyled>
                            </S.OrgContainerStyled>
                        )}
                    </S.ProfileContainerStyled>
                </S.LeftSideContainerStyled>

                {!isLoading ? (
                    <S.RightSideContainerStyled>
                        {userRepoData.length && (
                            <Repo
                                repoData={userRepoData}
                                isLoading={isLoading}
                            />
                        )}

                        {activityData && (
                            <Activity
                                activityData={activityData}
                                isLoading={isLoading}
                            />
                        )}
                    </S.RightSideContainerStyled>
                ) : (
                    <p>Loading...</p>
                )}
            </S.MainContainer>

            <Footer />
        </S.UserContainerStyled>
    );
}
