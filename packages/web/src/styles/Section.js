import styled from 'styled-components';

export default styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    height: auto;
    width: auto;
    margin-bottom: 25px;

    .toggle-group {
        display: flex;
        justify-content: flex-end;

        .toggle {
            padding: 12px 14px;
            margin-left: 15px;
            cursor: pointer;

            &.active {
                background: #ffffff;
            }
        }
    }

    .chart-data {
        position: relative;
        display: flex;
        flex-direction: column;
        background: #ffffff;
        padding: 15px;

        canvas {
            width: 100%;
            height: 350px !important;
        }
    }
`;
