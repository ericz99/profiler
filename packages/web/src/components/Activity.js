import React, { useState } from 'react';
import styled from 'styled-components';
import { faChartLine, faChartBar } from '@fortawesome/free-solid-svg-icons';

import { SectionStyled } from '../styles';
import Chart from './Chart';
import Icon from './Icon';

const HeaderContainerStyled = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    justify-content: space-between;

    p {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
    }
`;

export default function Activity({ activityData, isLoading }) {
    const [switchMode, setMode] = useState('line');

    const toggleMode = (type) => setMode(type);

    return (
        <SectionStyled>
            <HeaderContainerStyled>
                <p>Activity</p>
            </HeaderContainerStyled>

            <div class="toggle-group">
                <span
                    className={`toggle ${switchMode === 'bar' && 'active'}`}
                    onClick={() => toggleMode('bar')}
                >
                    <Icon icon={faChartBar} />
                </span>

                <span
                    className={`toggle ${switchMode === 'line' && 'active'}`}
                    onClick={() => toggleMode('line')}
                >
                    <Icon icon={faChartLine} />
                </span>
            </div>
            <div className="chart-data">
                <Chart activityData={activityData} type={switchMode} />
            </div>
        </SectionStyled>
    );
}
