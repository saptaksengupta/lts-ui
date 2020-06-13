import React, { Fragment, useContext } from 'react';
import NavigationBar from './NavigationBar';
import TasklBoard from './TaskBoard';
import styles from './taskDetails.module.css';

import styled from 'styled-components';
import { DefaultButton } from '../../styled/Buttons';
import { AddIcon } from '../../styled/Icons';
import { ResponsiveContext } from '../../../context/ResponsiveContext';
import BoardContextProvider from '../../../context/BoardContext';
import AddBoardModal from './AddBoardModal';

import CustomModal from '../../../shared/modal/components/CustomModal';
import useModal from "../../../shared/modal/hooks/useModal";

import { useBottomSheet } from '../../../shared/bottomSheet/hooks/useBottomSheet';
import { SUPPORTED_DEVICES } from '../../../reducers/ResponsiveReducer';

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

    const { responsiveState } = useContext(ResponsiveContext);
    const currentDevice = responsiveState.device;

    const [modalOpen, setModalOpen, toggleModal] = useModal();
    const [BottomSheet, toggleBottomSheet] = useBottomSheet()


    const onAddBoardIconClicked = () => {
        if (currentDevice === SUPPORTED_DEVICES.MOBILE) {
            toggleBottomSheet()
        } else {
            toggleModal()
        }

    }

    // TODO: uncomment when responsive context 
    // will be implemented
    // const onAddBoardIconClicked = () => {
    //     toggleBottomSheet()
    // }

    return (
        <div style={{ minHeight: '100vh' }}>
            <BoardContextProvider>
                <div className={styles.container}>
                    <NavigationBar />
                    <div className={styles.sliderContainer} >
                        <TasklBoard />
                    </div>
                </div>
                <div className={styles.bottomRightContainer} onClick={() => onAddBoardIconClicked()}>
                    <CircularButton className={styles.circularPrimayBtn} primary>
                        <AddIcon height="1.5em" width="1.5em" />
                    </CircularButton>
                </div>
                <CustomModal width="550px" height="50%" title="Add List Item" isshown={modalOpen} handleClose={() => toggleModal()}>
                    <AddBoardModal onClose={toggleModal} />
                </CustomModal>
                <BottomSheet>
                    <AddBoardModal onClose={toggleBottomSheet} />
                </BottomSheet>
            </BoardContextProvider>
        </div>
    )
}

export default TaskDetails;