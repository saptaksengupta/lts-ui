import React, { useReducer, useContext, useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import styles from "./listItem.module.css";
import styled from 'styled-components';
import ListItem from '../../functional/ListItem';
import { ContainerLayoutRow, ContainerLayoutColumn } from '../../styled/CommonUtils';
import ListContextProvider, { ListContext } from '../../../context/ListItemContext';
import { LIST_ACTIONS } from '../../../reducers/ListReducer';
import { getSocketConnection, SOCKET_EVENTS } from '../../../Config';
import { CircularButton } from '../../styled/Buttons';
import { Card } from '../../styled/cards';
import { AddIcon, TrashIcon } from '../../styled/Icons';
import { AuthContext } from '../../../context/AuthContext';

import CustomModal from '../../../shared/modal/components/CustomModal';
import AddListitemModal from './AddListitemModal';
import useModal from "../../../shared/modal/hooks/useModal";


const AddNewListForm = styled(Card)`
    border-radius: 0px;
    padding: 0;
`;

const ListContainer = (props) => {
    const { listItemState, dispatch } = useContext(ListContext);
    const { currentBoard } = props;

    const [modalOpen, setModalOpen, toggleModal] = useModal();


    useEffect(() => {
        const socketCon = getSocketConnection()
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
        toggleModal()
    }

    const itemListJsx = listItemState.listItems.map((listItem, index) => {
        return (<ListItem key={index} listItem={listItem} itemIndex={index} />)
    })

    const bgImage = require('../../../images/undraw_no_data_qbuo.svg')

    const getEmptyLayout = () => {
        return listItemState.listItems.length == 0 && (
            <div className={styles.emptyLayout}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={bgImage} height="150px"></img>
                </div>
                <div style={{ marginTop: '0.5em' }} >Let's add an item quickly by clicking on that Button.</div>
            </div>
        )
    }

    return (
        <div className={styles.circularContainer}>
            <div className={styles.addListBtnDiv}>
                <CircularButton primary className={styles.addListBtn} onClick={() => { onAddListIconClicked() }}>
                    <AddIcon height="1.5em" fill="#efefef"></AddIcon>
                </CircularButton>
            </div>
            <div className={styles.timeLineContainer}>
                <ContainerLayoutColumn>
                    <ContainerLayoutColumn className={styles.withListsContainer} style={{ flex: 1, margin: '0.5em 2em 0 0' }} alignment="center">
                        {itemListJsx}
                    </ContainerLayoutColumn>
                    <ContainerLayoutColumn>
                        {getEmptyLayout()}
                    </ContainerLayoutColumn>
                </ContainerLayoutColumn>
            </div>
            <CustomModal title="Add List Item" isshown={modalOpen} handleClose={() => toggleModal()}>
                <AddListitemModal currentBoard={currentBoard} closeModal={toggleModal} ></AddListitemModal>
            </CustomModal>
        </div>
    )
}

export default ListContainer;