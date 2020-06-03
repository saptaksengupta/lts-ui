import React, { useState, useContext } from 'react';
import axios from 'axios';

import { AuthContext } from '../../../context/AuthContext';

import { getBaseUrl } from '../../../Config';

import styles from './taskDetails.module.css';
import { LtsHiddenTextBox, LtsHiddenTextArea } from '../../styled/Inputs';
import { TickIcon, TrashIcon } from '../../styled/Icons';

const AddBoardModal = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { authState } = useContext(AuthContext);

    const onBoardAddClicked = (name, description) => {
        if (!name || !description) {
            return false;
        }
        const userId = authState.user.id;
        const addBoardUrl = `${getBaseUrl()}boards/`;
        axios.post(addBoardUrl, { name, description, userId })
            .then((resp) => {
                if (resp.data.status == 200) {
                    setTitle('');
                    setDescription('');
                }
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <div style={{ padding: '1em', width: '100%' }}>
            <div>
                <label>Title</label>
                <LtsHiddenTextBox placeholder="Desctiptioon" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div style={{ marginTop: '1em' }}>
                <label>Description</label>
                <LtsHiddenTextArea rows="8" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className={styles.listActions} style={{marginTop: '1em'}}>
                {title && description ? (
                    <div onClick={() => onBoardAddClicked()}>
                        <TickIcon style width="1.5em" height="1.5em" fill="black" />
                    </div>
                ) : ''}
                <div onClick={() => props.closeModal()}>
                    <TrashIcon style width="1.5em" height="1.5em" fill="black" />
                </div>
            </div>
        </div>
    )
}

export default AddBoardModal;