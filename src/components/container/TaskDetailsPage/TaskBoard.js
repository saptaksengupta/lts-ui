import React, { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getBaseUrl, SOCKET_EVENTS, getSocketConnection } from '../../../Config';
import styled from 'styled-components';
import { DefaultButton } from '../../styled/Buttons';
import { AddIcon } from '../../styled/Icons';
import styles from './taskDetails.module.css';
import { DefaultContainerLayoutGrid, ContainerLayoutRow } from '../../styled/CommonUtils';
import { AuthContext } from '../../../context/AuthContext';
import { BoardContext } from '../../../context/BoardContext';
import { BOARD_ACTIONS } from '../../../reducers/BoardReducer';
import { ResponsiveContext } from '../../../context/ResponsiveContext';
import { SUPPORTED_DEVICES } from '../../../reducers/ResponsiveReducer';
import BoardSm from '../../functional/Board-sm';
import Loader from '../../../shared/loader/components/Loader';
import useLoader from '../../../shared/loader/hooks/useLoader';
import { useDraggable } from '../../../shared/dragAndDrop/hooks/useDraggable';
import useOverlayoptions from '../../../shared/overlayOptions/hooks/useOverlayoptions';
import AddBoardModal from './AddBoardModal';

import CustomModal from '../../../shared/modal/components/CustomModal';
import useModal from "../../../shared/modal/hooks/useModal";

import { useBottomSheet } from '../../../shared/bottomSheet/hooks/useBottomSheet';

const StyledBoardContainer = styled(DefaultContainerLayoutGrid)`
`;

const CircularButton = styled(DefaultButton)`
    border-radius: 50%;
    height: 4em;
    width: 4em;
    background: #4b6cb7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #182848, #4b6cb7);
    background: linear-gradient(to left, #182848, #4b6cb7);
    display: flex;
    justify-content: center;
    align-items:center;
    cursor:pointer;
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
    const [toggleOverlay, OverLayWithOptions] = useOverlayoptions(false);
    const [modalOpen, setModalOpen, toggleModal] = useModal();
    const [BottomSheet, toggleBottomSheet] = useBottomSheet()
    const [overlayFlag, setOverlayFlag] = useState(false);

    const [boardModalOptionns, setBoardModalOptionns] = useState();

    const currentDevice = responsiveState.device;

    const onAddBoardIconClicked = () => {
        setBoardModalOptionns({});
        if (currentDevice === SUPPORTED_DEVICES.MOBILE) {
            toggleBottomSheet()
        } else {
            toggleModal()
        }
    }

    useEffect(() => {
        const socketCon = getSocketConnection()
        socketCon.on(SOCKET_EVENTS.BOARD_ADDED, (data) => {
            handleBoard(data.data, dispatch)
        })

        socketCon.on(SOCKET_EVENTS.BOARD_DELETED, (data) => {
            // dispatch({ type: BOARD_ACTIONS.REMOVE_BOARD, payload: { boardId: data.data } })
            dispatch({type: BOARD_ACTIONS.EMPTY_BOARD, payload: {}});
            getBoardsByUserId(authState.user.id, dispatch, setIsLoading, hideLoader);
        })

        socketCon.on(SOCKET_EVENTS.BOARD_UPDATED, (data) => {
            // dispatch({ type: BOARD_ACTIONS.UPDATED_BOARD, payload: { board: data.data } })
            dispatch({type: BOARD_ACTIONS.EMPTY_BOARD, payload: {}});
            getBoardsByUserId(authState.user.id, dispatch, setIsLoading, hideLoader);
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

    const onModifiBoardClicked = (board) => {
        setBoardModalOptionns({
            update: true,
            data: board
        })
        if (currentDevice === SUPPORTED_DEVICES.MOBILE) {
            toggleBottomSheet()
        } else {
            toggleModal()
        }
    }

    const onLongClicked = (board) => {
        toggleOverlay({
            btnOne: {
                data: board,
                name: `Update`,
                callBack: onModifiBoardClicked
            },
            btnTwo: {
                data: board.id,
                name: `Delete`,
                callBack: makeBoardRemoveReq
            }
        })
    }

    const boardsArray = boards.map((board, index) => {
        return (
            <BoardSm boardDetails={board}
                key={board.id}
                itemIndex={index}
                showOverlay={showOverlay}
                hideOverlay={hideOverlay}
                toggleOverlay={() => onLongClicked(board)}
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
            <div className={styles.bottomRightContainer} onClick={() => onAddBoardIconClicked()}>
                <CircularButton className={styles.circularPrimayBtn} primary>
                    <AddIcon height="1.5em" width="1.5em" />
                </CircularButton>
            </div>
            <CustomModal width="550px" height="50%" title={boardModalOptionns && boardModalOptionns.update === true ? 'Update Board Details' : 'Add board'} isshown={modalOpen} handleClose={() => toggleModal()}>
                <AddBoardModal onClose={toggleModal} options={boardModalOptionns} />
            </CustomModal>
            <BottomSheet>
                <AddBoardModal onClose={toggleBottomSheet} options={boardModalOptionns} />
            </BottomSheet>
            <Loader isshown={isLoading} />
            <DragOverlay {...overlayProps}></DragOverlay>
            <OverLayWithOptions></OverLayWithOptions>
        </Fragment>
    )
}

export default TasklBoard;