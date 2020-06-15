import React, { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getBaseUrl, SOCKET_EVENTS, getSocketConnection } from '../../../Config';
import styled from 'styled-components';
import { DefaultContainerLayoutGrid, ContainerLayoutRow } from '../../styled/CommonUtils';
import Board from '../../functional/Board';
import { AuthContext } from '../../../context/AuthContext';
import { BoardContext } from '../../../context/BoardContext';
import { BOARD_ACTIONS } from '../../../reducers/BoardReducer';
import { ResponsiveContext } from '../../../context/ResponsiveContext';
import { SUPPORTED_DEVICES } from '../../../reducers/ResponsiveReducer';
import BoardSm from '../../functional/Board-sm';
import Loader from '../../../shared/loader/components/Loader';
import useLoader from '../../../shared/loader/hooks/useLoader';
import { useDraggable } from '../../../shared/dragAndDrop/hooks/useDraggable';

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


const getBoardsByUserId = (userId, dispatch, setIsLoading, hideLoader) => {
    setIsLoading(true);
    const url = `${getBaseUrl()}users/${userId}/boards/`;
    axios.get(url).then((resp) => {
        if (resp.data.data.length > 0) {
            const boards = resp.data.data;
            boards.map(board => {
                handleBoard(board, dispatch);
            });
        }
        setIsLoading(false);
        hideLoader()
    }).catch((err) => {
        console.log(err);
    });
}

const handleBoard = (board, dispatch) => {
    dispatch({ type: BOARD_ACTIONS.SET_BOARD, payload: board });
}

const TasklBoard = () => {
    const { authState } = useContext(AuthContext);
    const { boards, dispatch } = useContext(BoardContext);
    const { responsiveState } = useContext(ResponsiveContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isshown, showLoader, hideLoader] = useLoader();
    const [Draggable, DragOverlay] = useDraggable();

    const [overlayFlag, setOverlayFlag] = useState(false);

    useEffect(() => {
        const socketCon = getSocketConnection()
        socketCon.on(SOCKET_EVENTS.BOARD_ADDED, (data) => {
            handleBoard(data.data, dispatch)
        })

        socketCon.on(SOCKET_EVENTS.BOARD_DELETED, (data) => {
            dispatch({ type: BOARD_ACTIONS.REMOVE_BOARD, payload: { boardId: data.data } })
        })
    }, [])

    useEffect(() => {
        showLoader()
        getBoardsByUserId(authState.user.id, dispatch, setIsLoading, hideLoader);
    }, []);

    const showOverlay = () => {
        setOverlayFlag(true);
    }

    const hideOverlay = () => {
        setOverlayFlag(false);
    }

    const onDrop = (data) => {
        setOverlayFlag(false);
        makeBoardRemoveReq(data.boardDetails.id);
    }

    const makeBoardRemoveReq = (boardId) => {
        showLoader();
        setIsLoading(true);
        axios.delete(`${getBaseUrl()}boards/${boardId}`, { data: { modifiedBy: authState.user.id } })
            .then((resp) => {
                hideLoader()
                setIsLoading(false);
                if (resp.data.status == 200) {
                    console.log('deleted');
                }
            }).catch((err) => {
                setIsLoading(false);
                console.log(err);
            })
    }

    const boardsArray = boards.map((board, index) => {
        return (
            <BoardSm boardDetails={board}
                key={board.id}
                itemIndex={index}
                showOverlay={showOverlay}
                hideOverlay={hideOverlay}
            />
        )
    });

    const overlayProps = {
        showFlag: overlayFlag,
        onDrop: onDrop
    }

    return (
        <Fragment>
            {(boardsArray.length == 0 && !isLoading) ? (
                <StyledEmptyBoardContainer>
                    <span style={{ width: '250px', fontSize: '1em', textAlign: 'center', lineHeight: '1.5em' }}>
                        It's Empty, Let's get started by adding your first work item.
                </span>
                </StyledEmptyBoardContainer>
            ) : (
                    <StyledBoardContainerSm>
                        {boardsArray}
                    </StyledBoardContainerSm>
                )}
            <Loader isshown={isLoading} />
            <DragOverlay {...overlayProps}></DragOverlay>
        </Fragment>
    )
}

export default TasklBoard;