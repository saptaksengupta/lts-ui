import React, { Fragment, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import TasklBoard from './TaskBoard';
import styles from './taskDetails.module.css';

import styled from 'styled-components';
import { DefaultButton } from '../../styled/Buttons';
import AuthContextProvider from '../../../context/AuthContext';
import { AddIcon } from '../../styled/Icons';


const CircularButton = styled(DefaultButton)`
    border-radius: 50%;
    height: 4em;
    width: 4em;
    background: #4b6cb7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #182848, #4b6cb7);
    background: linear-gradient(to left, #182848, #4b6cb7);
    display: flex;
    justify-content: center;
    align-items:center;
    cursor:pointer;
`;

const TaskDetails = () => {

    useEffect(() => {
        // TODO: Fetch the user details, and set it inside authContext
    }, []);

    return (
        <Fragment>
            <AuthContextProvider>
                <div className={styles.container}>
                    <NavigationBar />
                    <div style={{ marginTop: '5em', marginLeft: '3em' }} >
                        <TasklBoard />
                    </div>
                </div>
                <div className={styles.bottomRightContainer}>
                    <CircularButton className={styles.circularPrimayBtn} primary>
                        <AddIcon height="2em" width="2em"/>    
                    </CircularButton>
                </div>
            </AuthContextProvider>
        </Fragment>
    )
}

export default TaskDetails;