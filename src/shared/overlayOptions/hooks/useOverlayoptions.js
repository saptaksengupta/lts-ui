import React, { useState, Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from '../overlay-options.module.css';

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
                                    <h3>{ options ? options.btnOne.name : ''}</h3>
                                </div>
                                <div onClick={(e) => onButtonTwoClicked()}>
                                    <h3>{ options ? options.btnTwo.name : ''}</h3>
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