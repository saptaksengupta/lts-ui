import React, { Fragment, useContext } from 'react';
import NavigationBar from './NavigationBar';
import TasklBoard from './TaskBoard';
import styles from './taskDetails.module.css';
import BoardContextProvider from '../../../context/BoardContext';



const TaskDetails = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <BoardContextProvider>
                <div className={styles.container}>
                    <NavigationBar />
                    <div className={styles.sliderContainer} >
                        <TasklBoard />
                    </div>
                </div>
            </BoardContextProvider>
        </div>
    )
}

export default TaskDetails;