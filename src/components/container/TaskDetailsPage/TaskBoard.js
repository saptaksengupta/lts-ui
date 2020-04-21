import React, { Fragment, useContext, useEffect } from 'react';
import axios from 'axios';
import { getBaseUrl } from '../../../Config';
import styled from 'styled-components';
import { DefaultContainerLayoutGrid } from '../../styled/CommonUtils';
import Board from '../../functional/Board';
import { AuthContext } from '../../../context/AuthContext';
import { BoardContext } from '../../../context/BoardContext';
import { BOARD_ACTIONS } from '../../../reducers/BoardReducer';

const StyledBoardContainer = styled(DefaultContainerLayoutGrid)`
`;


const getBoardsByUserId = (userId, dispatch) => {
    const url = `${getBaseUrl()}users/${userId}/boards/`;
    axios.get(url).then((resp) => {
        if(resp.data.data.length > 0) {
            const boards = resp.data.data;
            boards.map(board => {
                dispatch({type: BOARD_ACTIONS.SET_BOARD, payload: board});
            });
        }
    }).catch((err) => {
        console.log(err);
    });
}
const TasklBoard = () => {
    const { user } = useContext(AuthContext);
    const { boards, dispatch } = useContext(BoardContext);
    useEffect(() => {
        // TODO: Fetch the user details, and set it inside authContext
        getBoardsByUserId(user.id, dispatch);

    }, []);


    const boardsArray = boards.map(board => {
        return (<Board boardDetails={board} mode="edit" />);
    });

    return (
        <Fragment>
            <StyledBoardContainer>
                <Board mode="create" />
                {boardsArray}
            </StyledBoardContainer>
        </Fragment>
    )
}

export default TasklBoard;