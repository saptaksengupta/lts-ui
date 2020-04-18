import React, { Fragment, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import TasklBoard from './TaskBoard';
import styles from './taskDetails.module.css';

import styled from 'styled-components';
import { DefaultButton } from '../../styled/Buttons';
 

const CircularButton = styled(DefaultButton)`
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 3em;
    background: #4b6cb7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #182848, #4b6cb7);
    background: linear-gradient(to left, #182848, #4b6cb7);
`;

const TaskDetails = () => {

    useEffect(() => {
        // TODO: Fetch the user details, and set it inside authContext
    }, []);

    return (
        <Fragment>
            <div className={styles.container}>
                <NavigationBar />
                <div style={{marginTop: '5em'}} >   
                    <TasklBoard />
                </div>
            </div>
            <div className={styles.bottomRightContainer}>
                <CircularButton primary>
                    +
                </CircularButton>
            </div>
        </Fragment>
    )
}

export default TaskDetails;