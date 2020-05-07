import React, { Fragment, useContext, useEffect } from 'react';
import axios from 'axios';
import { getBaseUrl } from '../../../Config';
import styled from 'styled-components';
import { DefaultContainerLayoutGrid, ContainerLayoutRow } from '../../styled/CommonUtils';
import Board from '../../functional/Board';
import { AuthContext } from '../../../context/AuthContext';
import { BoardContext } from '../../../context/BoardContext';
import { BOARD_ACTIONS } from '../../../reducers/BoardReducer';
import { ResponsiveContext } from '../../../context/ResponsiveContext';
import { SUPPORTED_DEVICES } from '../../../reducers/ResponsiveReducer';
import BoardSm from '../../functional/Board-sm';

const StyledBoardContainer = styled(DefaultContainerLayoutGrid)`
`;

const StyledBoardContainerSm = styled(ContainerLayoutRow)`
    overflow-x: auto;
    display:flex;
    min-height: 100%;
    width: 100%;
    min-width: 100%;
    // padding-bottom: 2em;
`


const getBoardsByUserId = (userId, dispatch) => {
    const url = `${getBaseUrl()}users/${userId}/boards/`;
    axios.get(url).then((resp) => {
        if (resp.data.data.length > 0) {
            const boards = resp.data.data;
            boards.map(board => {
                dispatch({ type: BOARD_ACTIONS.SET_BOARD, payload: board });
            });
        }
    }).catch((err) => {
        console.log(err);
    });
}
const TasklBoard = () => {
    const { user } = useContext(AuthContext);
    const { boards, dispatch } = useContext(BoardContext);
    const { responsiveState } = useContext(ResponsiveContext);
    const currentDevice = responsiveState.device;
    useEffect(() => {
        // TODO: Fetch the user details, and set it inside authContext
        getBoardsByUserId(user.id, dispatch);

    }, []);


    const boardsArray = boards.map( (board) => {
        if (currentDevice === SUPPORTED_DEVICES.MOBILE) {
            return (<BoardSm boardDetails={board} key={board.id} />)
        } else {
            return (<Board boardDetails={board} mode="edit" key={board.id} />);
        }
    });


    return (
        <Fragment>
            {(currentDevice === SUPPORTED_DEVICES.MOBILE) ? (
                <StyledBoardContainerSm>
                    {boardsArray}
                </StyledBoardContainerSm>
            ) : null}
        </Fragment>
    )
}

export default TasklBoard;