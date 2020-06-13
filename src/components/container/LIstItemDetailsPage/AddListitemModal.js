import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import styles from './listItem.module.css';
import axios from 'axios';

import { AuthContext } from '../../../context/AuthContext';
import { TrashIcon, TickIcon, AddIcon, CrossIcon } from '../../styled/Icons';
import { ContainerLayoutColumn, ContainerLayoutRow } from '../../styled/CommonUtils';
import { LtsTextBox, LtsHiddenTextBox } from '../../styled/Inputs';
import { LIST_ACTIONS } from '../../../reducers/ListReducer';
import  useModal from '../../../shared/modal/hooks/useModal';

import { getBaseUrl } from '../../../Config';

const AddNewListForm = styled.div`
    max-width: 100%;
    width: 100%;
`;

const AddListitemModal = (props) => {

    const { authState } = useContext(AuthContext);
    const [newTodoDesc, setNewTodoDesc] = useState('');
    const [modalOpen, setModalOpen, toggleModal] = useModal();

    const onTodoAddBtnClicked = () => {
        axios
            .post(`${getBaseUrl()}boards/${props.currentBoard.id}/list-items`, { userId: authState.user.id, description: newTodoDesc })
            .then((resp) => {
                if (resp.data.data) {
                    setNewTodoDesc('');
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <AddNewListForm>
            <div>
                <div style={{ width: '100%' }}>
                    <label>Item Description</label>
                    <LtsHiddenTextBox placeholder="Desctiptioon" width="99%" value={newTodoDesc} onChange={(e) => { setNewTodoDesc(e.target.value) }} />
                    <ContainerLayoutRow style={{ marginTop: '2em' }} alignment="end" >
                        {newTodoDesc ? (
                            <div className={styles.listActions} onClick={() => onTodoAddBtnClicked()}>
                                <TickIcon style width="1.5em" height="1.5em" fill="black" />
                            </div>
                        ) : ''}
                        <div onClick={() => props.closeModal()}>
                            <TrashIcon style width="1.5em" height="1.5em" fill="black" />
                        </div>
                    </ContainerLayoutRow>
                </div>
            </div>
        </AddNewListForm>
    )
}

export default AddListitemModal