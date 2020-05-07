import React, { Fragment, useContext } from 'react';

import styles from './homePage.module.css';

import { ContainerLayoutColumn, ContainerLayoutRow } from '../../styled/CommonUtils';
import { Card } from '../../styled/cards';
import { LtsTextBox } from '../../styled/Inputs';
import { DefaultButton } from '../../styled/Buttons';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';

const LoginForm = () => {

    const history = useHistory();
    const {user} = useContext(AuthContext);
    const onBoardClicked = (boardId) => {
        // history.push(`/boards/${user.id}/lists`);
        history.push('/user/todo-board');
    }

    return (
        <Fragment>
            <div className={styles.loginContainer}>
                <Card>
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
                </Card>
                <div style={{ marginTop: '15px', width: '100%' }}>
                    <ContainerLayoutRow>
                        <DefaultButton primary onClick={() => onBoardClicked()}> Let's Get Started </DefaultButton>
                    </ContainerLayoutRow>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginForm;