import React from 'react';

import styles from '../container/TaskDetailsPage/taskDetails.module.css';
import styled from 'styled-components';

import { Card, DefaultCard } from '../styled/cards';
import { ContainerLayoutRow, ContainerLayoutColumn } from '../styled/CommonUtils';
import { GroceriesIcon } from '../styled/Icons';

const StyledBoards = styled(DefaultCard)`
    min-width: 22em;
    max-width: 22em;
    height: 28em;
    // background: #4b6cb7;  /* fallback for old browsers */
    // background: -webkit-linear-gradient(to left, #182848, #4b6cb7);
    // background: linear-gradient(to left, #182848, #4b6cb7);
    padding:0px;
    cursor:pointer;
    margin-left: 2em;
    box-shadow: none;
    border-radius: 20px;
`;

const StyledCardHeader = styled(ContainerLayoutRow)`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    align-items: flex-start;
`;

const StyledDescContainer = styled.div`
    margin-left: 1em;
    margin-top: 2em;
    font-weight: 400;
    max-width: 100%;
    color: gray;
`;

const BoardSm = (props) => {
    return (
        <StyledBoards>
            <StyledCardHeader className={styles.curvedCardBg}>
                <ContainerLayoutRow style={{ padding: '1em', fontSize: '1.6em' }}>
                    Sports
                </ContainerLayoutRow>
                <ContainerLayoutRow alignment="end" style={{ paddingTop: '1em' }}>
                    <GroceriesIcon width='11em' height='11em' fill="#efefef"></GroceriesIcon>
                </ContainerLayoutRow>
            </StyledCardHeader>
            <div>
                <StyledDescContainer>
                    Things That are imprtant for tomorrow's sports events in my School.
                </StyledDescContainer>
            </div>
        </StyledBoards>
    )
}

export default BoardSm;