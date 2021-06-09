import React from 'react';
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { theme } from '../styles';
import Icon from './Icon.js';

const HeaderStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    height: 60px;
    background: ${theme.bgColors.white};

    @media (max-width: 768px) {
        padding: 10px 25px;
    }
`;

const FormControl = styled.div`
    display: flex;
    max-width: 750px;
    width: 750px;
    margin: 0 auto;
    align-items: center;
`;

const InputStyled = styled.input`
    flex: 1;
    width: 100%;
    border: none;
    margin-left: 25px;
    font-size: 16px;
    padding: 15px 0;
    color: ${theme.colors.darkgrey};
`;

export default function Header({ searchValue, setSearchValue, onKeyPress }) {
    return (
        <HeaderStyled>
            <FormControl>
                <Icon icon={faSearch} size={18} />

                <InputStyled
                    type="text"
                    name="searchName"
                    placeholder="Search..."
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyPress={onKeyPress}
                    required
                />
            </FormControl>
        </HeaderStyled>
    );
}
