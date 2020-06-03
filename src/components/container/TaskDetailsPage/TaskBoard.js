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

const StyledEmptyBoardContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


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
    const { authState } = useContext(AuthContext);
    const { boards, dispatch } = useContext(BoardContext);
    const { responsiveState } = useContext(ResponsiveContext);
    const currentDevice = responsiveState.device;
    useEffect(() => {
        // TODO: Fetch the user details, and set it inside authContext
        getBoardsByUserId(authState.user.id, dispatch);

    }, []);


    const boardsArray = boards.map((board, index) => {
        if (currentDevice === SUPPORTED_DEVICES.MOBILE ||
            currentDevice === SUPPORTED_DEVICES.LEARGE_PC ||
            currentDevice === SUPPORTED_DEVICES.SMALL_PC) {
            return (<BoardSm boardDetails={board} key={board.id} itemIndex={index} />)
        }
    });


    return (
        <Fragment>
            {(
                (currentDevice === SUPPORTED_DEVICES.MOBILE ||
                    currentDevice === SUPPORTED_DEVICES.LEARGE_PC ||
                    currentDevice === SUPPORTED_DEVICES.SMALL_PC) &&
                boardsArray.length > 0
            ) ? (
                    <StyledBoardContainerSm>
                        {boardsArray}
                    </StyledBoardContainerSm>
                ) : (
                    <StyledEmptyBoardContainer>
                        <span style={{width: '250px', fontSize: '1em', textAlign: 'center', lineHeight: '1.5em'}}>
                            It's Empty, Let's get started by adding your first work item.
                        </span>
                    </StyledEmptyBoardContainer>
                )}
        </Fragment>
    )
}

export default TasklBoard;