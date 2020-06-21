import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import { AuthContext } from '../../../context/AuthContext';

import { getBaseUrl } from '../../../Config';

import styles from './taskDetails.module.css';
import { LtsHiddenTextBox, LtsHiddenTextArea } from '../../styled/Inputs';
import { TickIcon, TrashIcon } from '../../styled/Icons';

const AddBoardModal = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { options } = props;
    const { authState } = useContext(AuthContext);

    useEffect(() => {
        if (options && options.data) {
            setTitle(options.data.name.trim());
            setDescription(options.data.description.trim());
        }
    }, [options])

    const getRequestPropsBasedOnMode = () => {
        let url = `${getBaseUrl()}boards/`;
        let method = 'POST';
        let data = { name: title, description: description, userId: authState.user.id }

        if (options && options.update) {
            url = `${getBaseUrl()}boards/${options.data.id}`;
            method = 'PUT';
            data['lastModifiedBy'] = authState.user.id;
        }
        return { url, method, data };
    }

    const onBoardAddClicked = () => {
        const {url, method, data} = getRequestPropsBasedOnMode();
        if (!data.name || !data.description) {
            return false;
        }
        axios({ url: url, method: method, data: data})
            .then((resp) => {
                if (resp.data.status == 200) {
                    setTitle('');
                    setDescription('');
                    if (props.onClose)
                        props.onClose()
                }
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <div>
                <label>Title</label>
                <LtsHiddenTextBox width="99%" placeholder="Desctiptioon" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div style={{ marginTop: '1em' }}>
                <label>Description</label>
                <LtsHiddenTextArea rows="4" width="99%" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className={styles.listActions} style={{ marginTop: '1em' }}>
                {title && description ? (
                    <div onClick={() => onBoardAddClicked()}>
                        <TickIcon style width="1.5em" height="1.5em" fill="black" />
                    </div>
                ) : ''}
                <div onClick={() => props.onClose()}>
                    <TrashIcon style width="1.5em" height="1.5em" fill="black" />
                </div>
            </div>
        </div>
    )
}

export default AddBoardModal;