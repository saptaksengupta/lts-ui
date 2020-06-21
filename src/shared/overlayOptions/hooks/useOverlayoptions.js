import React, { useState, Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from '../overlay-options.module.css';
import { TrashIcon, EditIcon } from '../../../components/styled/Icons';
const useOverlayoptions = (initial = false) => {
    const [show, setShow] = useState(initial);
    const [options, setOptions] = useState(null);
    const toggleOverlay = (options) => {
        setShow(!show);
        if (options)
            setOptions(options);
    }


    const onBtnOneClicked = () => {
        if (options && options.btnOne && options.btnOne.callBack) {
            options.btnOne.callBack(options.btnOne.data)
        }
        toggleOverlay()
    }

    const onButtonTwoClicked = () => {
        if (options && options.btnOne && options.btnTwo.callBack) {
            options.btnTwo.callBack(options.btnTwo.data)
        }
        toggleOverlay()
    }

    const OverLayWithOptions = () => {
        return ReactDOM.createPortal(
            <Fragment>
                <div>
                    {show && (
                        <div className={styles.overlayOptionsContainer} onClick={(e) => { toggleOverlay() }}>
                            <div className={styles.actionsContainer} onClick={(e) => e.stopPropagation()} >
                                <div onClick={(e) => onBtnOneClicked()}>
                                    <EditIcon height="3em" fill="#efefef" ></EditIcon>
                                    <div>{ options ? options.btnOne.name : ''}</div>
                                </div>
                                <div onClick={(e) => onButtonTwoClicked()}>
                                    <TrashIcon height="3em" fill="#efefef" ></TrashIcon>
                                    <div>{ options ? options.btnTwo.name : ''}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Fragment>,
            document.querySelector('#overlay-options-root')
        )
    }

    return [toggleOverlay, OverLayWithOptions]
}

export default useOverlayoptions;