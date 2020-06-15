import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from '../hooks/modal.module.css';

import { ContainerLayoutColumn, ContainerLayoutRow } from '../../../components/styled/CommonUtils';
import { LeftArrow, CrossIcon } from '../../../components/styled/Icons';
import styled from 'styled-components';


const Modal = styled.div``;

const ModalContent = styled(ContainerLayoutColumn)`
    width: 25%;
    min-width: ${props => props.width ? props.width : '375px'};
    max-width: ${props => props.width ? props.width : '375px'};
    min-height: ${props => props.height ? props.height : '30%'};
    max-height: ${props => props.height ? props.height : '30%'};
    justify-content: flex-start;
    color: #efefef;
    opacity:0.9;
`;

const ModalHeader = styled(ContainerLayoutColumn)`
    min-height: 30%;
    // background:  linear-gradient(140.02deg, rgba(24, 40, 72, 1) 14.42%, rgba(121, 165, 254, 0.97) 106.55%);
    background: white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 1em 0.8em;
`;

const ModalTitle = styled(ContainerLayoutRow)`
    font-weight: bold;
    font-size: 1.5em;
    color: black;
`;

const ModalCloseIcon = styled(ContainerLayoutRow)`
    justify-content: flex-end;
    cursor:pointer;
`;

const ModalBody = styled(ContainerLayoutRow)`
    background: white;
    flex: 1;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    color:black;
    padding: 1em;
    width: auto;
`;

const CustomModal = (props) => {
    const modalClassNames = `${styles.withBackDrop} ${styles.modalWrapper} ${props.isshown ? styles.modalShow : styles.modalHide}`
    return ReactDOM.createPortal(
        <Modal className={modalClassNames}>
            <ModalContent className={styles.modalContent} height={props.height} width={props.width}>
                <ModalHeader>
                    <ModalTitle>
                        <ContainerLayoutRow>
                            {props.title}
                        </ContainerLayoutRow>
                        <ModalCloseIcon onClick={() => { props.handleClose() }}>
                            <CrossIcon fill="black" width="1em" />
                        </ModalCloseIcon>
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <div style={{width: '100%'}}>
                        {props.children}
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>,
        document.querySelector("#modal-root")
    )
}

CustomModal.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    isshown: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    width: PropTypes.string,
    height: PropTypes.string
}


export default CustomModal;
