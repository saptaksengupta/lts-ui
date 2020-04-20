import React, { Fragment } from 'react';
import styled from 'styled-components';
import { DefaultContainerLayoutGrid } from '../../styled/CommonUtils';
import Board from '../../functional/Board';

const StyledBoardContainer = styled(DefaultContainerLayoutGrid)`
`;

const boardDetails = [
    {
        title: "Sports",
        description: "Some Dummy Description For Board and some extra added to check formation",
        lists: []
    },
    {
        title: "Sports",
        description: "Some Dummy Description For Board",
        lists: []
    },
    {
        title: "Sports",
        description: "Some Dummy Description For Board",
        lists: []
    },
    {
        title: "Sports",
        description: "Some Dummy Description For Board",
        lists: []
    } 
]

const TasklBoard = () => {

    const boards = boardDetails.map(board => {
        return (<Board boardDetails={board} />);
    });

    return (
        <Fragment>
            <StyledBoardContainer>
                {boards}
            </StyledBoardContainer>
        </Fragment>
    )
}

export default TasklBoard;