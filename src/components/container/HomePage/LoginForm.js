import React, { Fragment, useContext, useState } from 'react';
import axios from 'axios';
import { getBaseUrl } from '../../../Config';

import styles from './homePage.module.css';

import { ContainerLayoutColumn, ContainerLayoutRow } from '../../styled/CommonUtils';
import { Card } from '../../styled/cards';
import { LtsTextBox } from '../../styled/Inputs';
import { Button } from '../../styled/Buttons';
import { useHistory } from 'react-router-dom';
import { UserAvatar } from '../../styled/Icons';

import { AuthContext } from '../../../context/AuthContext';
import { UserReducer, USER_ACTIONS } from '../../../reducers/UserReducer';

const LoginForm = () => {

    const history = useHistory();
    const { authState, dispatch } = useContext(AuthContext);
    const [phone, setPhone] = useState('');
    const onBoardClicked = (boardId) => {
        // history.push(`/boards/${user.id}/lists`);
            
        const loginUrl = `${getBaseUrl()}users/login`
        axios.post(loginUrl, {
            phone: phone
        }).then((resp) => {
            if (resp.data.status == 200) {
                const userDet = resp.data.data;
                const userDetails = {
                    id: userDet.id,
                    image: userDet.image,
                    name: userDet.name,
                    phone: userDet.phone
                }
                dispatch({ type: USER_ACTIONS.SET_USER, payload: { userDetails } })
                window.location.reload()
            }
        }).catch(() => {

        })

    }

    return (
        <ContainerLayoutColumn alignment="center" style={{ height: '100%', justifyContent: 'center', flex: 1 }}>
            <div className={styles.loginContainer}>
                <ContainerLayoutRow alignment="center" className={styles.userAvatar} style={{ marginBottom: '2em' }}>
                    <UserAvatar fill="#182848" height="6em" width="6em" />
                </ContainerLayoutRow>
                <ContainerLayoutColumn>
                    {/* <div className={styles.inputGroup}>
                        <label>What i am going to call you?</label>
                        <LtsTextBox />
                    </div> */}
                    <div className={styles.inputGroup}>
                        <label>It's Just your mobile number, will do the trick for you</label>
                        <LtsTextBox onBlur={(e) => { setPhone(e.target.value) }} />
                    </div>
                </ContainerLayoutColumn>
                <div style={{ marginTop: '15px', width: '100%' }}>
                    <ContainerLayoutRow>
                        <Button primary onClick={() => onBoardClicked()}> Let's Get Started </Button>
                    </ContainerLayoutRow>
                </div>
            </div>
        </ContainerLayoutColumn>

    )
}

export default LoginForm;