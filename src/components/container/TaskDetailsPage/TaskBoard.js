import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Card } from '../../styled/cards';
import {DefaultContainerLayoutGrid} from '../../styled/CommonUtils';

const StyledBoardContainer = styled(DefaultContainerLayoutGrid)`
`;

const StyledBoards = styled(Card)`
    // margin: 20px 15px;
    min-height: 5em;
    background: #4b6cb7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #182848, #4b6cb7);
    background: linear-gradient(to left, #182848, #4b6cb7);
`;

const TasklBoard = () => {
    return (
        <Fragment>
            <StyledBoardContainer>
                <StyledBoards>
                    Sports
                </StyledBoards>
                <StyledBoards>
                    Picnic
                </StyledBoards>
                <StyledBoards>
                    School
                </StyledBoards>
                <StyledBoards>
                    School
                </StyledBoards>
                <StyledBoards>
                    Sports
                </StyledBoards>
                <StyledBoards>
                    Picnic
                </StyledBoards>
                <StyledBoards>
                    School
                </StyledBoards>
            </StyledBoardContainer>
        </Fragment>
    )
}

export default TasklBoard;