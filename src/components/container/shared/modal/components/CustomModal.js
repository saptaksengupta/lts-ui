import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from '../hooks/modal.module.css';


const CustomModal = (props) => {
    return ReactDOM.createPortal(
        <div className={props.isshown ? styles.modalShow : styles.modalHide}>
            {props.children}
        </div>,
        document.querySelector("#modal-root")
    )
}

CustomModal.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    isshown: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}


export default CustomModal;

