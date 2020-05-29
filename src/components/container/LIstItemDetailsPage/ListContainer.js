import React, { useReducer, useContext, useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import styles from "./listItem.module.css";
import styled from 'styled-components';
import ListItem from '../../functional/ListItem';
import { ContainerLayoutRow, ContainerLayoutColumn } from '../../styled/CommonUtils';
import ListContextProvider, { ListContext } from '../../../context/ListItemContext';
import { LIST_ACTIONS } from '../../../reducers/ListReducer';
import { getBaseUrl, getSocketBaseUrl, SOCKET_EVENTS } from '../../../Config';
import { CircularButton } from '../../styled/Buttons';
import { Card } from '../../styled/cards';
import { AddIcon, TrashIcon } from '../../styled/Icons';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';


const AddNewListForm = styled(Card)`
    border-radius: 0px;
    padding: 0;
`;

const ListContainer = (props) => {
    const { authState } = useContext(AuthContext);
    const [newTodoDesc, setNewTodoDesc] = useState('');
    const { listItemState, dispatch } = useContext(ListContext);
    const { currentBoard } = props;

    const onTodoAddBtnClicked = () => {
        axios
            .post(`${getBaseUrl()}boards/${currentBoard.id}/list-items`, { userId: authState.user.id, description: newTodoDesc })
            .then((resp) => {
                if (resp.data.data) {
                    const listItem = resp.data.data;
                    // dispatch({ type: LIST_ACTIONS.SET_LIST, payload: { listItem } });
                    dispatch({ type: LIST_ACTIONS.SET_CURRENT_BOARD, payload: { currentBoard: props.currentBoard } });
                    setNewTodoDesc('');
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    useEffect(() => {
        const socketUrl = getSocketBaseUrl('list-and-boards');
        const socketCon = socketIOClient(socketUrl);
        socketCon.on(SOCKET_EVENTS.LIST_ITEM_ADDED, handleOnListAdd);

        socketCon.on(SOCKET_EVENTS.LIST_ITEM_DELETED, (data) => {
            const listItemId = data.data;
            dispatch({ type: LIST_ACTIONS.REMOVE_LIST, payload: { listItemId } });
        });

        socketCon.on(SOCKET_EVENTS.LIST_ITEM_DESC_UPDATED, (data) => {
            const listItem = data.data;
            const listItemId = listItem.id;
            dispatch({ type: LIST_ACTIONS.EDIT_DESCRIPTION, payload: { listItemId, listItem } });
        });

        socketCon.on(`${SOCKET_EVENTS.LIST_ITEM_STATUS_UPDATED}`, (data) => {
            const listItem = data.data;
            const listItemId = listItem.id;
            dispatch({ type: LIST_ACTIONS.CHANGE_STATUS, payload: { listItemId, listItem } });
        });

        return () => {
            // socketCon.removeListener(SOCKET_EVENTS.LIST_ITEM_ADDED, handleOnListAdd);
        };
    }, []);

    useEffect(() => {
        props.listItems.map(listItem => dispatch({ type: LIST_ACTIONS.SET_LIST, payload: { listItem } }));
        dispatch({ type: LIST_ACTIONS.SET_CURRENT_BOARD, payload: { currentBoard: props.currentBoard } });
    }, [props.listItems, props.currentBoard]);


    const handleOnListAdd = (data) => {
        const listItem = data.data;
        dispatch({ type: LIST_ACTIONS.SET_LIST, payload: { listItem } });
    }

    const onAddListIconClicked = () => {
        // TODO: Open Add list dialog...
    }

    const itemListJsx = listItemState.listItems.map((listItem, index) => {
        return (<ListItem key={index} listItem={listItem} itemIndex={index} />)
    })

    return (
        <div className={styles.circularContainer}>
            <div className={styles.addListBtnDiv}>
                <CircularButton primary className={styles.addListBtn} onClick={() => {onAddListIconClicked()}}>
                    <AddIcon height="1.5em" fill="#efefef"></AddIcon>
                </CircularButton>
            </div>
            <div className={styles.timeLineContainer}>
                <ContainerLayoutRow>
                    <ContainerLayoutColumn style={{ flex: 1, margin: '0.5em 2em 0 0' }} alignment="center">
                        {itemListJsx}
                    </ContainerLayoutColumn>
                </ContainerLayoutRow>
            </div>
            {/* <AddNewListForm className={styles.addNewListContainer}>
                <ContainerLayoutRow>
                    <ContainerLayoutRow style={{ padding: '1em' }}>
                        <input type="text" placeholder="Let's add Something" className={styles.titleInput} value={newTodoDesc} onChange={(e) => { setNewTodoDesc(e.target.value) }} />
                    </ContainerLayoutRow>
                    <ContainerLayoutRow className={styles.actions} >
                        <div onClick={() => onTodoAddBtnClicked()}>
                            <AddIcon style width="1.5em" height="1.5em" fill="#efefef" />
                        </div>
                        <div>
                            <TrashIcon style width="1.5em" height="1.5em" fill="#efefef" />
                        </div>
                    </ContainerLayoutRow>
                </ContainerLayoutRow>
            </AddNewListForm> */}
        </div>
    )
}

export default ListContainer;