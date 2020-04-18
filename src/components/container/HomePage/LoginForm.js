import React, { Fragment } from 'react';

import styles from './homePage.module.css';

import { ContainerLayoutColumn, ContainerLayoutRow } from '../../styled/CommonUtils';
import { Card } from '../../styled/cards';
import { LtsTextBox } from '../../styled/Inputs';
import { DefaultButton } from '../../styled/Buttons';

const LoginForm = () => {
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
                        <DefaultButton primary> Let's Get Started </DefaultButton>
                    </ContainerLayoutRow>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginForm;