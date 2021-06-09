import styled from 'styled-components';

import theme from './theme';

export const UserContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 100%;
`;

export const MainContainer = styled.div`
    display: flex;
    padding: 10px 50px;
    width: 100%;
    margin-top: 25px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 10px 10px;
    }
`;

export const LeftSideContainerStyled = styled.div`
    padding: 0 25px;
`;

export const ProfileContainerStyled = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const ProfileImageStyled = styled.img`
    height: 200px;
    width: 200px;
    display: block;
    border-radius: 5px;
    object-fit: cover;
    object-position: 50% 50%;
`;

export const ProfileUserHandlerStyled = styled.div`
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p,
    span {
        padding: 5px 0;
    }

    p {
        font-weight: 700;
        color: ${theme.colors.black};
        font-size: 24px;
    }

    a {
        font-weight: 900;
        color: ${theme.colors.darkblue};
        font-size: 16px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const ProfileBodyStyled = styled.div`
    max-width: 300px;
    width: 300px;

    p {
        font-weight: 100;
        font-size: 16px;
        line-height: 31px;
    }
`;

export const UserLinkStyled = styled.div``;

export const ProfileLinkStyled = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-bottom: 15px;

    li {
        display: flex;
        align-items: center;
        padding-left: 28px;
        padding-top: 15px;
        color: ${theme.colors.darkgrey};
        font-size: 14px;
        width: 100%;
        max-width: 100%;

        span {
            position: absolute;
            left: 0;
        }

        div,
        a {
            font-size: 14px;
        }

        a {
            &:hover {
                text-decoration: underline;
                color: ${theme.colors.darkblue};
                cursor: pointer;
            }
        }
    }
`;

export const OrgContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    padding: 15px 0;

    p {
        font-size: 18px;
        font-weight: 700;
    }
`;

export const UserOrgStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    li {
        display: inline-block;
        margin-right: 15px;
        height: 50px;
        width: 50px;
        border-radius: 5px;

        img {
            margin-right: 15px;
            height: 50px;
            width: 50px;
            display: block;
            border-radius: 5px;
            object-fit: cover;
            object-position: 50% 50%;
            background: ${theme.bgColors.white};
        }
    }

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem;
        justify-content: center;

        li {
            margin-right: 0px;
        }
    }
`;

export const RightSideContainerStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 25px;
    position: relative;
`;

export const ProfileUserAnalytic = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

    p {
        display: flex;
        align-items: center;
        margin-right: 5px;

        strong {
            margin: 0 5px;
            color: ${theme.colors.darkblue};
        }

        text-decoration: none;
        font-size: 12px;
    }

    @media (max-width: 768px) {
        justify-content: center;
        text-align: center;
    }
`;

export const ProjectContainerStyled = styled.div`
    p {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 25px;
    }

    div {
        display: grid;
        list-style: none;
        grid-gap: 25px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
`;

export const ActivityContainerStyled = styled.div``;
