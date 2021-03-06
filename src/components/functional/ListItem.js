import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import styled from 'styled-components';
import { ContainerLayoutRow, ContainerLayoutColumn, DefaultContainerLayoutFlex } from '../styled/CommonUtils';

import styles from '../container/LIstItemDetailsPage/listItem.module.css';
import { DefaultCard, Card } from '../styled/cards';
import { TickIcon, TrashIcon, ClockIcon, RevertIcon } from '../styled/Icons';

import { LIST_ACTIONS } from '../../reducers/ListReducer';
import { ListContext } from '../../context/ListItemContext';
import { AuthContext } from '../../context/AuthContext';
import { DateTimeUtils } from '../../shared/helpers/DateTimeHelper';

import { getBaseUrl, getSocketBaseUrl, SOCKET_EVENTS } from '../../Config';

const StyledListItem = styled(ContainerLayoutRow)`
    position: relative;
`;

const StyledCardForListCreation = styled(Card)`
    position: relative;
`;

const StyledListDetailsCard = styled(DefaultCard)`
    // min-width: 80%;
    position:relative;
    min-width: 76%;
    flex:1;
    max-width: 12em;
    // background:#242c2f66;
    background: #939adf;
    margin-left: 1em;
`;

const ListItem = (props) => {

    const { authState } = useContext(AuthContext);
    const { listItemState, dispatch } = useContext(ListContext);
    const { currentBoard } = listItemState;
    const { listItem } = props;
    const [listItemDetails, setListItemDetails] = useState(listItem);

    const onListToggle = (listItemId) => {
        console.log(currentBoard);
        axios.put(`${getBaseUrl()}boards/${currentBoard.id}/list-items/${listItemId}/change`, {
            modifiedBy: authState.user.id
        }).then(resp => {
            const listItem = resp.data.data;
            // handleOnListUpdate(LIST_ACTIONS.CHANGE_STATUS, listItemId, listItem);
        }).catch(err => {
            console.log(err);
        });
    }

    const onDeleteClicked = (listItemId) => {
        axios.delete(`${getBaseUrl()}boards/${currentBoard.id}/list-items/${listItemId}`, {
            modifiedBy: authState.user.id
        }).then(resp => {
            const listItem = resp.data.data;
            dispatch({ type: LIST_ACTIONS.REMOVE_LIST, payload: { listItemId } });
        }).catch(err => {
            console.log(err);
        });
    }

    const debounce = (fn, duration) => {
        let timer;
        return function () {
            let context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(context, args);
            }, duration)
        }
    }

    const doRestCallToUpdate = (listItemId, updatedDesc) => {
        axios.put(`${getBaseUrl()}boards/${currentBoard.id}/list-items/${listItemId}`, {
            modifiedBy: authState.user.id,
            description: updatedDesc
        }).then(resp => {
            if (resp.data.status == 200) {
                console.log('TODO: SHOW SUCCESS ALERT')
            }
        }).catch(err => {
            console.log(err);
        });
    }

    const onListItemDescChanged = debounce(doRestCallToUpdate, 1000);

    const isListChanged = () => {
        return true;
    }

    const handleOnListUpdate = (type, listItemId, listItem) => {
        dispatch({ type: type, payload: { listItemId, listItem } })
        setListItemDetails(listItem);
    }

    useEffect(() => {
        setListItemDetails(listItem);
    }, [listItem]);

    return (
        <StyledListItem className={listItemDetails.isDone ? styles.listIsDone : ''} isDone={listItemDetails.isDone} alignment="center">
            <div className={styles.time} >{DateTimeUtils.parseTime(listItemDetails.updatedAt, DateTimeUtils.SUPPORTED_FORMATS.TIME_IN_TWELVE_HOUR)}</div>
            <ContainerLayoutRow className={styles.listDetails} alignment="start">
                <div className={styles.timelineActionIcon}>
                    {listItemDetails.isDone ? <TickIcon height="1.6em" /> : <ClockIcon height="2em" />}
                </div>
                <StyledListDetailsCard className={styles.listCardFancyBackground} style={{ "--animation-order": props.itemIndex }} >
                    <ContainerLayoutRow>
                        <div className={styles.listHeading} contentEditable={listItemDetails.isDone ? 'false' : 'true'}
                            suppressContentEditableWarning={true}
                            onBlur={e => onListItemDescChanged.bind(this, listItemDetails.id, e.target.innerHTML)()}
                            style={{ flex: 1 }}>
                            {listItemDetails.description}
                        </div>
                        {/* <div className={styles.listDescription}>Some description and some extra text which is big</div> */}
                        <ContainerLayoutRow className={styles.listActions}>
                            {
                                listItemDetails.isDone ? (
                                    <div onClick={e => { onListToggle(listItemDetails.id) }}>
                                        <RevertIcon width="1em" fill="#efefef" height="1em" fill="#182848" />
                                    </div>
                                ) : (
                                        <div onClick={e => { onListToggle(listItemDetails.id) }}>
                                            <TickIcon width="1em" fill="#efefef" height="1em" />
                                        </div>
                                    )
                            }
                            <div onClick={e => onDeleteClicked(listItemDetails.id)}>
                                <TrashIcon width="1em" fill={listItemDetails.isDone ? '#182848' : '#efefef'} height="1em" />
                            </div>
                        </ContainerLayoutRow>
                    </ContainerLayoutRow>
                </StyledListDetailsCard>
            </ContainerLayoutRow>
        </StyledListItem>
    );
}

export default ListItem;