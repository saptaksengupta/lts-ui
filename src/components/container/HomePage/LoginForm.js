import React, { Fragment, useContext } from 'react';

import styles from './homePage.module.css';

import { ContainerLayoutColumn, ContainerLayoutRow } from '../../styled/CommonUtils';
import { Card } from '../../styled/cards';
import { LtsTextBox } from '../../styled/Inputs';
import { Button } from '../../styled/Buttons';
import { useHistory } from 'react-router-dom';
import { UserAvatar } from '../../styled/Icons'

import { AuthContext } from '../../../context/AuthContext';

const LoginForm = () => {

    const history = useHistory();
    const { user } = useContext(AuthContext);
    const onBoardClicked = (boardId) => {
        // history.push(`/boards/${user.id}/lists`);
        history.push('/user/todo-board');
    }

    return (
        <ContainerLayoutColumn alignment="center" style={{ height: '100%', justifyContent: 'center' }}>
            <div className={styles.loginContainer}>
                <ContainerLayoutRow alignment="center" className={styles.userAvatar} style={{ marginBottom: '2em' }}>
                    <UserAvatar fill="#182848" height="6em" width="6em" />
                </ContainerLayoutRow>
                <ContainerLayoutColumn>
                    <div className={styles.inputGroup}>
                        <label>Name Please</label>
                        <LtsTextBox />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Phone</label>
                        <LtsTextBox />
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